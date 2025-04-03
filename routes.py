import os
from flask import Blueprint, request, jsonify
from database import db
from models import Agendamento
from flask import render_template

agendamento_bp = Blueprint('agendamentos', __name__)

@agendamento_bp.route('/')
def index():
    return render_template(os.path.join('templates', 'index.html'))

# Criar um agendamento
@agendamento_bp.route('/agendamentos', methods=['POST'])
def criar_agendamento():
    dados = request.json
    novo_agendamento = Agendamento(**dados)
    db.session.add(novo_agendamento)
    db.session.commit()
    return jsonify({"mensagem": "Agendamento criado com sucesso!"}), 201

# Listar agendamentos
@agendamento_bp.route('/agendamentos', methods=['GET'])
def listar_agendamentos():
    agendamentos = Agendamento.query.all()
    lista = [{"id": a.id, "data": a.data, "horario": a.horario, "cliente": a.cliente, "servico": a.servico} for a in agendamentos]
    return jsonify(lista), 200

# Editar um agendamento
@agendamento_bp.route('/agendamentos/<int:id>', methods=['PUT'])
def editar_agendamento(id):
    agendamento = Agendamento.query.get_or_404(id)
    dados = request.json
    agendamento.data = dados.get("data", agendamento.data)
    agendamento.horario = dados.get("horario", agendamento.horario)
    agendamento.cliente = dados.get("cliente", agendamento.cliente)
    agendamento.servico = dados.get("servico", agendamento.servico)
    db.session.commit()
    return jsonify({"mensagem": "Agendamento atualizado!"}), 200

# Deletar um agendamento
@agendamento_bp.route('/agendamentos/<int:id>', methods=['DELETE'])
def deletar_agendamento(id):
    agendamento = Agendamento.query.get_or_404(id)
    db.session.delete(agendamento)
    db.session.commit()
    return jsonify({"mensagem": "Agendamento removido!"}), 200

