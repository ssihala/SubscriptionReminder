from models.database import Database

class User(Database):
    users_collection = Database.db['Users']
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.subscriptions = []

    def create_user(self):
        if not User.users_collection.find_one({"username": self.username}):
            user = {"username": self.username,
                    "password": self.password,
                    "subscriptions": self.subscriptions}
            self.users_collection.insert_one(user)
            return True
        else:
            print("User already in database")
            return False

    @classmethod
    def check_user(cls, username, password):
        user = cls.users_collection.find_one({"username": username})
        if not user:
            return {"message": "User not found", "code": 404}
        if user['password'] != password:
            return {"message": "Wrong password", "code": 401}
                
        return {"message": "Successfully logged in", "code": 200}
         

        
