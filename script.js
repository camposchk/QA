var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var isDark;

function conferirMensagemWhatsApp() {
  const conf = document.querySelector('#conf');
  conf.classList.remove('hidden');
  conf.classList.add('visible');

  

  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var date = new Date();

  nomeGlobal = nome;
  mensagemGlobal = mensagem;
  dateGlobal = date;

  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
  document.getElementById("confDate").textContent = formatDate(date);
}

function formatDate(date) {
  var day = date.getDay()
  var month = date.getMonth()
  var year = date.getFullYear()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  
  var formattedDate = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second
  
  return formattedDate
}

function enviar() {
  var numeroTelefone = "5541999999999";

  var linkWhatsApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=NOME DO RECEPTOR(A): " +
    nomeGlobal +
    " OBSERVAÇÕES DO RECEPTOR(A): " +
    mensagemGlobal +
    " DATA DE RECEBIMENTO: " +
    dateGlobal;

  window.open(linkWhatsApp);
}

function darkMode() {
    isDark = !isDark

    if (isDark) {
        const conf = document.querySelector('#toggle');
        conf.classList.remove('light');
        conf.classList.add('dark');
    } 

    if (!isDark) {
        const conf = document.querySelector('#toggle');
        conf.classList.remove('dark');
        conf.classList.add('light');
    }
}