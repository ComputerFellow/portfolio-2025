import React from 'react';
import '../pages/App.scss';
import Scrollchor from 'react-scrollchor';
import halfCircle from '../images/half-circle.png';
import halfCircleInverted from '../images/half-circle-inverted.png';

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

  // //THE ATTEMPT
  handleClick() {
    this.setState(
      prevState => {
        const nextTheme = prevState.darkMode ? 'light' : 'dark';
        this.props.onThemeChange(nextTheme);
        return { darkMode: !prevState.darkMode };
      },
      () => {
        const theme = this.state.darkMode ? 'dark' : 'light';
        localStorage.setItem('currentTheme', theme);
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
      }
    );
  }

  render() {
    return (
      <div className={this.state.darkMode ? 'dark' : 'light'}>
        {/* Other components and elements go here */}
        <div className="navbar-container">
          {/* <nav className="navbar" ref="navbar">
            <Scrollchor to="#projects">Projects</Scrollchor>
            <Scrollchor to="#contact">Contact</Scrollchor>
            <div>
              <a className="exception" type="button" onClick={this.handleClick}>
                {this.state.darkMode ? 'Light' : 'Dark'}
                <img
                  src={halfCircle}
                  alt=""
                  style={{ height: '2em', marginLeft: '0.4em' }}
                />
                <img
                  src={halfCircleInverted}
                  alt=""
                  style={{ height: '2em', marginLeft: '0.4em' }}
                />
              </a>
            </div>
          </nav> */}
          <nav className="navbar" ref="navbar">
            <Scrollchor to="#projects">Projects</Scrollchor>
            <Scrollchor to="#contact">Contact</Scrollchor>

            <div>
              <a className="exception" type="button" onClick={this.handleClick}>
                <img
                  src={this.state.darkMode ? halfCircleInverted : halfCircle}
                  alt={
                    this.state.darkMode
                      ? 'Switch to light mode'
                      : 'Switch to dark mode'
                  }
                  style={{
                    height: '2em',
                    marginTop: '-0.5em',
                    verticalAlign: 'middle',
                  }}
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
