import React from "react";
import contactProduct from "../assets/images/contact/contact-product.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DefaultSwitch from "../Components/Switch";
import FormGroup from "@material-ui/core/FormGroup";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: `0.5rem 0px`,
    },
    "& .MuiInputBase-input": {
      padding: "6px 0 18px",
      fontSize: 18,
    },
    "& .MuiFormLabel-root": {
      fontSize: 18,
    },
  },
}));

export default function CoursePage() {
  const [name, setName] = React.useState("Hermosa Soft");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className="bg-light" style={{ overflow: "hidden" }}>
      <div className="container-xl">
        <div className="container-fluid">
          <div className="contact-sec-1 py-7">
            <h1 className="font-42 font-weight-300 mb-3">
              Hermosa Soft 0x Order Inquiry
            </h1>
            <div className="row gx-3 flex-md-row-reverse flex-row">
            <div className="col-12 col-md-5 text-center">
                <img src={contactProduct} alt="product image" className="img-fluid-2" />
              </div>
              <div className="col-12 col-md-7">
                <form className={classes.root}>
                  <FormGroup>
                    <TextField fullWidth label="Full Name" />
                    <TextField fullWidth label="Email" />
                    <TextField fullWidth label="Phone Number" />
                    <TextField
                      fullWidth
                      label="Product"
                      value={name}
                      onChange={handleChange}
                    />
                    <TextField fullWidth label="Add another product" />
                    <TextField fullWidth multiline rows={6} label="Comments" />
                    <div className="d-flex justify-content-between align-items-center  my-3">
                      <FormControlLabel
                 
                        control={<DefaultSwitch />}
                        label="Accept privacy policy "
                      />
                      {/* <DefaultSwitch /> */}
                      <a className="btn-custom rounded-pill">Submit</a>
                    </div>
                  </FormGroup>
                </form>
              </div>
             
            </div>
            <div className="my-5">
              <p className="font-20 font-weight-300 ">
                Tired of fill forms,
                <br /> Give us a ring:{" "}
                <span className=" color-dark font-weight-400">0000000000</span>
              </p>
            </div>
            <div className="py-7">
              <h2 className="font-42 text-center">
                Want to ask the questions directly,
                <br />
                <span className="border-bottom-dark">Get in touch.</span>
              </h2>
            </div>
            <p className="font-24 text-center"> myemailbeleviemail@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
