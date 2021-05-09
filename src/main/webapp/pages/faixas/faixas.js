function addFaixas() {
  $.ajax({
    url: "/faixa/add",
    type: "POST",
    data: {
      altura: 2.0,
      largura: 10.0,
      texto: "Texto da Faixa",
      corFaixa: "Branco",
      corTexto: "Vermelho",
      valorFaixa: 50.0,
      pedido: 1,
    },
  }).done(function (addFaixasResponse) {
    var toaster = $(".toast");
    toaster.find(".toast-body").text(addFaixasResponse);
    toaster.toast("show");

    initFaixas();
  });
}

function deleteFaixa(id) {
  $.ajax({
    url: "/faixa/delete",
    type: "DELETE",
    data: {
      id: id,
    },
  }).done(function (deleteFaixaResponse) {
    var toaster = $(".toast");
    toaster.find(".toast-body").text(deleteFaixaResponse);
    toaster.toast("show");

    initFaixas();
  });
}

function initFaixas() {
  $("#title").text("Faixas");
  // Busca a lista de faixas

  $.ajax({
    url: "/faixa/all",
  }).done(function (faixas) {
    let tabelaFaixasHTML =
      "" +
      "<tr>" +
      "<th scope='col'>ID</th>" +
      "<th> Altura </th>" +
      "<th> Largura </th>" +
      "<th> Texto </th>" +
      "<th> Cor Faixa </th>" +
      "<th> Cor texto </th>" +
      "<th> Valor Faixa </th>" +
      "<th> </th>" +
      "</tr>";

    for (let idxFaixas = 0; idxFaixas < faixas.length; idxFaixas++) {
      // prettier-ignore
      tabelaFaixasHTML +=
          "" +
          "<tr>" +

            "<th scope='row'> " +
              faixas[idxFaixas].id +
            " </th>" +

            "<td> " +
              faixas[idxFaixas].altura +
            " </td>" +

            "<td> " +
              faixas[idxFaixas].largura +
            " </td>" +

            "<td> " +
              faixas[idxFaixas].texto +
            " </td>" +

            "<td> " +
              faixas[idxFaixas].corFaixa +
            " </td>" +

            "<td> " +
              faixas[idxFaixas].corTexto +
            " </td>" +

            "<td> " +
              faixas[idxFaixas].valorFaixa+
            " </td>" +

            "<td> " +
              "<button onclick='deleteFaixa(" + faixas[idxFaixas].id + ")'>" + 
                "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" +
                  "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>" +
                  "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>" +
                "</svg>" +
              "</button>" +
            " </td>" +

          "</tr>";
    }

    $("#tabela-faixas").html(tabelaFaixasHTML);
  });
}
