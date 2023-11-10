from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    message = "Hello, World"
    return render_template('index.html', message=message)

@app.route("/buscar",methods=["GET","POST"])
def buscar():
    return render_template('buscar.html')

@app.route("/insertar",methods=["GET","POST"])
def insertar():
    return render_template('insertar.html')

if __name__ == '__main__':
    app.run(debug=True)