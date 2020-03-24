import React from "react";
import PropTypes from "prop-types";

const styles = {
  root: {
    fontFamily:
      '"Raleway", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 700,
    color:"#808080",
  },
  header: {
    backgroundColor: "#ffffff",
    color: "#808080",
    padding: "10px 16px",
    fontSize: "1.5em",
    "text-align": "center"
  }
};

const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle} className="main-header">
      <div style={styles.header} className="main-header-2">{props.title}</div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
};

export default MaterialTitlePanel;