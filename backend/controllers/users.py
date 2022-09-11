from flask import Blueprint, jsonify, request
from models.user import User

user = Blueprint("user", __name__)

@user.route('/signup', methods=["POST"])
def signup():
    
    # If returns false, user already in database, otherwise, user created
    params = request.get_json()
    username = params['username']
    password = params['password']

    user = User(username, password)
    created = user.create_user()

    return jsonify({"created": created})

@user.route('/signin', methods=["POST"])
def signin():
    params = request.get_json()
    username = params['username']
    password = params['password']

    signin_status = User.check_user(username, password)

    return signin_status







