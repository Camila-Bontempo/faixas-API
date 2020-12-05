package com.faixas.pedido;

import org.springframework.data.repository.CrudRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PedidoRepository extends CrudRepository<Pedido, Integer> {

}