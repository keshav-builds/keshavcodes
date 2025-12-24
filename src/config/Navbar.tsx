export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const navbarConfig = {
  logo: {
    src: '/assets/avatar.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
