from APlusQuiz import app

@app.route("/questions")
def questions():
    return {
    "Questions":
    [
        "What is a motherboard?",
        "What is RAM?",
        "What is DIMM?"
    ]
}