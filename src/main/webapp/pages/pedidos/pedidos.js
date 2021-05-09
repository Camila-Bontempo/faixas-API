function addPedidos() {
  $.ajax({
    url: "/pedido/add",
    type: "POST",
    data: {
      data: new Date(),
      previsaoEntrega: new Date(),
      valorServico: 100.0,
      valorSinal: 50.0,
      data_inicioProd: new Date(),
      dataFimProd: new Date(),
      dataRealEntrega: new Date(),
      status: "PR",
      cliente: 1,
    },
  }).done(function (addPedidosResponse) {
    var toaster = $(".toast");
    toaster.find(".toast-body").text(addPedidosResponse);
    toaster.toast("show");

    initPedidos();
  });
}

function deletePedido(id) {
  $.ajax({
    url: "/pedido/delete",
    type: "DELETE",
    data: {
      id: id,
    },
  }).done(function (deletePedidoResponse) {
    var toaster = $(".toast");
    toaster.find(".toast-body").text(deletePedidoResponse);
    toaster.toast("show");

    initPedidos();
  });
}

function initPedidos() {
  $("#title").text("Pedidos");

  // Busca a lista de pedidos
  $.ajax({
    url: "/pedido/all",
  }).done(function (pedidos) {
    let tabelaPedidosHTML =
      "" +
      "<tr>" +
      "<th scope='col'>ID</th>" +
      "<th> Data </th>" +
      "<th> Previsão de Entrega </th>" +
      "<th> Valor Serviço </th>" +
      "<th> Valor Sinal </th>" +
      "<th> Data Inicio da Produção </th>" +
      "<th> Data Final da Produção </th>" +
      "<th> Data real da Entrega </th>" +
      "<th> Status </th>" +
      "<th> </th>" +
      "</tr>";

    for (let idxPedidos = 0; idxPedidos < pedidos.length; idxPedidos++) {
      // prettier-ignore
      tabelaPedidosHTML +=
        "" +
        "<tr>" +
          "<th scope='row'> " +
            pedidos[idxPedidos].id +
          " </th>" +
          "<td> " +
            pedidos[idxPedidos].data +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].previsaoEntrega +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].valorServico +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].valorSinal +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].data_inicioProd +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].dataFimProd +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].dataRealEntrega +
          " </td>" +
          "<td> " +
            pedidos[idxPedidos].status +
          " </td>" +
          "<td> " +
            "<button onclick='deletePedido(" + pedidos[idxPedidos].id + ")'>" + 
              "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" +
                "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>" +
                "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>" +
              "</svg>" +
            "</button>" +
          " </td>" +
        "</tr>";
    }

    $("#tabela-pedidos").html(tabelaPedidosHTML);
  });
}
