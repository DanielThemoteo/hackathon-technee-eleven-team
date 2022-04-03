import React from "react";
import { ComparativoEmprestimoSection, ComparativoEmprestimoSafraCoins ,ComparativoEmprestimoContainer, ComparativoEmprestimoSafra, ComparativoEmprestimoDetails, ComparativoEmprestimoSafraDetails} from './styles';
import Header from "../../components/Header";

import logo from '../../assets/logoS.png';

function ComparativoEmprestimo() {
	return (
		<ComparativoEmprestimoSection>
			<Header title="Comparativo Empréstimo"/>
			<ComparativoEmprestimoContainer>
				<ComparativoEmprestimoSafra>
					<ComparativoEmprestimoSafraDetails>
					<img src={logo} alt="logo" width="350px" height="200px" />
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Valor
						<p>R$ 250.000,00</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Taxa
						<p>8% a.a</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Vencimento
						<p>08/2025</p>
					</ComparativoEmprestimoSafraDetails>
				</ComparativoEmprestimoSafra>
				<ComparativoEmprestimoSafraCoins>
					Com 10.000 $C a taxa fica 7% a.a
				</ComparativoEmprestimoSafraCoins>
				<ComparativoEmprestimoDetails>
				<ComparativoEmprestimoSafraDetails>
					<h3>Banco 1</h3>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Valor
						<p>R$ 250.000,00</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Taxa
						<p>10% a.a</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Vencimento
						<p>08/2025</p>
					</ComparativoEmprestimoSafraDetails>
				</ComparativoEmprestimoDetails>

				<ComparativoEmprestimoDetails>
				<ComparativoEmprestimoSafraDetails>
					<h3>Banco 2</h3>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Valor
						<p>R$ 180.000,00</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Taxa
						<p>12% a.a</p>
					</ComparativoEmprestimoSafraDetails>
					<ComparativoEmprestimoSafraDetails>
						Vencimento
						<p>08/2023</p>
					</ComparativoEmprestimoSafraDetails>
				</ComparativoEmprestimoDetails>
				<button >
					Solicite o empréstimo Safra
				</button>
			</ComparativoEmprestimoContainer>
	 	</ComparativoEmprestimoSection>
	);
};

export default ComparativoEmprestimo;
