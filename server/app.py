#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Task, Event


class Home(Resource):
    def get(self):
        return make_response({"message":"WELCOME! You're doing great!"})
api.add_resource(Home, '/')

class Tasks(Resource):
    def get(self):
        tasks = [t.to_dict() for t in Task.query.all()]

        if len(tasks) < 1:
            return make_response({"message":"There are no tasks to display!"}, 200)
        
        return make_response(tasks, 200)
    
api.add_resource(Tasks, '/tasks')


class Events(Resource):
    def get(self):
        events = [e.to_dict() for e in Event.query.all()]
        if len(events):
            return make_response({"message":"There are no events to display"}, 200)
        
        return make_response(events, 200)
api.add_resource(Events, '/events')   


if __name__ == '__main__':
    app.run(port=5555, debug=True)