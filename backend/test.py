import requests

url = 'http://127.0.0.1:5000/signup'
myobj = {"username": "Test"}

x = requests.post(url, json = myobj)

print(x.text)