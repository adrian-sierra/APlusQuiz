from app import app
from app import models
from app import db
from flask import jsonify, redirect, url_for, render_template

@app.route("/", methods=['GET'])
def index():
    return render_template("home.html")

@app.route("/note", methods=['GET'])
def add_notes():
    test_note = models.Note(note="hello, world")
    db.session.add(test_note)
    db.session.commit() 
    return redirect(url_for('index'))


@app.route("/api/questions", methods=['GET'])
def get_questions():
    return jsonify(
        {"questions": 
            ["What is a motherboard?",
            "What is RAM?",
            "What is DIMM?"]
        }
        )