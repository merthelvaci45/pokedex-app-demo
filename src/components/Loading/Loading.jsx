import classes from "./Loading.module.scss";

/**
 * this component display a loading spinner whenever any data in any page/component
 * is being loaded.
 */
const Loading = () => {
  return <div className={classes.Spinner}></div>;
};

export default Loading;
