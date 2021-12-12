from flask.json import jsonify
from flask import app, request
from models import *
import hashlib,jwt
db.create_all()
db.session.commit()

key='super-secret'

#No route for admin register or check for admin register




@app.route('/api/register', methods=['POST'])
def registersuccess():
    try:    
        data=request.get_json()
        password=data['password']
        hashpass= hashlib.md5(bytes(str(password),encoding ='utf-8')).hexdigest()
        user_check= Customers.query.filter_by(email=data['email']).first()
        if not user_check:
            entry = Customers(name=data['name'],email=data['email'],password=hashpass,contact=data['contact'],address=data['address'])
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'Registration Successful'})
        else:
            return jsonify({'success':False,'message':'User Already Existed for this email'}), 404 
    except Exception as e:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400
    


@app.route('/api/login', methods=['POST'])
def loginSucess():
    try:
        all_data=request.get_json()
        hashedPassword = hashlib.md5(bytes(str(all_data['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = Customers.query.filter_by(email=all_data['email'], password=hashedPassword).first()
        if result:
            payload={"email":all_data['email'],"password":hashedPassword }
            value = jwt.encode(payload, key)
            #user_info
            user_info={'name':result.name,'email':result.email,'contact':result.contact,'address':result.address}
            return jsonify({'success':True,'token':value.decode('utf-8'), 'user_info':user_info})
        #value = jwt.decode(token, options={"verify_signature": False})
        else:
            return jsonify({'success':False,'message':'invalid email/Password'}), 404
    except Exception as e:
        return jsonify({'success':False,'message':'not recieved JSON data'}),400


@app.route('/api/adminlogin',methods=['POST'])
def adminLoginSuccess():
    try:
        all_data=request.get_json()
        result = Admin_Login.query.filter_by(email=all_data['email'], password=all_data['password']).first()
        if result:
            payload={"email":all_data['email'],"password":all_data['password'] }
            value = jwt.encode(payload, key).decode('UTF-8')
            return jsonify({'success':True,'token':value})
        else:
            return jsonify({'success':False,'message':'Wrong Password'}), 404
    except:
        return jsonify({'success':False,'message':'not recieved JSON data'}), 400



@app.route('/api/getproductById/<int:items_id>',methods=['GET'])
def getproductById(items_id):
    result = db.session.query(Items).filter(Items.id==items_id)
    output=[]     
    for Item in result:
        item = {}
        item['product_id']=Item.id
        item['pname']=Item.name
        item['price']=Item.price
        item['imglink']=Item.image_link
        item['description']=Item.description
        output.append(item)
    if output:    
        return jsonify(output)
    else:
        return jsonify({'success':False,'message':'item_id is not present'}) 



@app.route('/api/getproducts',methods=['GET'])
def getproducts():
    result = db.session.query(Items).all()
    output=[]    
    for Item in result:
        item = {}
        item['product_id']=Item.id
        item['pname']=Item.name
        item['price']=Item.price
        item['imglink']=Item.image_link
        item['description']=Item.description
        output.append(item)
    if output:    
        return jsonify(output)
    else:
        return jsonify({'success':False,'message':'Product is not present'})    
    

@app.route('/api/getOrdersForUser',methods=['GET'])
def getOrdersForUser():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Customers.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = Orders.query.filter_by(customer_id=res.id).all()
            output=[]
            for order in result:
                item = Items.query.filter_by(id=order.item_id).first()
                obj={}
                obj['name']=item.name
                obj['price']=item.price
                obj['imglink']=item.image_link
                obj['description']=item.description
                obj['date']=order.date
                output.append(obj)
            return jsonify({"success":True, "order":output})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400
    


@app.route('/api/getCartItemsForUser',methods=['GET'])
def getCartItemsForUser():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Customers.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = Carts.query.filter_by(customer_id=res.id).all()
            output=[]
            
            for cart in result:
                item = Items.query.filter_by(id=cart.item_id).first()
                obj={}
                obj['pname']=item.name
                obj['price']=item.price
                obj['imglink']=item.image_link
                obj['description']=item.description
                obj['product_id']=item.id
                output.append(obj)
            return jsonify({"success":True, "cart":output})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400

    
@app.route('/api/createNewProduct',methods=['POST'])
def createNewProduct():
    try:
        token = request.headers['token']
        decoded = jwt.decode(token, options={"verify_signature": False})
        admin_check= Admin_Login.query.filter_by(email=decoded["email"], password=decoded['password']).first()
        if admin_check:
            data=request.get_json()
            #val = Items(name=data['name'],price=data['price'],image_link=data['imglink'],description=data['description'])
            i_id = Items.query.filter_by(name=data['name'],price=data['price'],image_link=data['imglink'],description=data['description']).first()
            if not i_id:
                entry = Items(name=data['name'],price=data['price'],image_link=data['imglink'],description=data['description'])
                db.session.add(entry)
                db.session.commit()
                return jsonify({'success':True,'message':'item added successfully'})
            else:
                return jsonify({'success':False,'message':'item already present'}), 404
        else:
            return jsonify({'success':False,'message':'Not Authorised'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


@app.route('/api/updateCart',methods=['POST'])
def addItemToCart():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        hashedPassword = hashlib.md5(bytes(str(value['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        res = Customers.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            data=request.get_json()
            db.session.query(Carts).filter_by(customer_id=res.id).delete()
            db.session.commit()
            for it in data:
                entry = Carts(customer_id=res.id,item_id=it['item_id'])
                db.session.add(entry)
                db.session.commit()
            return jsonify({'success':True,'message':'cart updated successfully'})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


@app.route('/api/placeOrder',methods=['POST'])
def placeOrder():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        hashedPassword = hashlib.md5(bytes(str(value['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        res = Customers.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            data=request.get_json()
            db.session.query(Carts).filter_by(customer_id=res.id).delete()
            db.session.commit()
            for it in data:
                entry = Orders(customer_id=res.id,item_id=it['item_id'])
                db.session.add(entry)
                db.session.commit()
            return jsonify({'success':True,'message':'Order placed successfully'})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400

@app.route('/api/userinfo',methods=['GET'])
def verifyToken():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        result = Customers.query.filter_by(email=value['email']).first()
        user_info={'name':result.name,'email':result.email,'contact':result.contact,'address':result.address}
        return jsonify({"success":True, "user_info":user_info})
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400

@app.route('/api/getCartTotalForUser',methods=['GET'])
def getCartTotalForUser():
    try:
        token=request.headers['token']
        value = jwt.decode(token, options={"verify_signature": False})
        res = Customers.query.filter_by(email=value['email'], password=value['password']).first()
        if res:
            result = Carts.query.filter_by(customer_id=res.id).all()
            total = 0
            for cart in result:
                item = Items.query.filter_by(id=cart.item_id).first()
                total+= int(item.price)
            return jsonify({"success":True, "total":total})
        else:
            return jsonify({'success':False,'message':'invalid email/password'}), 404
    except:
        return jsonify({'success':False,'message':'Request misses token/json data'}), 400


# if __name__ == "__main__":
#     app.run(debug=True, port=7000)

