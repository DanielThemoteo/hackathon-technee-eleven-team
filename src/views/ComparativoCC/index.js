import React from "react";
import { ComparativoCCSection, ComparativoCCSafraCoins ,ComparativoCCContainer, ComparativoCCSafra, ComparativoCCDetails, ComparativoCCSafraDetails} from './styles';
import Header from "../../components/Header";

import logo from '../../assets/logoS.png';

function ComparativoCC() {
	return (
		<ComparativoCCSection>
			<Header title="Comparativo Conta Corrente"/>
			<ComparativoCCContainer>
				<ComparativoCCSafra>
					<ComparativoCCSafraDetails>
					<img src={logo} alt="logo" width="350px" height="200px" />
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Tarifa básica
						<p>R$ 44,00</p>
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Serviços
						<p>DOC, TED, Pix</p>
					</ComparativoCCSafraDetails>
				</ComparativoCCSafra>
				<ComparativoCCSafraCoins>
					Com 1.000 $C a primeira tarifa básica é gratuita
				</ComparativoCCSafraCoins>
				<ComparativoCCDetails>
				<ComparativoCCSafraDetails>
					<h3>Banco 1</h3>
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Tarifa básica
						<p>R$ 48,00</p>
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Serviços
						<p>DOC, TED, Pix</p>
					</ComparativoCCSafraDetails>
				</ComparativoCCDetails>

				<ComparativoCCDetails>
				<ComparativoCCSafraDetails>
					<h3>Banco 2</h3>
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Tarifa básica
						<p>R$ 50,00</p>
					</ComparativoCCSafraDetails>
					<ComparativoCCSafraDetails>
						Serviços
						<p>DOC, TED, Pix</p>
					</ComparativoCCSafraDetails>
				</ComparativoCCDetails>
				<button >
					Solicite a conta corrente Safra
				</button>
			</ComparativoCCContainer>
	 	</ComparativoCCSection>
	);
};

export default ComparativoCC;
