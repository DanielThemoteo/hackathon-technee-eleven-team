import React from "react";
import { useHistory } from 'react-router-dom';
import { ProdutosSection, ProdutosContainer } from './styles';
import Header from "../../components/Header";

function Produtos() {	
    const history = useHistory();
    const handleClickContaCorrente = () => history.push('/ContaCorrente');
	return (
		<ProdutosSection>
			<Header title="Produtos"/>
			<ProdutosContainer>
					<button onClick={handleClickContaCorrente}>
						Conta Corrente
					</button>
					<button>
						Cartão de Crédito
					</button>
					<button>
						Financiamento
					</button>
					<button>
						Câmbio
					</button>
					<button>
						Seguros
					</button>
			</ProdutosContainer>
	 	</ProdutosSection>
	);
};

export default Produtos;
