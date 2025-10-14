import React from 'react';
import Scrollchor from 'react-scrollchor';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    this.refs.navbar.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document
          .getElementById('projects')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Contact') {
        document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  toggleDarkMode() {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
    // Here you can add the logic to change the theme of your website
  }

  render() {
    return (
      <div className={`navbar-container ${this.state.darkMode ? 'dark' : ''}`}>
        <nav className="navbar" ref="navbar">
          <Scrollchor to="#projects">Projects</Scrollchor>
          <Scrollchor to="#contact">Contact</Scrollchor>
          <button onClick={this.toggleDarkMode}>
            {this.state.darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
