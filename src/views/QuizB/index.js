import React from "react";
import { QuizBSection, QuizBContainer} from './styles';
import Header from "../../components/Header";
import { useHistory } from 'react-router-dom';

function QuizB() {
	const history = useHistory();
	const handleClickCertificado = () => history.push('/Certificado');
	return (
		<QuizBSection>
			<Header title="Quiz"/>
			<QuizBContainer>
				<h2>Responda ao Quiz e ganhe $afra Coins</h2>
				<h1>O que é significa a sigla MEI?</h1>
				
				<button >
					A) Macro Estado Independente
				</button>

				<button >
					B) Macro Empreendedor Individual
				</button>

				<button onClick={handleClickCertificado}>
					C) Micro Empreendedor Individual
				</button>

				<button >
					D) Mentor Estado Independente
				</button>
			</QuizBContainer>
	 	</QuizBSection>
	);
};

export default QuizB;
