import { Mail, Home, BookOpen, User, Database } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Database size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'datasync',
    title: 'Datasync',
    icon: <Database size={20} />,
    navLink: '/datasync'
  },
  {
    id: 'My Profile',
    title: 'My Profile',
    icon: <User size={20} />,
    navLink: '/profile'
  },
  {
    id: 'NewsFeed',
    title: 'NewsFeed',
    icon: <BookOpen size={20} />,
    navLink: '/mainfeed'
  },
  {
    id: 'Write',
    title: 'Contents Write',
    icon: <Mail size={20} />,
    navLink: '/edit'
  },
  {
    id: 'NewsDetail',
    title: 'NewsDetail',
    icon: <Mail size={20} />,
    navLink: '/newsdetail'
  }
]
