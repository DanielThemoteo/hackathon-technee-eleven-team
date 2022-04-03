import React from "react";
import { BeneficiosSection, BeneficiosContainer, InfoContainer} from './styles';
import Header from "../../components/Header";

import coins from '../../assets/coins.png';
import signal from '../../assets/signal.png';
import trophy from '../../assets/trophy.png';

function Beneficios() {
	return (
		<BeneficiosSection>
			<Header title="Benefícios"/>
			<BeneficiosContainer>
			<InfoContainer>
					<p>Abertura conta corrente com isenção do primeiro pacote de serviço:</p>
					<input value={"1.000 $C"}  readonly="readonly"/>
					<button>
						Solicitar
					</button>
				</InfoContainer>
				<InfoContainer>
					<p>Empréstimo no valor de R$25.000,00 direto a conta corrente:</p>
					<input value={"10.000 $C"}  readonly="readonly"/>
					<button>
						Solicitar
					</button>
				</InfoContainer>
				<InfoContainer>
					<p>Consultoria financeira exclusiva:</p>
					<input value={"25.000 $C"}  readonly="readonly"/>
					<button>
						Solicitar
					</button>
				</InfoContainer>
			</BeneficiosContainer>
	 	</BeneficiosSection>
	);
};

export default Beneficios;
