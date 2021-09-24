
import { apiWithAuth } from "../../services/api";
import { useGlobalState } from "../../context/GlobalContext";

function App() {

  const { auth } = useGlobalState()

  apiWithAuth.get('/profile')  

  return (
      <h1>Usuário: { auth?.user.name }</h1>
  );
}


export default App;
