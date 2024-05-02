import PropTypes from "prop-types";
import "./Menu.css"

export const Menu = () => {
  return (
    <div className="relative inline-block text-left">
      <ul className="flex items-center">
        <li>
          <a href="#click" className="menu">
            <h2 className="menu-title">animals</h2>
            <ul className="menu-dropdown">
              <li>cat</li>
              <li>dog</li>
              <li>horse</li>
              <li>cow</li>
              <li>pig</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#click" className="menu">
            <h2 className="menu-title menu-title_2nd">names</h2>
            <ul className="menu-dropdown">
              <li>Kevin</li>
              <li>Jim</li>
              <li>Andy</li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#click" className="menu">
            <h2 className="menu-title menu-title_3rd">things</h2>
            <ul className="menu-dropdown">
              <li>bench</li>
              <li>pizza</li>
              <li>Honda CB125</li>
              <li>space</li>
              <li>black matter</li>
              <li>apple</li>
              <li>philodendron</li>
              <li>liver</li>
              <li>brass</li>
            </ul>
          </a>
        </li>
      
      </ul>
    </div>
  );
};

Menu.prototype = {
  title: PropTypes.string,
  items: PropTypes.string,
};
