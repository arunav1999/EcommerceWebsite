

from flask.json import jsonify
from flask import app, request, make_response,Response,abort
from flask.templating import render_template
from models import *
import hashlib
db.create_all()
db.session.commit()





@app.route('/loginsuccess', methods=['POST'])
def loginSucess():
    if request.method == 'POST':
        all_data=request.get_json()
        hashedPassword = hashlib.md5(bytes(str(all_data['password']),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = db.session.query(Customers).filter(Customers.email==all_data['email'], Customers.password==hashedPassword)
        for row in result:
            if (len(row.email)!=0):
                return jsonify({'success':True,'message':'Login Successful'})
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
    return jsonify(output)



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
    
    result = db.session.query(Orders).all()
    output=[]
        
    for Order in result:
        item = {}
        item['id']=Order.id
        item['customer_id']=Order.customer_id
        item['item_id']=Order.item_id
        item['date']=Order.date
        item['quantity']=Order.quantity

        output.append(item)
    return jsonify(output)

@app.route('/getCartItemsForUser/<int:customers_id>',methods=['GET'])
def getCartItemsForUser(customers_id):
    
    result = db.session.query(Carts).filter(Carts.customer_id==customers_id)
    output=[]
        
    for Item in result:
        item = {}
        item['id']=Item.id
        item['customer_id']=Item.customer_id
        item['item_id']=Item.item-id
        item['date']=Item.date
        item['quantity']=Item.quantity
        output.append(item)
    return jsonify(output)

    
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
    if request.method == 'POST':
        data=request.get_json()
        i_id = Carts.query.filter_by(item_id=data['product_id'],customer_id=data['user_id']).first()
        if not i_id:
            entry = Carts(customer_id=data['user_id'],item_id=data['product_id'])
            db.session.add(entry)
            db.session.commit()
            return jsonify({'success':True,'message':'item added successfully'})
        else:
            h = Carts.query.filter_by(item_id=data['product_id'],customer_id=data['user_id']).update({Carts.quantity:1+Carts.quantity})
            db.session.commit()
            return jsonify({'success':False,'message':'item incremented successfully'})
    return jsonify({'success':False,'message':'Failed','error_code':404})




if __name__ == "__main__":
    app.run(debug=True, port=6000)

#logging -> reference https://www.askpython.com/python-modules/flask/flask-logging
# Five levels of debugging
# debug, info, warning, error, critical
