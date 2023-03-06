import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SideNav, UserProfile, ComingSoon, UserMenu } from "../components";
import { Divider, Typography } from "@material-ui/core";
import clsx from "clsx";

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
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "3em",
    paddingRight: "3em",
    marginBottom: "1em",
  },
  divider: {
    marginLeft: "3em",
    marginRight: "3em",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  infoColor: {
    color: "#5a5a5a", // blackish
  },
  bold: {
    fontWeight: 600,
  },
});
const UserPage = () => {
  const classes = useStyles();
  const [selectedMenuItem, setSelectedMenuItem] = useState(sideNavMenuItems[0]);
  const itemOnClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const setDefaultSelection = () => {
    setSelectedMenuItem(sideNavMenuItems[0]);
  };

  const Header = () => {
    return (
      <div className={classes.header}>
        <Typography
          variant="h6"
          className={clsx(classes.bold, classes.infoColor)}
        >
          {selectedMenuItem}
        </Typography>
        <UserMenu setDefaultSelection={setDefaultSelection} />
      </div>
    );
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
      <div className={classes.body}>
        <Header />
        <Divider className={classes.divider} />
        <MainView />
      </div>
    </div>
  );
};

export default UserPage;
