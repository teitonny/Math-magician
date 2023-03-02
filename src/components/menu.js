import { Link } from 'react-router-dom';
import menuCss from './menu.module.css';

const Menu = () => (
  <div className={menuCss.navContainer}>
    <div className={menuCss.mathLogo}><Link to="/">Math magician</Link></div>
    <ul className={menuCss.navbar}>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className="nav-item">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
