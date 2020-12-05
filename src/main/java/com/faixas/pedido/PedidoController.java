/**
 * 
 */
package com.faixas.pedido;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/pedido") // This means URL's start with /demo (after Application path)
public class PedidoController {
	@Autowired // This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	private PedidoRepository pedidoRepository;

	@PostMapping(path = "/add") // Map ONLY POST Requests
	public @ResponseBody String addNewPedido() {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Pedido n = new Pedido();
		pedidoRepository.save(n);
		return "Saved";
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Pedido> getAllPedidos() {
		// This returns a JSON or XML with the users
		return pedidoRepository.findAll();
	}
}