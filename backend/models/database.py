from pymongo import MongoClient

class Database:
    client = MongoClient("mongodb+srv://User123:Password.123@subscriptions.povx2sj.mongodb.net/?retryWrites=true&w=majority")
    db = client["Subscriptions"]