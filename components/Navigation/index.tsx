import classes from './navigation.module.scss';

export default function Navigation({ children }) {
  return (
    <nav className={classes.navigation}>
      <ul>
        {children.map((navItem, index) => {
          return <li key={index}>{navItem}</li>;
        })}
      </ul>
    </nav>
  );
}
