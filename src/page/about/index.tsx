import React, { useEffect } from "react";
import {
  useLocation
} from 'react-router-dom';

import { abouts } from "../../config/about";

import NavBar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import AboutText from "../../components/About/AboutText";
import LifeStyles from "../../components/About/LifeStyles";
import GitHubStats from "../../components/About/GitHubStats";
import TechStack from "../../components/About/TechStack";
import Header from "../../components/Header";


const About: React.FC = () => {

  const location = useLocation();
  useEffect(() => {
    document.title = "Hugo ChunHo Lin (1chooo) | Portfolio";
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`about ${location.pathname === '/' ? 'active' : ''}`}
          data-page="about"
        >
          <Header title={abouts.header} />
          <AboutText />
          <GitHubStats />
          <TechStack />
          <LifeStyles />
        </article>
      </div>
    </main>
  );
}

export default About;
