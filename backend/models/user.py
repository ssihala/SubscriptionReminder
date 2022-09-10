from models.database import Database

class User(Database):
    def __init__(self, username):
        self.users_collection = Database.db['Users']
        self.username = username
        self.subscriptions = []

    def create_user(self):
        if not self.users_collection.find_one({"username": self.username}):
            user = {"username": self.username,
                    "subscriptions": self.subscriptions}
            self.users_collection.insert_one(user)
            return True
        else:
            print("User already in database")
            return False
