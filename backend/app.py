import os
from dotenv import load_dotenv
from flask import Flask
from controllers.users import user

load_dotenv()

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.register_blueprint(user)