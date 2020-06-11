from flask import Flask, render_template
from flask_socketio import SocketIO
#from config import DevConfig
import sqlite3
import random


app = Flask(__name__)
#app.config.from_object(DevConfig)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


# DATABASE = 'Qcloud.db'
# def readsql():
#     bar = []
#     with sqlite3.connect(DATABASE) as con:
#         cur = con.cursor()  # construct pointer
#         search = "select * from todaytab where date='{d}'".format(d=dateid,ps=data[0]['productsku'])
#         cur.execute(search)
#         for row in cur.fetchall():  #(date,productsku,productpass,defect1-3,totalproduct,sendtime)
#             print('row : ', row)
#     return bar

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/history')
def history():
    return render_template('history.html')

if __name__ == "__main__":
    socketio.run(app, port='8000')
    #app.run(port='8000')
