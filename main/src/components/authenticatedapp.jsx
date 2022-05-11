import {Switch,Route} from 'react-router-dom';
import Header from './header';
import MainUi from './mainui';
import PageNotFound from './pagenotfound';

function AuthenticatedApp(){
    return (
        <>
        <Header />
        <Switch>
            <Route path='/' component={MainUi}  exact />
            <Route path='*' component={PageNotFound} />
        </Switch>
        </>
    )
}

export default AuthenticatedApp;