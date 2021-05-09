/**
 * 
 */
package com.faixas.faixa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.faixas.pedido.Pedido;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/faixa") // This means URL's start with /demo (after Application path)
public class FaixaController {
	@Autowired // This means to get the bean called userRepository
	// Which is auto-generated by Spring, we will use it to handle the data
	private FaixaRepository faixaRepository;

	@PostMapping(path = "/add") // Map ONLY POST Requests
	public @ResponseBody String addNewFaixa(Faixa faixa) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		try {
			faixaRepository.save(faixa);
			return "Faixa Adicionada com Sucesso!";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	@DeleteMapping(path = "/delete")
	public @ResponseBody String deletePedido(Integer id) {
		
		Faixa faixa = faixaRepository.findById(id).get();
		
		try {
			faixaRepository.delete(faixa);
			return "Faixa Deletada com Sucesso!";
		} catch (Exception e) {
			return e.getMessage();
		}
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Faixa> getAllFaixas() {
		// This returns a JSON or XML with the users
		return faixaRepository.findAll();
	}
}