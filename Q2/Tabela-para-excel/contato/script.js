var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function formatarData(date) {
  var options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleString("pt-BR", options);
}

function conferirMensagemWhatsApp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var date = new Date();

  nomeGlobal = nome;
  mensagemGlobal = mensagem;
  dateGlobal = date;

  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
  document.getElementById("confDate").textContent = formatarData(date);
}

function enviar() {
  var numeroTelefone = "5541999999999";

  var linkWhatsApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=NOME DO RECEPTOR(A): " +
    nomeGlobal +
    " - " +
    mensagemGlobal +
    " - " +
    formatarData(dateGlobal);

  window.open(linkWhatsApp, "_blank");
}
