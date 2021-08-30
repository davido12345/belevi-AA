import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
const DefaultSwitchMui = withStyles((theme) => ({
  root: {
    width: 53,
    height: 29,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    top: "50%",
    left: "50%",

    transform: "translate(-50%,-50%)",
    "&$checked": {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "#29BDAD",
      width: 40,
      height: 16,
      opacity: 1,
      borderRadius: 15,
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#ffffff",
        opacity: 1,
      },
      "&:hover": {
        backgroundColor: "#29BDAD",
      },
    },
    "&$focusVisible $thumb": {
      border: "6px solid #fff",
    },
  },
  thumb: {
    background: "#29BDAD",
    opacity: 0.25,
    width: 14,
    height: 14,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#ffffff",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  trackTrans: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: props.trackTrans ? classes.trackTrans : classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function DefaultSwitch(props) {
  return <DefaultSwitchMui {...props} />;
}
