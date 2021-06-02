import classes from './MainNav.module.css';
import logo from '../../../assets/logo.png';

const MainNav = () => (
  <nav className={classes.navbar}>
    <div data-testid="logo_text" className={classes.logo}>
      Happy
      <img data-testid="logo" src={logo} height="50" width="50" alt="logo" />
      Meal
    </div>
  </nav>
);

export default MainNav;
