import hkodes from 'images/hkodes.jpg';
import music from 'images/music.jpg';
import scriptteam from 'images/scriptteam.jpg';
import baseball from 'images/baseball.jpg';
import carousel from 'images/carousel.jpg';
import carouseldark from 'images/carousel-dark.jpg';
import carouseldark2 from 'images/carousel-dark2.jpg';
import calc from 'images/calc.jpg';
import booklist2 from 'images/booklist2.jpg';
import map from 'images/mapapp.jpg';
import cynthias from 'images/cynthias.jpg';
import stringofpearls from 'images/stringofpearls.jpg';

// import pbox from 'images/pbox.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Book List',
    description:
      // 'A list of books that can be added to, edited, stored, and deleted. Books persist upon refreshing through API connection with a third party database.',
      // 'This project is a comprehensive book management system built with React. Users can add, edit, store, and delete books, with all data persisting through an API connection to a third-party database. This project highlights my ability to integrate REST APIs and real-time data storage, ensuring that book information remains consistent after refreshing the page. It was a challenging yet rewarding experience that significantly enhanced my skills in full-stack development.',
      // "I Users can add, edit, store, and delete books, with all data remaining through an API connection to a third-party database. This project highlights my ability to integrate REST APIs and real-time data storage, ensuring that book information remains consistent after refreshing the page. It was a challenging yet rewarding experience that significantly enhanced my skills in full-stack development.",
      "I included this project as an example of a FULL STACK APP. It connects to external APIs for open source photos and a third party database. It highlights the the variety of skills required for developing apps with JS/React and fundamental related technologies and concepts.",
    skills: [
      'HTML',
      'CSS',
      'React',
      'REST API',
      'Firebase',
      'JavaScript',

      // 'Polymer',
    ],
    image: booklist2,
    links: {
      github: 'https://github.com/HyunKodes/booklist',
      preview: 'https://booklist-lib.netlify.app/',
      disabled: {
        github: false,
        preview: false,
      },
    },
  },
  {
    title: 'Location Search',
    description:
      // 'A project made with React using Vite. Connects to a third party API for location information and provides users a search bar to choose where to go.',
      // 'A location search tool built with React and Vite. It connects to a third-party API to fetch location information and provides users with a search bar to explore different destinations. This project was an excellent opportunity to practice integrating APIs and using modern web development tools like Tailwind and TypeScript.',
      'A location search tool built with React and Vite. It connects to a third-party API to fetch location information and provides users with a search bar to explore different destinations.',

    skills: [
      'HTML',
      'CSS',
      'React',
      'Vite',
      'Tailwind',
      'TypeScript',
      // 'Polymer',
    ],
    image: map,
    links: {
      github: 'https://github.com/HyunKodes/map',
      preview: 'https://g-mapapp.netlify.app',
      disabled: {
        github: false,
        preview: false,
      },
    },
  },
  {
    title: 'Project Display',
    description:
      // 'This project is based off <a href="#">this project</a> that has been instrumental in practicing a few front-end technologies.',
      // "This project is a collection of documentation for projects I've designed, including a few technologies I've additionally used.",
      "This project showcases a collection of documentation for projects I've designed. It includes a carousel with images of technical diagrams, software tools, mockup/wireframes, and UI screenshots. This project highlights what is possible with HTML, CSS, and JavaScript.",
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: carouseldark2,
    links: {
      github: 'https://github.com/HyunKodes/carousel',
      preview: 'https://carouse-l.netlify.app/',
      disabled: {
        github: false,
        preview: false,
      },
    },
  },

  {
    title: 'Previous Portfolio',
    description:
      // 'A website showcasing a collection of projects I worked on as a freelance developer. I used it mostly to practice layouts, animations, dark/light themes, and smooth scrolling.',
      'A vibrant showcase of the projects I worked on as part of my personal and academic projects. It served as my sandbox for experimenting with layouts, animated gifs, dark/light themes, smooth scrolling, modal pop-ups, css animations, and more. Each project card highlights my familiarity with a variety of technologies.',
    skills: ['HTML', 'CSS', 'React', 'JavaScript', 'Bootstrap', 'C#'],
    // skills: ['HTML', 'CSS', 'Sass', 'JavaScript', 'ES6', 'React', 'Redux'],
    image: hkodes,
    links: {
      github: 'https://github.com/HyunKodes/portfolio-2022.git',
      preview: 'https://hkode.netlify.app/',
      disabled: {
        github: true,
        preview: false,
      },
    },
  },
  {
    title: 'Custom Plant Site',
    description:
      // 'A website built using plain HTML and CSS for a client business that deals with all things succulents.',
      'This website was built using plain HTML and CSS for a client business specializing in succulents designed to reflect the simplicity and beauty of these resilient plants, providing clear and elegant navigation.',
    skills: ['HTML', 'CSS'],
    image: stringofpearls,
    links: {
      github: 'https://github.com/HyunKodes/cynthias',
      preview: 'https://c-succulents.netlify.app',
    },
  },
  // {
  //   title: 'Image Search App',
  //   description:
  //     'An application that connects to a third party API for a presentation of images based on key terms.',
  //   skills: ['React', 'HTML', 'CSS', 'JavaScript'],
  //   image: baseball,
  //   links: {
  //     github: 'https://github.com/HyunKodes/pics',
  //     preview: 'https://pics-engine.netlify.app',
  //   },
  // },
  // {
  //   title: 'RPG Project',
  //   description:
  //     'A freeCodeCamp <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8">project</a> made using only JavaScript, HTML, and CSS to provide a simple yet engaging rpg game experience.',
  //   skills: ['HTML', 'CSS', 'JavaScript'],
  //   image: baseball,
  //   links: {
  //     github: 'https://github.com/HyunKodes/rpg',
  //     preview: 'https://hkode.netlify.app/rpg',
  //   },
  // },
  // {
  //   title: 'Calculator',
  //   description:
  //     // 'A calculator using Python which prompts the user through command line.',
  //     'This project is a command-line calculator built using Python. It prompts the user for input and performs basic arithmetic operations. It was a great way to practice Python programming and improve my understanding of user input handling and command-line interfaces.',
  //   skills: ['Python'],
  //   image: calc,
  //   links: {
  //     github:
  //       'https://www.pythonanywhere.com/user/kwaktony/shares/a930af74061e4b09bda5d70c89e46e91/',
  //     preview:
  //       'https://www.pythonanywhere.com/user/kwaktony/shares/a930af74061e4b09bda5d70c89e46e91/',
  //   },
  // },
  // {
  //   title: 'First Site',
  //   description:
  //     // 'My first major app built on Google Sites - a great learning experience. This project was created to record my work at Conestoga College.',
  //     // 'I built my first website using? Google Sites, a template builder similar to WordPress and Wix. It was a valuable experience in understanding how to create functional websites without starting from scratch. This project allowed me to focus on content and design, rather than the technical complexities of coding from the ground up.',
  //     'My first website built using Google Sites, a great template builder (no code) I used to showcase projects that I had worked on through as a capstone project for the Computer Applications Development graduate certicate program (2020)',
      
  //   skills: ['HTML', 'CSS'],
  //   image: scriptteam,
  //   links: {
  //     github: 'https://sites.google.com/view/tonystechprojects/',
  //     preview: 'https://sites.google.com/view/tonystechprojects/',
  //     disabled: {
  //       github: true,
  //       preview: false,
  //     },
  //   },
  // },
  {
    title: 'Music Player',
    description:
      // 'This project is based off <a href="#">this project</a> that has been instrumental in practicing a few front-end technologies.',
      // 'This project made use of the ES6 features of JavaScript including template literals and arrow synthax. It uses optional chaining. Great for practicing with JavaScript and the music makes it gripping.',
      'This project leverages ES6 features of JavaScript, such as template literals and arrow syntax, along with optional chaining. It was a great opportunity to practice JavaScript, and the musical aspect made it an engaging experience.',
    skills: ['HTML', 'CSS', 'SASS', 'JavaScript', 'ES6'],
    image: music,
    links: {
      github: 'https://github.com/HyunKodes/music',
      preview: 'https://hkode.netlify.app/music',
      disabled: {
        github: false,
        preview: false,
      },
    },
  },
  // {
  //   title: 'Bookstore Project',
  //   description:
  //     'A project made with React. Uses custom hooks/navigation. Enables users to add, edit, and delete books.',
  //   skills: [
  //     'HTML',
  //     'CSS',
  //     'React',
  //     'Vite',
  //     'JavaScript',
  //     'TypeScript',
  //     // 'Polymer',
  //   ],
  //   image: bookstore,
  //   links: {
  //     github: 'https://github.com/HyunKodes/bookstore',
  //     preview: 'https://bookstore-ts.netlify.app/books',
  //     disabled: {
  //       github: false,
  //       preview: false,
  //     },
  //   },
  // },

  // {
  //   title: 'College Project',
  //   description:
  //     'First client app built on C# using ASP.NET Core (MVC). Very valuable experience and it provided the ability to try different front/back end technologies. I also was able to set up roles (administrator, guest).',
  //   skills: [
  //     'HTML',
  //     'CSS',
  //     'C#',
  //     'SQL',
  //     'ASP.NET Core',
  //     // 'Polymer',
  //   ],
  //   image: ss,
  //   links: {
  //     github: 'https://sites.google.com/view/tonystechprojects/',
  //     preview: 'https://sites.google.com/view/tonystechprojects/',
  //     disabled: {
  //       github: true,
  //       preview: true,
  //     },
  //   },
  // },

  // {
  //   title: 'Client Project',
  //   description:
  //     'Recent project utilizing HTML/CSS/VanillaJS to recreate structure and themes for an existing site. Utilizes DOMContentLoaded and more.',
  //   skills: [
  //     'HTML', 'CSS', 'JavaScript', 'jQuery', 'Git',

  //     // 'Polymer',
  //   ],
  //   image: pbox,
  //   links: {
  //     github: 'https://sites.google.com/view/tonystechprojects/',
  //     preview: 'https://ecstatic-pasteur-2d6c7g.netlify.app/',
  //     disabled: {
  //       github: true,
  //       preview: false,
  //     },
  //   },
  // },
];
