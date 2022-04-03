import React from "react";
import { useHistory } from 'react-router-dom';
import { HomeSection, HomeContainer } from './styles';
import Header from "../../components/Header";

function Home() {	
    const history = useHistory();
    const handleClickPerfil = () => history.push('/Perfil');
	const handleClickProduto = () => history.push('/Produtos');
	const handleClickInvestimento = () => history.push('/Investimentos');
	const handleClickComparativo = () => history.push('/Comparativo');
	const handleClickEducacao = () => history.push('/Educacao');
	const handleClickBeneficios = () => history.push('/Beneficios');
	return (
		<HomeSection>
			<Header title="Serviços"/>
			<HomeContainer>
					<button onClick={event =>  window.location.href='https://www.safra.com.br/sobre/open-finance.htm'}>
						Open Finance
					</button>
					<button onClick={handleClickPerfil}>
						Perfil
					</button>
					<button onClick={handleClickProduto}>
						Produtos
					</button>
					<button onClick={handleClickInvestimento}>
						Investimentos
					</button>
					<button onClick={handleClickComparativo}>
						Comparativo
					</button>
					<button onClick={handleClickEducacao}>
						Educação Financeira - MEI
					</button>
					<button onClick={handleClickBeneficios}>
						Troque suas Safra Coins
					</button>
			</HomeContainer>
	 	</HomeSection>
	);
};

export default Home;
