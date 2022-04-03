import React from "react";
import { EducacaoMEISection, EducacaoMEIContainer, InfoContainer, EducacaoMEIDescription, EducacaoMEIVideo} from './styles';
import Header from "../../components/Header";

import coins from '../../assets/scoin.png';
import mei from '../../assets/mei.png';

function EducacaoMEI() {
	return (
		<EducacaoMEISection>
			<Header title="O que é MEI"/>
			<EducacaoMEIContainer>
				<EducacaoMEIDescription>
					<p>MEI – Microempreendedor Individual é aquele que trabalha por conta própria, 
						tem registro de pequeno empresário e exerce umas das mais de 460 modalidades 
						de serviços, comércio ou indústria. Veja o vídeo a seguir que mostra como 
						você pode ser tornar um MEI:</p>
						
						<img src={coins} alt="banner" />
				</EducacaoMEIDescription>
				<h2>Ganhe 250 $C</h2>
				<EducacaoMEIVideo>
				<img src={mei} alt="thumb_conta_corrente" width="560" height="315" />
				
				</EducacaoMEIVideo>
				<EducacaoMEIDescription>
					<p>O MEI surgiu em 2008 com a Lei nº128, buscando formalizar trabalhadores brasileiros 
						que, até então, desempenhavam diversas atividades sem nenhum amparo legal ou 
						segurança jurídica.</p>
				</EducacaoMEIDescription>
				<button >
					Torne-se um MEI
				</button>
			</EducacaoMEIContainer>
	 	</EducacaoMEISection>
	);
};

export default EducacaoMEI;
