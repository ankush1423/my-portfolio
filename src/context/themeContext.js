import { useContext , createContext } from "react";

export const themeContext = createContext({
     theme : "light",
     lightTheme : () => {},
     darkTheme : () => {}
})

export const ThemeContextProvider = themeContext.Provider

export default function(){
     return useContext(themeContext)
}















