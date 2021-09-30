
import { apiWithAuth } from "../../services/api";
import { useGlobalState } from "../../context/GlobalContext";

import Sidebar from "../SideBar";
import SeachInput from "../../components/SearcInput";

const Home: React.FC = () => {
  
  return (
    <>
      {/* <Sidebar /> */}
      <SeachInput />
    </>
  )
}


export default Home;
