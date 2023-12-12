from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
def login():
    return render_template('login.html')

@app.route("/register",methods=["GET","POST"])
def register():
    return render_template('registro.html')

@app.route("/login",methods=["GET","POST"])
def token():
    # Lógica para la página de token si es necesaria
    return render_template('validation.html')

@app.route("/contactos")
def index():
    message = "Hello, World"
    return render_template('index.html', message=message)

@app.route("/buscar",methods=["GET","POST"])
def buscar():
    return render_template('buscar.html')

@app.route("/insertar",methods=["GET","POST"])
def insertar():
    return render_template('insertar.html')

@app.route("/ver",methods=["GET"])
def ver():
    return render_template('ver.html')
@app.route("/borrar",methods=["GET", "POST"])
def borrar():
    return render_template('borrar.html')

@app.route("/editar",methods=["GET", "POST"])
def editar():
    return render_template('editar.html')

if __name__ == '__main__':
    app.run(debug=True)