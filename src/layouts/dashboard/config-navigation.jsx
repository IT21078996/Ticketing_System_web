import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My QR Code',
    path: '/products',
    icon: icon('ic_qr'),
  },
  {
    title: 'My Rides',
    path: '/user',
    icon: icon('ic_ride'),
  },
  {
    title: 'Top Up',
    path: '/login',
    icon: icon('ic_topup'),
  },
  {
    title: 'Student Pass',
    path: '/blog',
    icon: icon('ic_st_pass'),
  },
  {
    title: 'Payouts',
    path: '/login',
    icon: icon('ic_payouts'),
  },
  {
    title: 'Settings',
    path: '/404',
    icon: icon('ic_settings'),
  },
  {
    title: 'admin dashboard',
    path: '/admin',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Travel History',
    path: '/history',
    icon: icon('ic_travel_history'),
  },
  {
    title: 'bus timetables',
    path: '/timetable',
    icon: icon('ic_timetable'),
  },
  {
    title: 'assign buses',
    path: '/assign-bus',
    icon: icon('ic_ride'),
  },
  {
    title: 'fare rates',
    path: '/fare-rates',
    icon: icon('ic_payouts'),
  },
  {
    title: 'reports',
    path: '/reports',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: '/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
