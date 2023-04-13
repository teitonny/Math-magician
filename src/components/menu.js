import { Link, Outlet } from 'react-router-dom';
import menuCss from './menu.module.css';

const Menu = () => (
  <div className={menuCss.navContainer}>
    <div className={menuCss.mathLogo}><Link to="/" className={menuCss.link}>Math magician</Link></div>
    <ul className={menuCss.navbar}>
      <li className="nav-item">
        <Link to="/" className={menuCss.link}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/Calculator" className={menuCss.link}>Calculator</Link>
      </li>
      <li className="nav-item">
        <Link to="/Quote" className={menuCss.link}>Quote</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Menu;
