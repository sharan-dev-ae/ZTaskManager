import  { createContext, useState, useContext } from "react";
const defaultContext = {
    theme: "light",
    toggleTheme: () => {},
    // language: "en",
    // changeLanguage: (lang: string) => {},
    // user: null,
    // loginUser: (userData: any) => {},
    // logoutUser: () => {},
  };
const GlobalContext = createContext(defaultContext);

export const useGlobalContext = () => {
  console.log("TEST")
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }:any) => {
  const [theme, setTheme] = useState("light");
  // const [language, setLanguage] = useState("en"); 
  // const [user, setUser] = useState(null); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // const changeLanguage = (lang:any) => {
  //   setLanguage(lang);
  // };

  // const loginUser = (userData:any) => {
  //   setUser(userData);
  // };

  // const logoutUser = () => {
  //   setUser(null);
  // };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        // language,
        // changeLanguage,
        // user,
        // loginUser,
        // logoutUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
