from app import app
from flask import jsonify

@app.route("/api/questions", methods=['GET'])
def get_questions():
    return jsonify(
        {"questions": 
            ["What is a motherboard?",
            "What is RAM?",
            "What is DIMM?"]
        }
        )
