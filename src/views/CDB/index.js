import React from "react";
import { CDBSection, CDBContainer, CDBCaracteristicas, CDBDescription, CDBVideo, CDBDetails} from './styles';
import Header from "../../components/Header";

import coins from '../../assets/scoin.png';
import cdb from '../../assets/cdb.png';

function CDB() {
	return (
		<CDBSection>
			<Header title="CDB"/>
			<CDBContainer>
				<CDBDescription>
					<p>Considerados investimentos de Renda Fixa com baixo risco, 
						o CDB (Certificado de Depósito Bancário) e o LC (Letras de Câmbio) 
						são títulos emitidos para que bancos e instituições financeiras consigam 
						financiar suas atividades de crédito. Ideal para qualquer perfil de investidor.
						Veja o vídeo a seguir para saber mais sobre o CDB</p>
						
						<img src={coins} alt="banner" />
				</CDBDescription>
				<h2>Ganhe 250 $C</h2>
				<CDBVideo>
				<img src={cdb} alt="thumb_conta_corrente" width="560" height="315" />
				</CDBVideo>
				<CDBDescription>
					<p>Com o CDB e LC, quem empresta dinheiro para o banco em troca de juros é você! 
						São investimentos de Renda Fixa mais rentáveis, onde você pode acompanhar as 
						taxas de juros do mercado possibilitando a opção de saber exatamente quanto 
						seu dinheiro irá render.</p>
				</CDBDescription>
				<CDBCaracteristicas>
					Características
				</CDBCaracteristicas>
				<CDBDetails>
					Risco Baixo de Investimento
				</CDBDetails>
				<CDBDetails>
					Mínimo R$ 1.000,00
				</CDBDetails>
				<CDBDetails>
					Resgate somente no investimento
				</CDBDetails>
				<CDBDetails>
					Imposto 15% a 22,5%
				</CDBDetails>
				<button >
					Comece a investir
				</button>
			</CDBContainer>
	 	</CDBSection>
	);
};

export default CDB;
