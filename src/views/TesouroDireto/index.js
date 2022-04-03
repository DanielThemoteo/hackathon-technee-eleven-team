import React from "react";
import { TesouroDiretoSection, TesouroDiretoContainer, TesouroDiretoCaracteristicas, TesouroDiretoDescription, TesouroDiretoVideo, TesouroDiretoDetails} from './styles';
import Header from "../../components/Header";

import coins from '../../assets/scoin.png';
import td from '../../assets/td.png';

function TesouroDireto() {
	return (
		<TesouroDiretoSection>
			<Header title="Tesouro Direto"/>
			<TesouroDiretoContainer>
				<TesouroDiretoDescription>
					<p>É um programa criado pelo Tesouro Nacional que permite você investir em 
						Títulos Públicos. Na prática, você está emprestando dinheiro para o 
						governo em troca de uma rentabilidade. Ideal para quem quer começar 
						a investir.</p>
						
						<img src={coins} alt="banner" />
				</TesouroDiretoDescription>
				<h2>Ganhe 450 $C</h2>
				<TesouroDiretoVideo>
				<img src={td} alt="thumb_tesouro_direto" width="560" height="315" />
				</TesouroDiretoVideo>
				<TesouroDiretoDescription>
					<p>É um programa criado pelo Tesouro Nacional que permite você investir em 
						Títulos Públicos. Na prática, você está emprestando dinheiro para o
						 governo em troca de uma rentabilidade. Ideal para quem quer começar 
						 a investir.</p>
				</TesouroDiretoDescription>
				<TesouroDiretoCaracteristicas>
					Características
				</TesouroDiretoCaracteristicas>
				<TesouroDiretoDetails>
					Risco Baixo de Investimento
				</TesouroDiretoDetails>
				<TesouroDiretoDetails>
					Mínimo R$ 30,00
				</TesouroDiretoDetails>
				<TesouroDiretoDetails>
					Resgate quando quiser
				</TesouroDiretoDetails>
				<TesouroDiretoDetails>
					Imposto 15% a 22,5%
				</TesouroDiretoDetails>
				<button >
					Comece a investir
				</button>
			</TesouroDiretoContainer>
	 	</TesouroDiretoSection>
	);
};

export default TesouroDireto;
