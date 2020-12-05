/**
 * 
 */
package com.faixas.pedido;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.faixas.cliente.Cliente;

/**
 * @author camil
 *
 */
@Entity // This tells Hibernate to make a table out of this classS
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Date data;
	
	private Date previsaoEntrega;
	
	private Double valorServico;
	
	private Double valorSinal;
	
	private Date data_inicioProd;
	
	private Date dataFimProd;
	
	private Date dataRealEntrega;
	
	private String status;
	
	private Cliente cliente;

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
	 * @return the data
	 */
	public Date getData() {
		return data;
	}

	/**
	 * @param data the data to set
	 */
	public void setData(Date data) {
		this.data = data;
	}

	/**
	 * @return the previsaoEntrega
	 */
	public Date getPrevisaoEntrega() {
		return previsaoEntrega;
	}

	/**
	 * @param previsaoEntrega the previsaoEntrega to set
	 */
	public void setPrevisaoEntrega(Date previsaoEntrega) {
		this.previsaoEntrega = previsaoEntrega;
	}

	/**
	 * @return the valorServico
	 */
	public Double getValorServico() {
		return valorServico;
	}

	/**
	 * @param valorServico the valorServico to set
	 */
	public void setValorServico(Double valorServico) {
		this.valorServico = valorServico;
	}

	/**
	 * @return the valorSinal
	 */
	public Double getValorSinal() {
		return valorSinal;
	}

	/**
	 * @param valorSinal the valorSinal to set
	 */
	public void setValorSinal(Double valorSinal) {
		this.valorSinal = valorSinal;
	}

	/**
	 * @return the data_inicioProd
	 */
	public Date getData_inicioProd() {
		return data_inicioProd;
	}

	/**
	 * @param data_inicioProd the data_inicioProd to set
	 */
	public void setData_inicioProd(Date data_inicioProd) {
		this.data_inicioProd = data_inicioProd;
	}

	/**
	 * @return the dataFimProd
	 */
	public Date getDataFimProd() {
		return dataFimProd;
	}

	/**
	 * @param dataFimProd the dataFimProd to set
	 */
	public void setDataFimProd(Date dataFimProd) {
		this.dataFimProd = dataFimProd;
	}

	/**
	 * @return the dataRealEntrega
	 */
	public Date getDataRealEntrega() {
		return dataRealEntrega;
	}

	/**
	 * @param dataRealEntrega the dataRealEntrega to set
	 */
	public void setDataRealEntrega(Date dataRealEntrega) {
		this.dataRealEntrega = dataRealEntrega;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the cliente
	 */
	public Cliente getCliente() {
		return cliente;
	}

	/**
	 * @param cliente the cliente to set
	 */
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	@Override
	public String toString() {
		return "Pedido [getId()=" + getId() + ", getData()=" + getData() + ", getPrevisaoEntrega()="
				+ getPrevisaoEntrega() + ", getValorServico()=" + getValorServico() + ", getValorSinal()="
				+ getValorSinal() + ", getData_inicioProd()=" + getData_inicioProd() + ", getDataFimProd()="
				+ getDataFimProd() + ", getDataRealEntrega()=" + getDataRealEntrega() + ", getStatus()=" + getStatus()
				+ ", getCliente()=" + getCliente() + "]";
	}
	
}
