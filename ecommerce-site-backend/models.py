from enum import unique
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost/searchsample"
db = SQLAlchemy(app)


class Customers(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique = False, nullable=False)
    contact = db.Column(db.Integer, unique=False, nullable=False)
    address=db.Column(db.String(100), unique=False, nullable=False)


class Items(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    price=db.Column(db.Integer, unique=False, nullable=False)
    image_link=db.Column(db.String(300), unique=False, nullable=False)
    description=db.Column(db.String(100), unique=False, nullable=True)

class Categories(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    description=db.Column(db.String(100), unique=False, nullable=True)


class Orders(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    customer_id = db.Column(db.Integer,db.ForeignKey('customers.id'), unique=False, nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), unique=False, nullable=False)
    date=db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)


class Carts(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'carts'
    id = db.Column(db.Integer, primary_key = True)
    customer_id = db.Column(db.Integer,db.ForeignKey('customers.id'), unique=False, nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), unique=False, nullable=False)
    date=db.Column(db.Date, unique=False, nullable=False,default=datetime.datetime.utcnow)
    quantity = db.Column(db.Integer, unique=False, nullable=False,default=1)



class Item_Category(db.Model):
    # you can even specify the table name with which you are working.
    __tablename__ = 'item_category'
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), unique=False, nullable=False,primary_key=True)
    category_id = db.Column(db.Integer,db.ForeignKey('categories.id'), unique=False, nullable=False,primary_key=True)