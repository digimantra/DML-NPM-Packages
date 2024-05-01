import PropTypes from "prop-types";


export const Menu= () => {

  return (
    <div className="relative inline-block text-left">
      menu
    </div>
  );
};


Menu.prototype={
  title:PropTypes.string,
  items:PropTypes.string,
}
