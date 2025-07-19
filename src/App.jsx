import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { ThemeContextProvider } from "./context/themeContext";
import { useEffect, useState } from "react";

function App() {
   const [theme,setTheme] = useState("light")
   function lightTheme(){
       setTheme("light")
   }
   function darkTheme(){
      setTheme("dark")
   }
   useEffect(() => {
      document.querySelector("html").classList.remove("light","dark")
      document.querySelector("html").classList.add(theme)
   },[theme])
  return (
    <ThemeContextProvider value={{theme , lightTheme , darkTheme}}>
      <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] dark:bg-[#111827] dark:text-[#F9FAFB] transition-colors duration-300">
        <Header />

        <main className="flex-grow px-4 py-6"
        >
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
