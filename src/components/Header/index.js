import React from "react";
import { useHistory } from 'react-router-dom';
import { HeaderSection, HeaderContainer, SubHeaderContainer, CoinsContainer } from './styles';

import logoutIcon from '../../assets/logout.png';
import home from '../../assets/home.png';


function Header({title}) {
    const history = useHistory();
    const handleClick = () => history.push('/Home');
    const handleClickBeneficios = () => history.push('/Beneficios');
	return (
        <>
            <HeaderSection>
                <HeaderContainer>
                    <a onClick={handleClick}><img src={home} alt="banner" width="40px" height="40px" /></a>
                    <h1>{title}</h1>
                    <a href="#"><img src={logoutIcon} alt="banner" width="40px" height="40px" /></a>
                </HeaderContainer>
            </HeaderSection>
            <SubHeaderContainer>
                <CoinsContainer onClick={handleClickBeneficios}>
                    <p>Meu saldo: 5000 $C</p>
                </CoinsContainer>
            </SubHeaderContainer>
			
        </>
	);
};

export default Header;
