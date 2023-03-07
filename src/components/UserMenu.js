import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import PropTypes from "prop-types";
import {
  Avatar,
  Typography,
  Divider,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import UserNameAndAvatar from "./UserNameAndAvatar";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles({
  textColor: {
    color: "#9a9a9a", // greyish
  },
  infoColor: {
    color: "#5a5a5a", // blackish
  },
  menuIcon: {
    marginRight: "1em",
  },
  menu: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "1em",
    textAlign: "center",
    marginTop: "0.5em",
  },
  menuContent: {
    padding: "1.5em",
  },
  menuAvatar: {
    margin: "auto",
    width: "100%",
    height: "100%",
    maxWidth: "100px",
    maxHeight: "100px",
  },
  signOutButton: {
    borderRadius: "2em",
    backgroundColor: "#d55151",
    textTransform: "capitalize",
    color: "white",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#d55151",
    },
  },
});

const UserMenu = (props) => {
  const { setDefaultSelection } = props;
  const classes = useStyles();
  const location = useLocation();
  const data = location?.state?.userData;
  const { userDataInContext } = useContext(DataContext);
  const fullName = data?.name;
  const email = data?.email;
  const profilePictureURL = data?.profilepicture;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTwoOtherUsers = () => {
    const otherUsers = [];
    let countOfUsersFetched = 0;
    for (let iterator = 0; iterator < userDataInContext?.length; iterator++) {
      const user = userDataInContext[iterator];
      console.log({ user });
      if (user.name !== fullName) {
        otherUsers.push(user);
        countOfUsersFetched++;
      }
      if (countOfUsersFetched === 2) break;
    }
    return otherUsers;
  };

  const twoOtherUsers = getTwoOtherUsers();
  const notLastEntry = (index) => index === 0; // this function is used for displaying two other users in the menu,hence the condition for not the last entry is just the first element whose index=0.
  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <Avatar
          alt={fullName}
          src={profilePictureURL}
          className={classes.menuIcon}
        />
        <Typography variant="h6" className={classes.infoColor}>
          {fullName}
        </Typography>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{
          paper: classes.menu,
        }}
      >
        <div className={classes.menuContent}>
          <Avatar
            alt={fullName}
            src={profilePictureURL}
            className={classes.menuAvatar}
          />
          <Typography variant="h6" className={classes.infoColor}>
            {fullName}
          </Typography>
          <Typography variant="subtitle1" className={classes.textColor}>
            {email}
          </Typography>
          <Divider />
          {twoOtherUsers?.map((user, index) => (
            <>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setDefaultSelection();
                }}
              >
                <UserNameAndAvatar
                  path="/user"
                  userData={user}
                  componentAs="link"
                />
              </MenuItem>
              {notLastEntry(index) && <Divider />}
            </>
          ))}
          <Button
            variant="contained"
            className={classes.signOutButton}
            component={Link}
            to="/home"
            state={{}}
          >
            Sign out
          </Button>
        </div>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  setDefaultSelection: PropTypes.func.isRequired,
};

export default UserMenu;
