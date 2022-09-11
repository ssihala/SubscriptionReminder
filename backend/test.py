import requests

myobj = {"username": "Tesht", "password": "Password.k123"}

# url = 'http://127.0.0.1:5000/signup'
# x = requests.post(url, json = myobj)

url = 'http://127.0.0.1:5000/signin'
x = requests.post(url, json = myobj)



