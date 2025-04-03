import os
from flask import Flask, render_template, send_from_directory
from database import db
from routes import agendamento_bp

app = Flask(__name__, template_folder="templates", static_folder="static")

# Configuração do banco de dados SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///agendamentos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Registrar rotas
app.register_blueprint(agendamento_bp, url_prefix='/api')

# Criar o banco de dados
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

if __name__ == '__main__':
    app.run(debug=True)
