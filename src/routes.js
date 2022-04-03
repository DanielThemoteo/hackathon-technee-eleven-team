import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './views/Login'
import OpenBanking from "./views/OpenBanking";
import Home from "./views/Home";
import Perfil from "./views/Perfil";
import Produtos from "./views/Produtos";
import Investimentos from "./views/Investimentos";
import Comparativo from "./views/Comparativo";
import Educacao from "./views/Educação";
import Beneficios from "./views/Beneficios";
import ContaCorrente from "./views/ContaCorrente";
import CDB from "./views/CDB";
import ComparativoEmprestimo from "./views/ComparativoEmprestimo";
import ComparativoCC from "./views/ComparativoCC";
import EducacaoMEI from "./views/EducaçãoMEI";
import Quiz from "./views/Quiz";
import QuizB from "./views/QuizB";
import Impostos from "./views/Impostos";
import Certificado from "./views/Certificado";
import TesouroDireto from "./views/TesouroDireto";

function Routes() {
	return (		
		<BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/OpenBanking' component={OpenBanking} />
                <Route path='/Home' component={Home} />
                <Route path='/Perfil' component={Perfil} />
                <Route path='/Produtos' component={Produtos} />
                <Route path='/Investimentos' component={Investimentos} />
                <Route path='/Comparativo' component={Comparativo} />
                <Route path='/Educacao' component={Educacao} />
                <Route path='/Beneficios' component={Beneficios} />
                <Route path='/ContaCorrente' component={ContaCorrente} />
                <Route path='/CDB' component={CDB} />
                <Route path='/ComparativoEmprestimo' component={ComparativoEmprestimo} />
                <Route path='/ComparativoCC' component={ComparativoCC} />
                <Route path='/EducacaoMEI' component={EducacaoMEI} />
                <Route path='/Quiz' component={Quiz} />
                <Route path='/QuizB' component={QuizB} />
                <Route path='/Impostos' component={Impostos} />
                <Route path='/Certificado' component={Certificado} />
                <Route path='/TesouroDireto' component={TesouroDireto} />
            </Switch>
        </BrowserRouter>
	);
}

export default Routes;