import React from "react";

import "./Button.scss";

const Button = props => {
  const buttonClass = "btn" + (props.disabled ? " disabled" : "");
  const bgColor = props.bgColor || "#D7362A";
  const bgColorDisabled = props.bgColorDisabled || "#ccc";
  const buttonStyles = {
    backgroundColor: props.disabled ? bgColorDisabled : bgColor,
    width: props.width || "auto",
    height: props.height || "40px",
    marginTop: props.marginTop || "10px",
    marginBottom: props.marginBottom || "10px",
    marginLeft: props.marginLeft || "40px",
    marginRight: props.marginRight || "40px",
    paddingTop: props.paddingTop || "0px",
    paddingBottom: props.paddingBottom || "0px",
    paddingLeft: props.paddingLeft || "40px",
    paddingRight: props.paddingRight || "40px",
    display: props.display || "flex",
    border: "none",
    cursor: "pointer",
    borderRadius: props.borderRadius || "5px",
    fontSize: props.fontSize || "1.5em",
    fontFamily: props.fontFamily || "Arial"
  };
  const defaultFunc = () => {
    return;
  };
  return (
    <>
      <section className="buttonContainer">
        <button
          type={props.type || "button"}
          className={buttonClass}
          style={buttonStyles}
          onClick={
            !props.isLoading && typeof props.onClick === "function"
              ? props.onClick
              : defaultFunc
          }
        >
          {props.isLoading ? <div className="loading-box"></div> : props.title}
        </button>
      </section>
    </>
  );
};

export default Button;
