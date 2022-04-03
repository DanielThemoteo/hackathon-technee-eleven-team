import React from "react";
import { ImpostosSection, ImpostosContainer, ImpostosCaracteristicas, ImpostosDescription, ImpostosVideo, ImpostosDetails} from './styles';
import Header from "../../components/Header";


function Impostos() {
	return (
		<ImpostosSection>
			<Header title="Quais Impostos devo pagar?"/>
			<ImpostosContainer>
				<ImpostosDescription>
					<p>Como o Autônomo SafraPay, você estará enquadrado no setor de Serviços, 
						que tem como obrigação o pagamento mensal da DAS-MEI, no valor de R$ 54,90.</p>
				</ImpostosDescription>
				<ImpostosDescription>
					<p>O valor é referente a:
						<br />
 						• 5% do salário mínimo vigente para Previdência Social (INSS);
						 <br />
 							• R$ 5,00 de ISS no caso de prestadores de serviço ou R$ 1,00 de ICMS 
							 para comércio e indústria. 
							 <br />
							 Caso o MEI exerça ambas as atividades, 
							 paga o valor acumulado de R$ 6,00.</p>
				</ImpostosDescription>
				<ImpostosCaracteristicas>
					Isenção de Impostos
				</ImpostosCaracteristicas>
				<ImpostosDetails>
					Imposto de Renda PJ
				</ImpostosDetails>
				<ImpostosDetails>
					PIS
				</ImpostosDetails>
				<ImpostosDetails>
					Cofins
				</ImpostosDetails>
				<ImpostosDetails>
					IPI
				</ImpostosDetails>
				<ImpostosDetails>
					CSLL
				</ImpostosDetails>
			</ImpostosContainer>
	 	</ImpostosSection>
	);
};

export default Impostos;
