import React from "react";
import { useHistory } from 'react-router-dom';
import { EducacaoSection, EducacaoContainer } from './styles';
import Header from "../../components/Header";

function Educacao() {	
    const history = useHistory();
    const handleClick = () => history.push('/EducacaoMEI');
	const handleClickQuiz = () => history.push('/Quiz');
	const handleClickImpostos = () => history.push('/Impostos');
	return (
		<EducacaoSection>
			<Header title="Educação Financeira - MEI"/>
			<EducacaoContainer>
					<button onClick={handleClick}>
						O que é MEI?
					</button>
					<button>
						Como gerenciar os lucros?
					</button>
					<button onClick={handleClickImpostos}>
						Quais impostos devo pagar?
					</button>
					<button>
						Posso ter funcionários?
					</button>
					<button>
						Cesta de serviços para o MEI
					</button>
					<button onClick={handleClickQuiz}>
						Quiz
					</button>
			</EducacaoContainer>
	 	</EducacaoSection>
	);
};

export default Educacao;
