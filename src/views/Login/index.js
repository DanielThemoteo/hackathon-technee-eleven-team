import React from "react";
import { useHistory } from 'react-router-dom';
import { LoginPage, LoginContainer } from './styles';
import Input from '../../components/Input';

import logo from '../../assets/logo.png'

function Login() {
    const history = useHistory();
    const handleClick = () => history.push('/OpenBanking');
	return (
		    <LoginPage>
                <LoginContainer>
                <form >
                    <img src={logo} alt="logo" width="450" height="300" />
                    <br />
                    <br />
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Senha"
                        required
                    />
                    <button onClick={handleClick}>Entrar</button>
                </form>
                </LoginContainer>
            </LoginPage>
	);
};

export default Login;