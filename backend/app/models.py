from app import db

class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    note = db.Column(db.String(1000), nullable=False)

    def __repr__(self):
        return '<ID %r>' % self.id
    
