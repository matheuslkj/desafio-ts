from database import db

class Agendamento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10), nullable=False)
    horario = db.Column(db.String(5), nullable=False)
    cliente = db.Column(db.String(100), nullable=False)
    servico = db.Column(db.String(100), nullable=False)
