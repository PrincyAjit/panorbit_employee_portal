import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawerPaper: {
    width: drawerWidth,
    background: "linear-gradient(180deg,#385ac8,#5e3ac8)",
    position: "static",
    borderRadius: "1.5em",
    display: "flex",
    justifyContent: "center",
  },
  menuItem: {
    cursor: "pointer",
    paddingLeft: "2em",
  },
  selectedItem: {
    color: "white",
  },
  unselectedItem: {
    color: "#a5a5e4",
  },
  menuItemText: {
    fontSize: "1.1rem !important",
  },
  divider: {
    backgroundColor: "#8f91dd",
    position: "relative",
    top: "1em",
  },
  hideIcon: {
    visibility: "hidden",
  },
});
const SideNav = (props) => {
  const { sideNavMenuItems, selectedMenuItem, itemOnClick } = props;
  const classes = useStyles();
  const notLastEntry = (index) => index < sideNavMenuItems?.length - 1;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        {sideNavMenuItems.map((menuItem, index) => (
          <>
            <ListItem
              onClick={() => {
                itemOnClick(menuItem);
              }}
              className={clsx(
                classes.menuItem,
                selectedMenuItem === menuItem
                  ? classes.selectedItem
                  : classes.unselectedItem
              )}
            >
              <ListItemText>
                <Typography className={classes.menuItemText}>
                  {menuItem}
                </Typography>
                {notLastEntry(index) && <Divider className={classes.divider} />}
              </ListItemText>
              <ChevronRightIcon
                className={selectedMenuItem !== menuItem && classes.hideIcon}
              />
            </ListItem>
          </>
        ))}
      </List>
    </Drawer>
  );
};

SideNav.propTypes = {
  sideNavMenuItems: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.string.isRequired,
  itemOnClick: PropTypes.func.isRequired,
};

export default SideNav;
