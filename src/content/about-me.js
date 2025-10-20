export default [
  {
    input: 'Tony.location',
    return: '"Toronto, Ontario"',
  },
  {
    input: 'Tony.contactInfo',
    return:
      '["<a href="mailto:tkdev.to@gmail.com">tkdev.to@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/tonykwak">LinkedIn</a>", "<a rel="noopener" href="https://github.com/HyunKodes">GitHub</a>"]',
  },
  {
    input: 'Tony.interests',
    return:
      // '"My journey learning to code began in 2019. I became captivated by computer scripts and characters I did not understand. My desire to learn led me to enroll in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development"> Computer Application Development </a> program in 2020 and <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html"> Cybersecurity and Threat Management</a> with Seneca College in 2023. While not the straightforward process that I initially imagined, I have attained the experience, knowledge, and skills needed to contribute successfully. Presently, I am looking for opportunities for partnerships where my skills can be used to maintain and strengthen company initiatives.”',
      // '"I’m an application developer always keen on opportunities to connect and work together! Thanks for stopping by!”'
      '["design", "basketball", "cooking", "traveling"]',
  },
  {
  input: 'Tony.education',
  return: '"B.A. - University of Toronto"',

  // "B.A. - University of Toronto<br>Computer Applications Development<br>Cybersecurity and Threat Management"

},
  {
    input: 'Tony.certificates',
    return:
      // '"My journey learning to code began in 2019. I became captivated by computer scripts and characters I did not understand. My desire to learn led me to enroll in Conestoga College\'s <a rel="noopener" href="https://www.conestogac.on.ca/fulltime/computer-applications-development"> Computer Application Development </a> program in 2020 and <a rel="noopener" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html"> Cybersecurity and Threat Management</a> with Seneca College in 2023. While not the straightforward process that I initially imagined, I have attained the experience, knowledge, and skills needed to contribute successfully. Presently, I am looking for opportunities for partnerships where my skills can be used to maintain and strengthen company initiatives.”',
      // '"I’m an application developer always keen on opportunities to connect and work together! Thanks for stopping by!”',
      '["<a rel="noopener" target="_blank" href="https://www.conestogac.on.ca/fulltime/computer-applications-development">Computer Applications Development</a>", "<a rel="noopener" target="_blank" href="https://www.senecapolytechnic.ca/programs/fulltime/CYT.html">Cybersecurity and Threat Management</a>"]'
  },
];

// Having always been a tech-savvy individual (I grew up with Nintendo, Windows PC's), I always wanted to learn more about computers and how what appears on our screens appear. This desire took a further turn as I was wounding down from ESL teaching abroad upon completing Teacher Education. My journey as an educator in Asia sparked my existing desire into a flame of wanting to learn to code, as I saw and realized the effects that innovation was having, especially for the underclasses
