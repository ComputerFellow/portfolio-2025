import tkodes from 'images/tkodes.jpg';
import music from 'images/music.jpg';
import scriptteam from 'images/scriptteam.jpg';
import rpg from 'images/rpg.jpg';
import calc from 'images/calc.jpg';
import ss from 'images/ss.jpg';


// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Previous Portfolio',
    description:
      'A website showcasing a collection of projects I worked on as a freelance developer. I used it mostly to practice layouts, animations, dark/light themes, and smooth scrolling.',
    skills: ['HTML', 'CSS', 'JavaScript', 'ES6', 'React', 'Redux'],
    // skills: ['HTML', 'CSS', 'Sass', 'JavaScript', 'ES6', 'React', 'Redux'],
    image: tkodes,
    links: {
      github: 'https://github.com/tkodes/portfolio',
      preview: 'https://endearing-blancmange-a69911.netlify.app/',
      disabled: {
        github: false,
        preview: false,
      },
    },
  },
  {
    title: 'A Sample Music Player',
    description:
      // 'This project is based off <a href="#">this project</a> that has been instrumental in practicing a few front-end technologies.',
      'This  <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8">project</a> made use of the ES6 features of JavaScript including template literals and arrow synthax. It uses optional chaining. Great for practice and the music made it gripping.',
    skills: ['HTML', 'CSS', 'SASS', 'JavaScript', 'ES6', 'React'],
    image: music,
    links: {
      github: 'https://github.com/tkodes/music',
      preview: 'https://endearing-blancmange-a69911.netlify.app/music',
    },
  },
  {
    title: 'RPG Project',
    description:
      'A freeCodeCamp project made using JavaScript, HTML, and CSS to provide a simple yet engaging rpg game experience.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: rpg,
    links: {
      github: 'https://github.com/tkodes/rpg',
      preview: 'https://endearing-blancmange-a69911.netlify.app/rpg',
    },
  },
  {
    title: 'Calculator',
    description:
      'A calculator using Python which prompts user through command-line.',
    skills: ['Python'],
    image: calc,
    links: {
      github: 'https://www.pythonanywhere.com/user/kwaktony/shares/a930af74061e4b09bda5d70c89e46e91/',
      preview: 'https://www.pythonanywhere.com/user/kwaktony/shares/a930af74061e4b09bda5d70c89e46e91/',
    },
  },
  {
    title: 'First Site',
    description:
      'My first major app built on Google Sites - a tremendous learning experience! This project was created to record my work at Conestoga College.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      // 'Polymer',
      'Material Design',
    ],
    image: scriptteam,
    links: {
      github: 'https://sites.google.com/view/tonystechprojects/',
      preview: 'https://sites.google.com/view/tonystechprojects/',
      disabled: {
        github: true,
        preview: false,
      },
    },
  },
  {
    title: 'College Project',
    description:
      'First client app built on C# using ASP.NET Core. Very valuable experience and it provided the ability to try different front/back end technologies. I also was able to set up roles (administrator, guest) which this shows.',
    skills: [
      'HTML',
      'CSS',
      'C#',
      'SQL',
      'ASP.NET Core'
      // 'Polymer',
    ],
    image: ss,
    links: {
      github: 'https://sites.google.com/view/tonystechprojects/',
      preview: 'https://sites.google.com/view/tonystechprojects/',
      disabled: {
        github: true,
        preview: true,
      },
    },
  },
];
