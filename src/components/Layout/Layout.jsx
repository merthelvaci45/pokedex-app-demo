import PropTypes from "prop-types";

import classes from "./Layout.module.scss";

import Backdrop from "../Backdrop";
import Header from "../Header";
import MobileDrawerMenu from "../MobileDrawerMenu";

import { DrawerMenuProvider } from "../../context";

import { useWindowDimensions } from "../../hooks";

/**
 * this component is a wrapper for any page component
 * and it defines the general layout for each page.
 */
const Layout = ({ children }) => {
  const { width } = useWindowDimensions();

  const layoutContent =
    width < 768 ? (
      <DrawerMenuProvider>
        <Header />
        <Backdrop />
        <MobileDrawerMenu />
      </DrawerMenuProvider>
    ) : (
      <Header />
    );

  return (
    <>
      {layoutContent}
      <main className={classes.Layout}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
