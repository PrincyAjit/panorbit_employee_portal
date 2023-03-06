import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userEntry: {
    color: "black",
    textDecoration: "none",
  },
});
const UserNameAndAvatar = (props) => {
  const { path, userData } = props;
  const classes = useStyles();
  return (
    <ListItem
      key={userData.id}
      component={Link}
      to={path}
      state={{ userData }}
      className={classes.userEntry}
    >
      <ListItemAvatar>
        <Avatar alt={userData.name} src={userData.profilepicture} />
      </ListItemAvatar>
      <ListItemText primary={userData.name} />
    </ListItem>
  );
};

UserNameAndAvatar.propTypes = {
  path: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

export default UserNameAndAvatar;
