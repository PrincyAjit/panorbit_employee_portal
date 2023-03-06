import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideNav from "../components/SideNav";
import UserProfile from "../components/UserProfile";
import ComingSoon from "../components/ComingSoon";

const sideNavMenuComponents = {
  Profile: <UserProfile />,
  Posts: <ComingSoon />,
  Gallery: <ComingSoon />,
  "To do": <ComingSoon />,
};
const sideNavMenuItems = Object.keys(sideNavMenuComponents);
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    margin: "4em",
  },
});

const UserPage = () => {
  const classes = useStyles();
  const [selectedMenuItem, setSelectedMenuItem] = useState(sideNavMenuItems[0]);
  const itemOnClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  const MainView = () => {
    return sideNavMenuComponents[selectedMenuItem];
  };
  return (
    <div className={classes.root}>
      <SideNav
        sideNavMenuItems={sideNavMenuItems}
        selectedMenuItem={selectedMenuItem}
        itemOnClick={itemOnClick}
      />
      <MainView />
    </div>
  );
};

export default UserPage;
