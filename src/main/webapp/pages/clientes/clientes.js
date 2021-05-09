function addClientes() {
  $.ajax({
    url: "/cliente/add",
    type: "POST",
    data: {
      nome: "Camila",
      cpf: "12345678910",
      rua: "Rua dos Curiós",
      numero: 001,
      complemento: "Apto 001",
      bairro: "Pontal",
      cep: "38055100",
      cidade: "Uberaba",
      telefone: "12345678910",
      email: "camila.bontempo@outlook.com",
    },
  }).done(function (addClientesResponse) {
    // TODO: Porque salvar um seletor dentro de uma variável?
    var toaster = $(".toast");
    toaster.find(".toast-body").text(addClientesResponse);
    toaster.toast("show");

    initClientes();
  });
}

function deleteCliente(id) {
  $.ajax({
    url: "/cliente/delete",
    type: "DELETE",
    data: {
      id: id,
    },
  }).done(function (deleteClienteResponse) {
    var toaster = $(".toast");
    toaster.find(".toast-body").text(deleteClienteResponse);
    toaster.toast("show");

    initClientes();
  });
}

function initClientes() {
  $("#title").text("Clientes");
  // Busca a lista de clientes

  $.ajax({
    url: "/cliente/all",
  }).done(function (clientes) {
    let tabelaclientesHTML =
      "" +
      "<tr>" +
      "<th scope='col'>ID</th>" +
      "<th> Nome </th>" +
      "<th> CPF </th>" +
      "<th> Rua </th>" +
      "<th> Número </th>" +
      "<th> Complemento </th>" +
      "<th> Bairro </th>" +
      "<th> Cep </th>" +
      "<th> Cidade </th>" +
      "<th> Telefone </th>" +
      "<th> Email </th>" +
      "<th> </th>" +
      "</tr>";

    for (let idxClientes = 0; idxClientes < clientes.length; idxClientes++) {
      // prettier-ignore
      tabelaclientesHTML +=
          "" +
          "<tr>" +

            "<th scope='row'> " +
              clientes[idxClientes].id +
            " </th>" +

            "<td> " +
              clientes[idxClientes].nome +
            " </td>" +

            "<td> " +
              clientes[idxClientes].cpf +
            " </td>" +

            "<td> " +
              clientes[idxClientes].rua +
            " </td>" +

            "<td> " +
              clientes[idxClientes].numero +
            " </td>" +

            "<td> " +
              clientes[idxClientes].complemento +
            " </td>" +

            "<td> " +
              clientes[idxClientes].bairro+
            " </td>" +

            "<td> " +
              clientes[idxClientes].cep+
            " </td>" +

            "<td> " +
              clientes[idxClientes].cidade+
            " </td>" +

            "<td> " +
              clientes[idxClientes].telefone+
            " </td>" +

            "<td> " +
              clientes[idxClientes].email+
            " </td>" +

            "<td> " +
              "<button onclick='deleteCliente(" + clientes[idxClientes].id + ")'>" + 
                "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" +
                  "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/>" +
                  "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>" +
                "</svg>" +
              "</button>" +
          " </td>" +

          "</tr>";
    }

    $("#tabela-clientes").html(tabelaclientesHTML);
  });
}
