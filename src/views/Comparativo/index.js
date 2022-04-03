import React from "react";
import { useHistory } from 'react-router-dom';
import { ComparativoSection, ComparativoContainer } from './styles';
import Header from "../../components/Header";

function Comparativo() {	
    const history = useHistory();
    const handleClick = () => history.push('/ComparativoCC');
	const handleClickEmprestimo = () => history.push('/ComparativoEmprestimo');
	return (
		<ComparativoSection>
			<Header title="Comparativo"/>
			<ComparativoContainer>
					<button onClick={handleClick}>
						Conta Corrente
					</button>
					<button onClick={handleClickEmprestimo}>
						Empréstimo
					</button>
					<button>
						Seguro
					</button>
			</ComparativoContainer>
	 	</ComparativoSection>
	);
};

export default Comparativo;
