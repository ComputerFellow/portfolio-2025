import React from 'react';
import styles from './_Egg.module.scss';

class Egg extends React.PureComponent {
    constructor(props) {
      super(props);
    //   this.state = { buttonsPressed: [document.querySelectorAll('.project-skill').length] };


    }


    render() {
        return (
            <svg className={styles.egg} viewBox="0 0 1800 300">
              {/* Symbol */}
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="50%" dy=".35em">Easter Egg {}</text>
              </symbol>
              {/* Duplicate symbols */}
              <use className={styles.text} xlinkHref="#s-text"></use>
              <use className={styles.text} xlinkHref="#s-text"></use>
              <use className={styles.text} xlinkHref="#s-text"></use>
              <use className={styles.text} xlinkHref="#s-text"></use>
              <use className={styles.text} xlinkHref="#s-text"></use>
            </svg>
          );
        
    }
}

export default Egg;
