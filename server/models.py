from sqlalchemy_serializer import SerializerMixin

from config import db

class Task (db.Model, SerializerMixin):
    __tablename__ = 'tasks'


    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String)
    due = db.Column(db.DateTime)
    category = db.Column(db.String)
    note_to_self = db.Column(db.String)
    done = db.Column(db.Boolean)
    priority = db.Column(db.Boolean)



class Event (db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    