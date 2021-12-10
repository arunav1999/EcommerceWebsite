

from flask.json import jsonify
from flask import app, request, make_response,Response,abort
from flask.templating import render_template
from models import *
import hashlib,jwt,requests
db.create_all()
db.session.commit()



key='super-secret'




@app.route('/loginsuccess', methods=['POST'])
def loginSucess():
    if request.method == 'POST':
        all_data=request.get_json()
        hashedPassword = hashlib.md5(bytes(str(all_data['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = db.session.query(Customers).filter(Customers.email==all_data['email'], Customers.password==hashedPassword)
        payload={"email":all_data['email'],"password":hashedPassword }
        value = jwt.encode(payload, key)
        #value = jwt.decode(token, options={"verify_signature": False})
        for row in result:
            if (len(row.email)!=0):
                return jsonify({'success':True,'token':value.decode('utf-8')})
            else:
                return jsonify({'success':False,'message':'Wrong Password'})
    return jsonify({'success':False,'message':'Failed','error_code':404})

        
@app.route('/getproductById/<int:items_id>',methods=['GET'])
def getproductById(items_id):
    
    result = db.session.query(Items).filter(Items.id==items_id)
    output=[]
        
    for Item in result:
        item = {}
        item['id']=Item.id
        item['name']=Item.name
        item['price']=Item.price
        item['img_link']=Item.image_link
        item['description']=Item.description
        
        output.append(item)
    if output:    
        return jsonify(output)
    else:
        return jsonify({'success':False,'message':'Product is not present'}) 



@app.route('/getproducts',methods=['GET'])
def getproducts():
    
    result = db.session.query(Items).all()
    output=[]
        
    for Item in result:
        item = {}
        item['id']=Item.id
        item['name']=Item.name
        item['price']=Item.price
        item['img_link']=Item.image_link
        item['description']=Item.description

        output.append(item)
    return jsonify(output)

@app.route('/getOrdersForUser',methods=['GET'])
def getOrdersForUser():
    token=request.headers['token']
    value = jwt.decode(token, options={"verify_signature": False})
    res = db.session.query(Customers).filter(Customers.email==value['email'])
    if res:
        for it in res:
            result = db.session.query(Orders).filter(Orders.customer_id==it.id)
        output=[]
        
        for Order in result:
            item = {}
            item['id']=Order.id
            item['customer_id']=Order.customer_id
            item['item_id']=Order.item_id
            item['date']=Order.date
            output.append(item)
        return jsonify(output)
    else:
        return jsonify({'success':False,'message':'User is not Authorised'})

@app.route('/getCartItemsForUser',methods=['GET'])
def getCartItemsForUser():
    token=request.headers['token']
    value = jwt.decode(token, options={"verify_signature": False})
    res = db.session.query(Customers).filter(Customers.email==value['email'])
    if res:
        for it in res:
            result = db.session.query(Carts).filter(it.id==Carts.customer_id)
        output=[]
        
        for Item in result:
            item = {}
            item['id']=Item.id
            item['customer_id']=Item.customer_id
            item['item_id']=Item.item_id
            item['date']=Item.date
            item['quantity']=Item.quantity
            output.append(item)
        return jsonify(output)
    else:
        return jsonify({'success':False,'message':'User is not Authorised'})

    
@app.route('/createNewProduct',methods=['POST'])
def createNewProduct():
    if request.method == 'POST':
        data=request.get_json()
        val = Items(name=data['name'],price=data['price'],image_link=data['img_link'],description=data['description'])
        i_id = Items.query.filter_by(name=data['name'],price=data['price'],image_link=data['img_link'],description=data['description']).first()
        if not i_id:
            entry = Items(name=data['name'],price=data['price'],image_link=data['img_link'],description=data['description'])
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'item added successfully'})
        else:
            return jsonify({'success':False,'message':'item already present'})
    return jsonify({'success':False,'message':'Failed','error_code':404})


@app.route('/addItemToCart',methods=['POST'])
def addItemToCart():
    token=request.headers['token']
    value = jwt.decode(token, options={"verify_signature": False})
    res = db.session.query(Customers).filter(Customers.email==value['email'])
    if res:

        if request.method == 'POST':
            data=request.get_json()
        
            for ig in res:
                db.session.query(Carts).filter_by(customer_id=ig.id).delete()
                db.session.commit()
            for ig in res:
                for it in data:
                    entry = Carts(customer_id=ig.id,item_id=it['item_id'])
                    db.session.add(entry)
                    db.session.commit()
            return jsonify({'success':True,'message':'items added successfully'})
        # else:
        #     h = Carts.query.filter_by(item_id=data['product_id'],customer_id=data['user_id']).update({Carts.quantity:1+Carts.quantity})
        #     db.session.commit()
        #     return jsonify({'success':False,'message':'item incremented successfully'})
        return jsonify({'success':False,'message':'Failed','error_code':404})
    else:
        return jsonify({'success':False,'message':'Customer is not Authorised'})


@app.route('/placeOrder',methods=['POST'])
def placeOrder():
    token=request.headers['token']
    value = jwt.decode(token, options={"verify_signature": False})
    res = db.session.query(Customers).filter(Customers.email==value['email'])
    if res:

        if request.method == 'POST':
            data=request.get_json()
            for ig in res:
                db.session.query(Carts).filter_by(customer_id=ig.id).delete()
                db.session.commit()
            for ig in res:
                for it in data:
                    entry = Orders(customer_id=ig.id,item_id=it['item_id'])
                    db.session.add(entry)
                    db.session.commit()
            return jsonify({'success':True,'message':'items ordered successfully'})
        # else:
        #     h = Carts.query.filter_by(item_id=data['product_id'],customer_id=data['user_id']).update({Carts.quantity:1+Carts.quantity})
        #     db.session.commit()
        #     return jsonify({'success':False,'message':'item incremented successfully'})
        return jsonify({'success':False,'message':'Failed','error_code':404})
    else:
        return jsonify({'success':False,'message':'Customer is not Authorised'})



if __name__ == "__main__":
    app.run(debug=True, port=7000)

#logging -> reference https://www.askpython.com/python-modules/flask/flask-logging
# Five levels of debugging
# debug, info, warning, error, critical
