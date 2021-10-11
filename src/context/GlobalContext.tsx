import { createContext, useContext, useState } from "react";

export interface IAuth {
    access_token: string;
    user: {
        id: string;
        name: string;
        email: string;
        username: string;
  }
}

interface IGlobalState {
    auth?: IAuth
    setAuth: (auth: IAuth) => void;
    setName: (name: string) => void;
    removeAuth: () => void;
}

export const GlobalContext = createContext<IGlobalState>( {} as IGlobalState )

export const GlobalStateProvider: React.FC = ({ children }) => {

    const [auth, setAuthState] = useState<IAuth | undefined>(() => {
        const auth = localStorage.getItem("@twitter:auth") || undefined;

        if(auth) {
            return JSON.parse(auth)
        }

        return auth;
    })

    const setAuth = (auth: IAuth) => {
        localStorage.setItem("@twitter:auth", JSON.stringify(auth));
        setAuthState(auth)
    }

    const setName = (name: string) => {
        if(!auth) return
        
        const newName = auth
        newName.user.name = name

        localStorage.removeItem("@twitter:auth")
        localStorage.setItem("@twitter:auth", JSON.stringify(newName));
        setAuthState(newName)
    }

   

    const removeAuth = () => {
        localStorage.removeItem("@twitter:auth")
        setAuthState(undefined)
    }

    return(
          <GlobalContext.Provider value={{ auth, setAuth, removeAuth, setName }}>
              {children}
          </GlobalContext.Provider>    
    )
}


export const useGlobalState = () => {
    const context = useContext(GlobalContext)
    return context
}
