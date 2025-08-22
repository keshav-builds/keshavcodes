/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import Mail from '@/components/svgs/Mail';
// import X from '@/components/svgs/X';
// import LinkedIn from '@/components/svgs/LinkedIn';


export const heroConfig = {
  // Personal Information
  name: 'Keshav',
  title: 'A Full Stack web developer.',
  avatar: '/assets/logo.png',


  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [

  {
    name: 'Github',
    href: 'https://github.com/keshav-builds',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:developerkeshav200@gmail.com@gmail.com',
    icon: <Mail />,
  },
    // {
  //   name: 'X',
  //   href: 'https://x.com/ramxcodes',
  //   icon: <X />,
  // },
  // {
  //   name: 'LinkedIn',
  //   href: 'https://www.linkedin.com/in/ramxcodes/',
  //   icon: <LinkedIn />,
  // },
];
