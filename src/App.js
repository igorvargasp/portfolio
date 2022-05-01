import Header from "./components/Header/Header.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx"
import Projects from "./components/Projects/Projects.tsx"
import Skill from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skill/>
      <Projects/> 
      <Footer/>
      </div>
   
  );
}

export default App;
