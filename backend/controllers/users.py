from flask import Blueprint, jsonify, request
from models.user import User

user = Blueprint("user", __name__)

@user.route('/signup', methods=["POST"])
def signup():
    
    # If returns false, user already in database, otherwise, user created
    params = request.get_json()
    username = params['username']

    user = User(username)
    created = user.create_user()

    return jsonify({"created": created})




