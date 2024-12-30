module.exports = {
  email: 'talukdar.minakshi8@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/MinakshiTalukdar',
    },
    {
      name: 'Linkedin',
      url: 'http://www.linkedin.com/in/minakshi-talukdar-1408364a',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    // {
    //   name: 'Work',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  // colors: {
  //   green: '#2d1b69',
  //   navy: '#7fffd4',
  //   darkNavy: '#0f0f0f'
  // },
  // colors: {
  //   green: '#1a3a3a',
  //   navy: '#ff7f50',
  //   darkNavy: '#0f1c1c'
  // },
  // colors: {
  //   green: '#0f1729',
  //   navy: '#5ef7dd',
  //   darkNavy: '#060a14'
  // },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
