import React from "react";
import { useHistory } from 'react-router-dom';
import { OpenBankingPage, OpenBankingContainer, InformationOpenBanking } from './styles';

import coins from '../../assets/safra-coins-banner.png'

function OpenBanking(){
    const history = useHistory();
    const handleClick = () => history.push('/Home');
    return(
        <OpenBankingPage>
            <OpenBankingContainer>
                <InformationOpenBanking> 
                    <img src={coins} alt="banner" width="600" height="600" />
                    <a href="https://www.safra.com.br/sobre/open-finance.htm">Conheça aqui mais sobre o Open Finance do Safra</a>
                    <button onClick={handleClick}>Pular</button>
                </InformationOpenBanking>
                
            </OpenBankingContainer>
            
        </OpenBankingPage>
        
    );
}

export default OpenBanking;