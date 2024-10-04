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
'"My journey learning to code began in 2019. I became captivated by computer scripts and characters I did not understand. Given my thirst for learning, I enrolled in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development"> Computer Application Development </a> program in 2020, and Cybersecurity and Threat Management at <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html">Cybersecurity and Threat Management</a> at Seneca College in 2023. While not the most straightforward or linear task, I obtained the knowledge and skills needed for work, alongside a perspective which should continue to serve me for years to come. Presently, I look for opportunities for partnership and improvement of your company’s initiatives."',
      // '"My journey learning to code began in 2019. I was captivated by computer scripts and characters I did not understand. Enrolling in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development">Computer Application Development</a> program, I set out to develop this understanding and while the journey has been tough it\'s been rewarding. I learned more about cybersecurity in 2023 through <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html">Cybersecurity and Threat Management</a> at Seneca College. Being a perpetual learner, I apply a trial and error process to everything, including development. I look forward to seeing how my skills may be applicable to you and your company!"', 
      //I look forward to understand how I might meet your company needs.
      // '"My journey learning to code began in 2019. I was captivated by computer scripts and characters I did not understand. Enrolling in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development">Computer Application Development</a> program, I set out to develop this understanding and while the journey has been tough it\'s been rewarding. I learned more about cybersecurity in 2023 through <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html">Cybersecurity and Threat Management</a> at Seneca College. I consider myself a web and app developer focused on high-quality, thoroughly tested, and secure solutions, and I look forward to working with you on your organizational projects!"',
  },
];
