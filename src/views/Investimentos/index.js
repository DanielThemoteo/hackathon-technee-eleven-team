import React from "react";
import { useHistory } from 'react-router-dom';
import { InvestimentosSection, InvestimentosContainer } from './styles';
import Header from "../../components/Header";

function Investimentos() {	
    const history = useHistory();
    const handleClick = () => history.push('/CDB');
	const handleClickTesouroDireto = () => history.push('/TesouroDireto');
	return (
		<InvestimentosSection>
			<Header title="Investimentos"/>
			<InvestimentosContainer>
					<button onClick={handleClick}>
						CDB
					</button>
					<button onClick={handleClickTesouroDireto}>
						Tesouro Direto
					</button>
					<button>
						LCI e LCA
					</button>
					<button>
						Debêntures
					</button>
					<button>
						COE
					</button>
			</InvestimentosContainer>
	 	</InvestimentosSection>
	);
};

export default Investimentos;
