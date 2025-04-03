const apiBaseUrl = "http://127.0.0.1:5000/api";

// Função para carregar os agendamentos
async function carregarAgendamentos() {
    try {
        const resposta = await fetch(`${apiBaseUrl}/agendamentos`);
        if (!resposta.ok) throw new Error("Erro ao buscar agendamentos");

        const agendamentos = await resposta.json();
        const lista = document.getElementById("lista-agendamentos");
        if (!lista) {
            console.error("Elemento 'lista-agendamentos' não encontrado!");
            return;
        }
        lista.innerHTML = "";

        agendamentos.forEach(a => {
            lista.innerHTML += `
                <tr id="row-${a.id}">
                    <td>${a.id}</td>
                    <td>${a.data}</td>
                    <td>${a.horario}</td>
                    <td>${a.cliente}</td>
                    <td>${a.servico}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editarLinha(${a.id}, '${a.data}', '${a.horario}', '${a.cliente}', '${a.servico}')">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deletarAgendamento(${a.id})">Excluir</button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar agendamentos:", error);
    }
}

// Função para transformar a linha em um formulário editável
function editarLinha(id, data, horario, cliente, servico) {
    const linha = document.getElementById(`row-${id}`);
    if (!linha) {
        console.error("Linha do agendamento não encontrada!");
        return;
    }

    linha.innerHTML = `
        <td>${id}</td>
        <td><input type="date" class="form-control" id="edit-data-${id}" value="${data}"></td>
        <td><input type="time" class="form-control" id="edit-horario-${id}" value="${horario}"></td>
        <td><input type="text" class="form-control" id="edit-cliente-${id}" value="${cliente}"></td>
        <td><input type="text" class="form-control" id="edit-servico-${id}" value="${servico}"></td>
        <td>
            <button class="btn btn-success btn-sm" onclick="salvarEdicao(${id})">Salvar</button>
            <button class="btn btn-secondary btn-sm" onclick="carregarAgendamentos()">Cancelar</button>
        </td>
    `;
}

// Função para salvar a edição
async function salvarEdicao(id) {
    const data = document.getElementById(`edit-data-${id}`).value;
    const horario = document.getElementById(`edit-horario-${id}`).value;
    const cliente = document.getElementById(`edit-cliente-${id}`).value;
    const servico = document.getElementById(`edit-servico-${id}`).value;

    const dadosAtualizados = { data, horario, cliente, servico };

    try {
        const resposta = await fetch(`${apiBaseUrl}/agendamentos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!resposta.ok) throw new Error("Erro ao editar agendamento");

        carregarAgendamentos(); // Atualiza a tabela após a edição
    } catch (error) {
        console.error("Erro ao editar agendamento:", error);
    }
}

// Função para deletar um agendamento
async function deletarAgendamento(id) {
    if (!confirm("Deseja realmente excluir este agendamento?")) return;

    try {
        const resposta = await fetch(`${apiBaseUrl}/agendamentos/${id}`, { method: "DELETE" });
        if (!resposta.ok) throw new Error("Erro ao excluir agendamento");

        carregarAgendamentos();
    } catch (error) {
        console.error("Erro ao deletar agendamento:", error);
    }
}

// Carregar os agendamentos ao iniciar
document.addEventListener("DOMContentLoaded", carregarAgendamentos);
