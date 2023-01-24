import React from "react";
import { connect, useSelector } from "react-redux";
import style from "./Nav.module.css";
import { Typography, Button } from "@material-ui/core";

const NavBar = (props) => {
  const selectedValue = useSelector((state) => state.selectedValue);
  const handleClickOpen = () => {};
  const handleClose = () => {};

  return (
    <div className={style.navbar}>
      <div>
        <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&fm=webp&w=384" />
      </div>
      <div>
        {/* <button
          onClick={() => {
            window.location.href = "https://www.google.com/";
          }}
        >
          Log in
        </button> */}
        <Typography variant="subtitle1" component="div">
          Selected: {selectedValue}
        </Typography>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};
export default NavBar;

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
