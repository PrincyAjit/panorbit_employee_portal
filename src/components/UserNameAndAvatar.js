import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userEntry: {
    color: "inherit",
    textDecoration: "none",
    textTransform: "capitalize",
    cursor: "pointer",
  },
  onlineIcon: {
    color: "green",
  },
});
const UserNameAndAvatar = (props) => {
  const componentType = {
    button: Button,
    link: Link,
  };
  const { path, userData, componentAs, onButtonClick, showOnlineStatus } =
    props;
  const compAsButton = componentAs === "button";
  const classes = useStyles();
  return (
    <ListItem
      key={userData.id}
      component={componentAs ? componentType[componentAs] : null}
      onClick={() => {
        compAsButton && onButtonClick(userData);
      }}
      to={path} // valid for link component.
      state={{ userData }} // valid for link component.
      className={classes.userEntry}
    >
      <ListItemAvatar>
        <Avatar alt={userData.name} src={userData.profilepicture} />
      </ListItemAvatar>
      <ListItemText primary={userData.name} />
      {showOnlineStatus && (
        <FiberManualRecordIcon
          className={classes.onlineIcon}
          fontSize="small"
        />
      )}
    </ListItem>
  );
};

UserNameAndAvatar.propTypes = {
  path: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

export default UserNameAndAvatar;
