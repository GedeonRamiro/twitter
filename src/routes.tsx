import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRouter from "./components/ProtectedRouter";
import { GlobalStateProvider } from "./context/GlobalContext";
import Home from './pages/Home'  
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Seguidores from './pages/Seguidores'
import { GlobalStyles } from "./styles/GlobalStyle";
import ThemeProvider from './styles/ThemeProvider'



const Routes: React.FC = () => {
    return (
    <GlobalStateProvider>
      <Router>
        <GlobalStyles />
          <ToastContainer />
            <ThemeProvider>
              <Switch> 
                  <ProtectedRouter exact path="/">
                    <Home />
                  </ProtectedRouter>
                  <ProtectedRouter exact path="/perfil">
                    <Perfil />
                  </ProtectedRouter>
                  <ProtectedRouter exact path="/perfil/seguidores">
                    <Seguidores />
                  </ProtectedRouter>
                  <ProtectedRouter path="/perfil/:username">
                    <Perfil />
                  </ProtectedRouter>
                  <Route path="/login">
                      <Login />
                  </Route>
              </Switch>
          </ThemeProvider>
      </Router>
    </GlobalStateProvider>  
    )
}

export default Routes