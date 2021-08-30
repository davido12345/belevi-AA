import React from "react";
import footerSend from "../assets/images/our-mission/footer-send.png";
import rect from "../assets/images/our-mission/rect.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DefaultSwitch from "./Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight:48,
    width:'100%',
    '& label.Mui-focused': {
      color: '#F9F9F9',
    },
    '& label':{
      color: '#F9F9F9',
    },
    '& .MuiInputBase-input': {
      color: '#fff', 
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff8',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    
  },
  
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className="footer-main text-white position-relative ">
      <div className="d-flex align-items-center justify-content-center h-100 w-100 ">
        <div className="footer-inner">
          <div className="d-flex align-items-center justify-content-between">
            <p className="section-heading text-white ">
              Suscríbete a <br />
              nuestro boletín
            </p>
            <img src={footerSend} className="h-auto" />
          </div>
          <div className="w-100">
          <TextField className={classes.root} id="subscribe-input-footer" label="Email address" />
          <div className="d-flex align-items-center " style={{marginLeft:-10}}><DefaultSwitch trackTrans /> <span>Accept privacy policy</span></div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap  position-absolute bottom-0 end-0 py-5 px-5 w-100">
        <div
          className="d-flex justify-content-between align-items-center mb-4"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <p className=" my-0 me-3 text-white font-18">hello@belevi.cl</p>
          <p className=" my-0 me-3 text-white font-18">+0000000000</p>
        </div>
        <div className="d-flex flex-wrap">
          <img src={rect} style={{ width: 50 }} className="me-3" />
          <img src={rect} style={{ width: 50 }} />
        </div>
      </div>
    </footer>
  );
}
