import React from "react";
import { ContaCorrenteSection, ContaCorrenteContainer, ContaCorrenteDescription, ContaCorrenteVideo} from './styles';
import Header from "../../components/Header";

import coins from '../../assets/scoin.png';
import cc from '../../assets/cc.png';

function ContaCorrente() {
	return (
		<ContaCorrenteSection>
			<Header title="Conta Corrente"/>
			<ContaCorrenteContainer>
				<ContaCorrenteDescription>
					<p>A conta corrente do Safra oferece diversas soluções e 
						serviços para você dispor de comodidade e segurança em 
						suas transações financeiras. Veja o vídeo a seguir para 
						ver mais sobre a conta corrente Safra</p>
						
						<img src={coins} alt="banner" />
				</ContaCorrenteDescription>
				<h2>Ganhe 500 $C</h2>
				<ContaCorrenteVideo>
				<img src={cc} alt="thumb_conta_corrente" width="560" height="315" />
				
				</ContaCorrenteVideo>

				<button >
					Solicite aqui sua conta corrente
				</button>
			</ContaCorrenteContainer>
	 	</ContaCorrenteSection>
	);
};

export default ContaCorrente;
