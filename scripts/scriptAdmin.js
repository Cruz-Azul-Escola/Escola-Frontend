// Abrir opções
const abrirOpcaoAdicionar = document.getElementById("view-cadastrar");
const abrirOpcaoAlterar = document.getElementById("view-alterar");
const abrirOpcaoExcluir = document.getElementById("view-excluir");
const abrirOpcaoVisualizar = document.getElementById("view-visualizar");

// Campos
const campos = document.getElementsByClassName("opcoes-selecao");
const campoAdicionar = document.getElementById("campo-cadastrar");
const campoAlterar = document.getElementById("campo-alterar");
const campoExcluir = document.getElementById("campo-excluir");
const campoVisualizar = document.getElementById("campo-visualizar");

// Abrir aluno
const adicionarAluno = document.getElementById("abrir-aluno-cadastrar");
const alterarAluno = document.getElementById("abrir-aluno-alterar");
const excluirAluno = document.getElementById("abrir-aluno-excluir");
const visualizarAluno = document.getElementById("abrir-aluno-visualizar");

// Abrir professor
const adicionarProfessor = document.getElementById("abrir-professor-cadastrar");
const alterarProfessor = document.getElementById("abrir-professor-alterar");
const excluirProfessor = document.getElementById("abrir-professor-excluir");
const visualizarProfessor = document.getElementById("abrir-professor-visualizar");

// Cliques
abrirOpcaoAdicionar.addEventListener("click", () => {
  for (i = 0; i < campos.length; i++) {
    if (campos[i].style.display !== "none" && campoAdicionar != campos[i]) {
      campos[i].style.display = "none";
    } else {
      campoAdicionar.style.display = "flex";
    }
  }
});
abrirOpcaoAlterar.addEventListener("click", () => {
  for (i = 0; i < campos.length; i++) {
    if (campos[i].style.display !== "none" && campoAlterar != campos[i]) {
      campos[i].style.display = "none";
    } else {
      campoAlterar.style.display = "flex";
    }
  }
});
abrirOpcaoExcluir.addEventListener("click", () => {
  for (i = 0; i < campos.length; i++) {
    if (campos[i].style.display !== "none" && campoExcluir != campos[i]) {
      campos[i].style.display = "none";
    } else {
      campoExcluir.style.display = "flex";
    }
  }
});
abrirOpcaoVisualizar.addEventListener("click", () => {
  for (i = 0; i < campos.length; i++) {
    if (campos[i].style.display !== "none" && campoVisualizar != campos[i]) {
      campos[i].style.display = "none";
    } else {
      campoVisualizar.style.display = "flex";
    }
  }
});