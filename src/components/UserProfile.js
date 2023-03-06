import React from "react";
import { Grid, Avatar, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, Navigate } from "react-router-dom";
import clsx from "clsx";
import GoogleMap from "./GoogleMap";

const useStyles = makeStyles({
  container: {
    padding: "1em 3em",
    flexGrow: 1,
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
  mainAvatarIcon: {
    margin: "auto",
    width: "100%",
    height: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
  },
  nameBelowMainAvatar: {
    paddingBottom: "0.6em",
    fontWeight: 600,
    color: "#5a5a5a", // blackish
    textAlign: "center",
  },
  gridCell: {
    paddingBottom: "0.8em !important",
  },
  keyDiv: {
    color: "#9a9a9a", // greyish
    textAlign: "right",
    wordWrap: "break-word",
  },
  valueDiv: {
    color: "#5a5a5a", // blackish
    textAlign: "left",
    fontWeight: 600,
    wordWrap: "break-word",
  },
  horizontalDivider: {
    marginBottom: "1em",
  },
  verticalDivider: {
    marginLeft: "4em",
  },
  addressTitle: {
    paddingLeft: "2em",
    paddingBottom: "0.5em",
  },
});
const UserProfile = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = location?.state?.userData;
  const fullName = data?.name;
  const email = data?.email;
  const profilePictureURL = data?.profilepicture;
  const companyData = data?.company;
  const addressData = data?.address;
  const personalDetails = {
    Username: data?.username,
    "E-mail": email,
    Phone: data?.phone,
    Website: data?.website,
  };
  const companyDetails = {
    Name: companyData?.name,
    catchphrase: companyData?.catchPhrase,
    bs: companyData?.bs,
  };
  const addressDetails = {
    Street: addressData?.street,
    Suite: addressData?.suite,
    City: addressData?.city,
    Zipcode: addressData?.zipcode,
  };
  const personalDetailsKeys = Object.keys(personalDetails);
  const companyDetailsKeys = Object.keys(companyDetails);
  const addressDetailsKeys = Object.keys(addressDetails);

  if (!data) {
    return <Navigate to="/home" replace />;
  }
  return (
    <Grid container className={classes.container}>
      <Grid item xs={5}>
        <Avatar
          alt={fullName}
          src={profilePictureURL}
          className={classes.mainAvatarIcon}
        />
        <Typography variant="h6" className={classes.nameBelowMainAvatar}>
          {fullName}
        </Typography>
        {personalDetailsKeys.map((entry) => (
          <Grid item container spacing={1} className={classes.gridCell}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.keyDiv}>
                {entry}:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" className={classes.valueDiv}>
                {personalDetails[entry]}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Divider className={classes.horizontalDivider} />
        <Typography
          variant="h6"
          className={clsx(classes.centerAlign, classes.textColor)}
        >
          Company
        </Typography>
        {companyDetailsKeys.map((entry) => (
          <Grid item container spacing={1} className={classes.gridCell}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.keyDiv}>
                {entry}:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" className={classes.valueDiv}>
                {companyDetails[entry]}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Divider
        orientation="vertical"
        flexItem
        className={classes.verticalDivider}
      />
      <Grid item xs={6}>
        <Typography
          variant="h6"
          className={clsx(classes.textColor, classes.addressTitle)}
        >
          Address:
        </Typography>
        {addressDetailsKeys.map((entry) => (
          <Grid item container spacing={1} className={classes.gridCell}>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.keyDiv}>
                {entry}:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" className={classes.valueDiv}>
                {addressDetails[entry]}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <GoogleMap lat={addressData?.geo?.lat} long={addressData?.geo?.lng} />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
