/**
 * 
 */
package com.faixas.faixa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.faixas.pedido.Pedido;

/**
 * @author camil
 *
 */
@Entity // This tells Hibernate to make a table out of this class
public class Faixa {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Double altura;
	
	private Double largura;
	
	private String texto;
	
	private String corFaixa;
	
	private String corTexto;
	
	private Double valorFaixa;
	
	private Pedido pedido;

	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return the altura
	 */
	public Double getAltura() {
		return altura;
	}

	/**
	 * @param altura the altura to set
	 */
	public void setAltura(Double altura) {
		this.altura = altura;
	}

	/**
	 * @return the largura
	 */
	public Double getLargura() {
		return largura;
	}

	/**
	 * @param largura the largura to set
	 */
	public void setLargura(Double largura) {
		this.largura = largura;
	}

	/**
	 * @return the texto
	 */
	public String getTexto() {
		return texto;
	}

	/**
	 * @param texto the texto to set
	 */
	public void setTexto(String texto) {
		this.texto = texto;
	}

	/**
	 * @return the corFaixa
	 */
	public String getCorFaixa() {
		return corFaixa;
	}

	/**
	 * @param corFaixa the corFaixa to set
	 */
	public void setCorFaixa(String corFaixa) {
		this.corFaixa = corFaixa;
	}

	/**
	 * @return the corTexto
	 */
	public String getCorTexto() {
		return corTexto;
	}

	/**
	 * @param corTexto the corTexto to set
	 */
	public void setCorTexto(String corTexto) {
		this.corTexto = corTexto;
	}

	/**
	 * @return the valorFaixa
	 */
	public Double getValorFaixa() {
		return valorFaixa;
	}

	/**
	 * @param valorFaixa the valorFaixa to set
	 */
	public void setValorFaixa(Double valorFaixa) {
		this.valorFaixa = valorFaixa;
	}

	/**
	 * @return the pedido
	 */
	public Pedido getPedido() {
		return pedido;
	}

	/**
	 * @param pedido the pedido to set
	 */
	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	@Override
	public String toString() {
		return "Faixa [getId()=" + getId() + ", getAltura()=" + getAltura() + ", getLargura()=" + getLargura()
				+ ", getTexto()=" + getTexto() + ", getCorFaixa()=" + getCorFaixa() + ", getCorTexto()=" + getCorTexto()
				+ ", getValorFaixa()=" + getValorFaixa() + ", getPedido()=" + getPedido() + "]";
	}
	
	
}
