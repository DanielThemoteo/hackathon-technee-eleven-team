import React from "react";
import { QuizSection, QuizContainer} from './styles';
import Header from "../../components/Header";
import { useHistory } from 'react-router-dom';

function Quiz() {
	const history = useHistory();
	const handleClickQuiz = () => history.push('/QuizB');
	return (
		<QuizSection>
			<Header title="Quiz"/>
			<QuizContainer>
				<h2>Responda ao quiz e ganhe $afra Coins</h2>
				<h1>Quantos colaboradores um MEI pode ter em seu time?</h1>
				
				<button onClick={handleClickQuiz}>
					A) 1
				</button>

				<button >
					B) 2
				</button>

				<button >
					C) 6
				</button>

				<button >
					D) Nenhuma
				</button>
			</QuizContainer>
	 	</QuizSection>
	);
};

export default Quiz;
