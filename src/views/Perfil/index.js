import React from "react";
import { PerfilSection, PerfilContainer, InfoContainer} from './styles';
import Header from "../../components/Header";
import Input from '../../components/Input';

import coins from '../../assets/coins.png';
import signal from '../../assets/signal.png';
import trophy from '../../assets/trophy.png';

function Perfil() {
	return (
		<PerfilSection>
			<Header title="Perfil"/>
			<PerfilContainer>
			<InfoContainer>
					<img src={trophy} alt="banner" />
					<p>Experiência:</p>
					<input value={"3012"}  readonly="readonly"/>
				</InfoContainer>
				<InfoContainer>
					<img src={signal} alt="banner" />
					<p>Nível:</p>
					<input value={"3"}  readonly="readonly"/>
				</InfoContainer>
				<InfoContainer>
					<img src={coins} alt="banner" />
					<p>Safra Coins:</p>
					<input value={"5000"}  readonly="readonly"/>
				</InfoContainer>
			</PerfilContainer>
	 	</PerfilSection>
	);
};

export default Perfil;
