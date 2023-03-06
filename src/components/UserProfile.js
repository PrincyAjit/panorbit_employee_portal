import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import PropTypes from "prop-types";
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import UserNameAndAvatar from "./UserNameAndAvatar";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles({
  container: {
    padding: "1em 3em",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "1em",
    marginBottom: "1em",
    borderBottom: "1px solid #dfdfdf",
  },
  centerAlign: {
    textAlign: "center",
  },
  textColor: {
    color: "#9a9a9a", // greyish
  },
  infoColor: {
    color: "#5a5a5a", // blackish
  },
  bold: {
    fontWeight: 600,
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
  mainAvatarIcon: {
    margin: "auto",
    width: "100%",
    height: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
  },
});
const UserProfile = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const { userDataInContext } = useContext(DataContext);
  const data = location?.state?.userData;
  const userName = data?.name;
  const userEmail = data?.email;
  const userProfilePicture = data?.profilepicture;
  const companyData = data?.company;
  const address = data?.address;
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
      if (user.name !== userName) {
        otherUsers.push(user);
        countOfUsersFetched++;
      }
      if (countOfUsersFetched === 2) break;
    }
    return otherUsers;
  };

  const twoOtherUsers = getTwoOtherUsers();
  console.log({ data, userDataInContext, twoOtherUsers });
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.header}>
          <Typography
            variant="h6"
            className={clsx(classes.bold, classes.infoColor)}
          >
            Profile
          </Typography>
          <div>
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar
                alt={userName}
                src={userProfilePicture}
                className={classes.menuIcon}
              />
              <Typography variant="h6" className={classes.infoColor}>
                {userName}
              </Typography>
            </IconButton>
          </div>
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
                alt={userName}
                src={userProfilePicture}
                className={classes.menuAvatar}
              />
              <Typography variant="h6" className={classes.infoColor}>
                {userName}
              </Typography>
              <Typography variant="subtitle1" className={classes.textColor}>
                {userEmail}
              </Typography>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <UserNameAndAvatar path="/user" userData={twoOtherUsers[0]} />
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <UserNameAndAvatar path="/user" userData={twoOtherUsers[1]} />
              </MenuItem>
              <Button variant="contained" className={classes.signOutButton}>
                Sign out
              </Button>
            </div>
          </Menu>
        </Grid>
        <Grid item xs={5}>
          <Avatar
            alt={userName}
            src={userProfilePicture}
            className={classes.mainAvatarIcon}
          />
          <Typography
            variant="h6"
            className={clsx(classes.centerAlign, classes.bold)}
          >
            {userName}
          </Typography>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                Username :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" className={clsx(classes.infoColor)}>
                {data.username}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                e-mail :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" className={clsx(classes.infoColor)}>
                {userEmail}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                Phone :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" className={clsx(classes.infoColor)}>
                {data.phone}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                Website :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6" className={clsx(classes.infoColor)}>
                {data.website}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Typography
            variant="h6"
            className={clsx(classes.centerAlign, classes.bold)}
          >
            Company
          </Typography>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                Name :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              {companyData.name}
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                catchphrase :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              {companyData.catchPhrase}
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6" className={clsx(classes.textColor)}>
                bs :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              {companyData.bs}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="p">Address:</Typography>
          <Typography variant="p">Street : {address.street}</Typography>
          <Typography variant="p">Suite : {address.suite}</Typography>
          <Typography variant="p">City : {address.city}</Typography>
          <Typography variant="p">Zipcode : {address.zipcode}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

UserProfile.propTypes = {};

export default UserProfile;
