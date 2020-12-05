/**
 * 
 */
package com.faixas.cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/cliente") // This means URL's start with /demo (after Application path)
public class ClienteController {
	@Autowired // This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	private ClienteRepository clienteRepository;

	@PostMapping(path = "/add") // Map ONLY POST Requests
	public @ResponseBody String addNewCliente() {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Cliente n = new Cliente();
		clienteRepository.save(n);
		return "Saved";
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Cliente> getAllClientes() {
		// This returns a JSON or XML with the users
		return clienteRepository.findAll();
	}
}