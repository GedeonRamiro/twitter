import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'  
import Login from "./pages/Login";
import { GlobalStyles } from "./styles/GlobalStyle";
import ThemeProvider from './styles/ThemeProvider'


const Routes: React.FC = () => {
    return (
    <Router>
      <GlobalStyles />
        <ToastContainer theme='colored' />
          <ThemeProvider>
            <Switch> 
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
         </ThemeProvider>
    </Router>
    )
}

export default Routes