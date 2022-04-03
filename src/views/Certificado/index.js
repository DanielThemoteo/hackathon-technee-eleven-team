import React from "react";
import { CertificadoPage, CertificadoContainer, CertificadoImgContainer } from './styles';

import logo from '../../assets/logo.png'
import graduate from '../../assets/graduating.svg'

function Certificado() {
	return (
		    <CertificadoPage>
                <CertificadoContainer>
                    <img src={logo} alt="logo" width="250" height="150" />
                    <br />
                    <br />
                    <h1>Parabéns!!</h1>
                    <CertificadoImgContainer>
                        <img src={graduate} alt="logo" width="600" />
                    </CertificadoImgContainer>
                    <p>
                    Lucas concluiu o módulo MEI no Safra Education!


                    </p>

                    <p>
                    Você ganhou várias $afra Coins durante a sua Jornada, compartilhe com seus amigos e ganhe muito mais!
                    </p>

                    <button>Compartilhe</button>
                </CertificadoContainer>
            </CertificadoPage>
	);
};

export default Certificado;