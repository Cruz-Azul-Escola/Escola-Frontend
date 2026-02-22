// Abrir opções
const views = document.getElementsByClassName("views");
const abrirAluno = document.getElementById("view-alunos");
const abrirProfessor = document.getElementById("view-professores");
const abrirTurma = document.getElementById("view-turmas");
const abrirDisciplina = document.getElementById("view-disciplinas");
const abrirSala = document.getElementById("view-salas");
const abrirVinculacao = document.getElementById("view-vinculacoes");

// Seções
const secoes = document.getElementsByClassName("secoes");
const secaoAluno = document.getElementById("secao-aluno");
const secaoProfessor = document.getElementById("secao-professor");
const secaoTurma = document.getElementById("secao-turma");
const secaoDisciplina = document.getElementById("secao-disciplina");
const secaoSala = document.getElementById("secao-sala");
const secaoVinculacao = document.getElementById("secao-vinculacao");

// Cliques
abrirAluno.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirAluno.style.background = "white";
  abrirAluno.style.color = "var(--corAzul)";
  secaoAluno.style.display = "block";
});
abrirProfessor.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirProfessor.style.background = "white";
  abrirProfessor.style.color = "var(--corAzul)";
  secaoProfessor.style.display = "block";
});
abrirTurma.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirTurma.style.background = "white";
  abrirTurma.style.color = "var(--corAzul)";
  secaoTurma.style.display = "block";
});
abrirDisciplina.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirDisciplina.style.background = "white";
  abrirDisciplina.style.color = "var(--corAzul)";
  secaoDisciplina.style.display = "block";
});
abrirSala.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirSala.style.background = "white";
  abrirSala.style.color = "var(--corAzul)";
  secaoSala.style.display = "block";
});
abrirVinculacao.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
  abrirVinculacao.style.background = "white";
  abrirVinculacao.style.color = "var(--corAzul)";
  secaoVinculacao.style.display = "block";
});

let alunos = [
  { id: 1, nome: "João", cpf: "000.000.000-00", matricula: "A001", email: "joao@exemplo.com", sala: "1A" },
  { id: 2, nome: "Maria", cpf: "111.111.111-11", matricula: "A002", email: "maria@exemplo.com", sala: "2B" }
];

const tbodyAlunos = document.getElementById("tabela-alunos-body");

function renderTabelaAlunos() {
  if (!tbodyAlunos) return;

  tbodyAlunos.innerHTML = alunos.map(a => `
    <tr>
      <td>${a.id}</td>
      <td>${a.nome}</td>
      <td>${a.cpf}</td>
      <td>${a.matricula}</td>
      <td>
        <button type="button" class="btn-editar-aluno" data-id="${a.id}">Editar</button>
        <button type="button" class="btn-excluir-aluno" data-id="${a.id}">Excluir</button>
      </td>
    </tr>
  `).join("");
}

const inputEditId = document.getElementById("aluno-edit-id");
const inputEditNome = document.getElementById("aluno-edit-nome");
const inputEditEmail = document.getElementById("aluno-edit-email");
const inputEditCpf = document.getElementById("aluno-edit-cpf");
const inputEditMatricula = document.getElementById("aluno-edit-matricula");

document.addEventListener("click", (e) => {
  const btnEditar = e.target.closest(".btn-editar-aluno");
  const btnExcluir = e.target.closest(".btn-excluir-aluno");

  if (btnEditar) {
    const id = Number(btnEditar.dataset.id);
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return;

    inputEditId.value = aluno.id;
    inputEditNome.value = aluno.nome;
    inputEditEmail.value = aluno.email;
    inputEditCpf.value = aluno.cpf;
    inputEditMatricula.value = aluno.matricula;

    inputEditNome.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (btnExcluir) {
    const id = Number(btnExcluir.dataset.id);
    const aluno = alunos.find(a => a.id === id);
    if (!aluno) return;

    const ok = confirm(`Excluir aluno ${aluno.nome} (ID ${aluno.id})?`);
    if (!ok) return;

    alunos = alunos.filter(a => a.id !== id);
    renderTabelaAlunos();
  }
});

renderTabelaAlunos();
