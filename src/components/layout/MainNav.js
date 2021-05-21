import classes from './MainNav.module.css';
import logo from '../../assets/logo.png';

const MainNav = () => (
  <nav className={classes.navbar}>
    <div className={classes.logo}>
      Happy
      <img src={logo} height="50" width="50" alt="logo" />
      Meal
    </div>
  </nav>
);

export default MainNav;
