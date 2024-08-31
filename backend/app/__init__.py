from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder="../../frontend/public/templates")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quiz.db'
db = SQLAlchemy(app)

from app import routes
from app import models

