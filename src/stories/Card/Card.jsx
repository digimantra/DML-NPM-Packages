import PropTypes from "prop-types";

export const Card = ({ children, px, py, height, width }) => {
  return (
    <div
      className={`shadow-md bg-white`}
      style={{
        boxShadow: "0 0 4px 2px rgba(229, 199, 199, 0.3)",
        padding: `${py} ${px}`,
        height: `${height}`,
        width: `${width}`,
      }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  px: PropTypes.string,
  py: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  children: "This is card",
  px: "32px",
  py: "16px",
  height: "",
  width: "",
};
