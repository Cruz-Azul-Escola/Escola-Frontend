// Abrir opções
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
  secaoAluno.style.display = "block";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirProfessor.addEventListener("click", () => {
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "block";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirTurma.addEventListener("click", () => {
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "block";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirDisciplina.addEventListener("click", () => {
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "block";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "none";
});
abrirSala.addEventListener("click", () => {
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "block";
  secaoVinculacao.style.display = "none";
});
abrirVinculacao.addEventListener("click", () => {
  secaoAluno.style.display = "none";
  secaoProfessor.style.display = "none";
  secaoTurma.style.display = "none";
  secaoDisciplina.style.display = "none";
  secaoSala.style.display = "none";
  secaoVinculacao.style.display = "block";
});