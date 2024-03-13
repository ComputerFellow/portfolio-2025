import React from 'react';
import '../pages/App.scss';
import Scrollchor from 'react-scrollchor';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    console.log(this.state.darkMode)
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
    if (!this.state.darkMode) {
      localStorage.setItem('currentTheme', 'dark');
      document.body.classList.add('dark-theme');
    } else {
      localStorage.setItem('currentTheme', 'light');
      document.body.classList.remove('dark-theme');
    }
  }

  render() {
    
    return (
      <div className={this.state.darkMode ? 'dark' : 'light'}>
        {/* Other components and elements go here */}
        <div className="navbar-container">
          <nav className="navbar" ref="navbar">
            <Scrollchor to="#projects">Projects</Scrollchor>
            <Scrollchor to="#contact">Contact</Scrollchor>
            <div>
              
              <a className="exception" type="button" onClick={this.handleClick}>
                {this.state.darkMode ? 'Light' : 'Dark'}
              </a> 
              
              {/* <button className="exception" type="button" onClick={this.handleClick}>
                {this.state.darkMode ? 'Light' : 'Dark'}
              </button>  */}

            </div>
          </nav>
        </div>
      </div>
    );
  }
  
}

export default Navbar;
