import React from 'react';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';
import Footer from 'components/Footer';
import Egg from 'components/Egg';
import projects from 'content/projects';
import statements from 'content/about-me';

//ORIGINAL


export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleAllActiveChange = this.handleAllActiveChange.bind(this);
  }

  handleThemeChange(theme) {
    this.setState({ theme });
  }

  handleAllActiveChange(isAllActive) {
    this.setState({ isAllActive });
    console.log(this.state + " is 'this state'")

  }

  render() {
    const { theme } = this.state;
    const { isAllActive } = this.state;

    return (
      <div className="home-container">
        <Navbar onThemeChange={this.handleThemeChange} currentTheme={theme} />
        {theme === 'dark' && isAllActive && <Egg theme={theme} />}        
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}