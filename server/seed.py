
#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc


# Local imports
from app import app
from models import db, Task, Event

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        print("Deleting Previous Tasks...")
        Task.query.delete()
        db.session.commit()

        print("Seeding new tasks...")
        tasks = []
        t1 = Task(name='Get gas', category="Other", note_to_self="Go to the gas station by work building... it's cheaper", done=False, priority=True)
        
        t2 = Task(name='Vacuum', category="Around the House", note_to_self="Only do the upstairs this week", done=False, priority=True)
        t3 = Task(name='Workout', category="Health", note_to_self="It's gonna be hot this week!", done=False, priority=True)
        t4 = Task(name='Phase 4 Project', category="Web Dev", note_to_self="Take breaks <3", done=False, priority=True)
        

        tasks.append(t1)
        tasks.append(t2)
        tasks.append(t3)
        tasks.append(t4)

        db.session.add_all(tasks)
        db.session.commit()

        print("Deleting previous events...")
        Event.query.delete()
        db.session.commit()

        print("Seeding new events....")

        events = []

        e1 = Event(title="kickboxing", start="2023-04-16", end="2023-04-16")



# class datetime.datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None, *, fold=0)