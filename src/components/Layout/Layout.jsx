import { useState } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.scss";

import Backdrop from "../Backdrop";
import Header from "../Header";
import MobileDrawerMenu from "../MobileDrawerMenu";

/**
 * this component is a wrapper for any page component
 * and it defines the general layout for each page.
 * namely, it adds a Header, Backdrop and MobileDrawerMenu
 * to each page by default
 */
const Layout = ({ children }) => {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false); // state to hold status of drawer menu

  /**
   * this handler function is responsible for toggling drawer menu
   * upon clicking drawer menu button and/or Backdrop for mobile devices
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
