#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, send_from_directory, send_file, redirect, session,url_for,jsonify,Response

import io
import os

app = Flask(__name__)
app.secret_key = 'mayhar1235'


@app.route("/", methods=['POST', 'GET'])
def login():
    return render_template('login_choice.html')

@app.route("/file_save", methods=['POST', 'GET'])
def file_save():
    if request.method == "POST":
        f = request.files['audio_data']
        print('tabs',request.form['data'])
        with open('file.wav', 'wb') as audio:
            f.save(audio)



        return jsonify({'done':1,'choice':1,'audio':'Starting'})

#
@app.route("/file_send", methods=['GET', 'POST'])
def file_send():
    file=''
    print(os.getcwd())
    for i,j,k in os.walk(os.path.join(os.getcwd(),'audio')):
        print(i,j,k)
        file=k[0]

    return send_file(os.path.join('audio',file))

#
@app.route("/file_send2", methods=['GET', 'POST'])
def file_send2():
    file=''
    print(os.getcwd())
    for i,j,k in os.walk(os.path.join(os.getcwd(),'audio')):
        print(i,j,k)
        file=k[0]
    print('jhfghfhgfgh',file)
    return send_file(os.path.join('audio',file))

@app.route("/main", methods=['GET', 'POST'])
def main():

    return render_template('index1.html')

if __name__ == "__main__":

    app.run(host="0.0.0.0", port="80",debug=False)#(debug=False,host='0.0.0.0')
