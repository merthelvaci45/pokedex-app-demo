import classes from "./Header.module.scss";

import DrawerMenuBtn from "../DrawerMenuBtn";

import { useNavigateToPage, useWindowDimensions } from "../../hooks";

import { menuItems } from "../../utils";

const Header = () => {
  const handlers = useNavigateToPage();
  const { width } = useWindowDimensions();

  return (
    <header className={classes.Header}>
      <div className="container-fluid h-100">
        <DrawerMenuBtn />
        {width >= 768 && (
          <div>
            {menuItems.map((item, index) => (
              <button
                key={item}
                className={classes.HeaderLargeMenuItem}
                onClick={handlers[index]}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
