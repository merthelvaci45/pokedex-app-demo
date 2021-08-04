import { useState } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.scss";

import Backdrop from "../Backdrop";
import Header from "../Header";
import MobileDrawerMenu from "../MobileDrawerMenu";

/**
 * this component is a wrapper for any page component
 * and it defines the general layout for each page.
 */
const Layout = ({ children }) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);

  /**
   * this handler function is responsible for toggling drawer menu upon clicking drawer menu button for mobile devices
   */
  const toggleDrawerMenuDisplayHandler = () =>
    setIsDrawerMenuOpen((prevState) => !prevState);

  return (
    <>
      <Header onToggleMenu={toggleDrawerMenuDisplayHandler} />
      <Backdrop
        isBackdropActivated={isDrawerMenuOpen}
        onDismiss={toggleDrawerMenuDisplayHandler}
      />
      <MobileDrawerMenu
        isDrawerMenuOpen={isDrawerMenuOpen}
        onDismiss={toggleDrawerMenuDisplayHandler}
      />
      <main className={classes.Layout}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
