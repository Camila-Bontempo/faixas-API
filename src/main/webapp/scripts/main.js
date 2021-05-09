$(document).ready(function () {
  $("#header").load("./components/header/header.html");
  debugger;
  switch (window.location.hash) {
    case "#pedidos":
      $("#content").load("../pages/pedidos/pedidos.html");
      break;

    case "#faixas":
      $("#content").load("../pages/faixas/faixas.html");
      break;

    case "#clientes":
      $("#content").load("../pages/clientes/clientes.html");
      break;

    case "#dashboard":
      $("#content").load("../pages/dashboard/dashboard.html");
      break;

    default:
      $("#content").load("../pages/dashboard/dashboard.html");
      break;
  }
});
