export default [
  {
    input: 'Tony.location',
    return: '"Toronto, Ontario"',
  },
  {
    input: 'Tony.contactInfo',
    return:
      '["<a href="mailto:kwaktony@outlook.com">kwaktony@outlook.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/tonykwak">LinkedIn</a>", "<a rel="noopener" href="https://github.com/tkodes">GitHub</a>"]',
  },
  {
    input: 'Tony.intro',
    return:
      // '"​My journey in (k)oding began when I enrolled in online certifications. I then pursued tech graduate certificates at Conestoga and Seneca colleges, which furthered my understanding of secure web design and test-driven development. Currently, I am seeking opportunities to apply these skills and obtain an opportunity to support the front end of a leading organization."',

      '"My journey learning to code began in 2019. I was captivated by computer scripts and characters I did not understand. Enrolling in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development">Computer Application Development</a> program, I set out to develop this understanding and while the journey has been tough it\'s been rewarding. I learned more about cybersecurity in 2023 through <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html">Cybersecurity and Threat Management</a> at Seneca College. I consider myself a web and app developer focused on high-quality, thoroughly tested, and secure solutions, and I look forward to working with you on your organizational projects!"',
  },
];
