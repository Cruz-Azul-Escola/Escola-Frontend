// Abrir opções
const views = document.getElementsByClassName("views");
const abrirAluno = document.getElementById("view-alunos");
const abrirProfessor = document.getElementById("view-professores");
const abrirTurma = document.getElementById("view-turmas");
const abrirDisciplina = document.getElementById("view-disciplinas");
const abrirSala = document.getElementById("view-salas");
const abrirVinculacao = document.getElementById("view-vinculacoes");

// Seções
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
  abrirAluno.style.background = "white";
  abrirAluno.style.color = "var(--corAzul)";
  secaoAluno.style.display = "block";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirProfessor.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  abrirProfessor.style.background = "white";
  abrirProfessor.style.color = "var(--corAzul)";
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "block";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirTurma.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  abrirTurma.style.background = "white";
  abrirTurma.style.color = "var(--corAzul)";
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "block";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirDisciplina.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  abrirDisciplina.style.background = "white";
  abrirDisciplina.style.color = "var(--corAzul)";
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "block";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirSala.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  abrirSala.style.background = "white";
  abrirSala.style.color = "var(--corAzul)";
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "block";
  secaoVinculacao.style.display = "none";
});
abrirVinculacao.addEventListener("click", () => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.background = "transparent";
    views[i].style.color = "white";
  }
  abrirVinculacao.style.background = "white";
  abrirVinculacao.style.color = "var(--corAzul)";
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "block";
});