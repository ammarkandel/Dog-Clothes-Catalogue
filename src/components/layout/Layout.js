import MainNav from './MainNav';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <main className={classes.main}>
        {props.children}
      </main>
    </>
  )
}

export default Layout;
