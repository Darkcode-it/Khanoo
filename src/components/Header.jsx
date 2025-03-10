import React from "react";
import PropTypes from "prop-types";
import data from "../Data.json";

const Header = () => {
    return (
        <div id="header-container">
            <h1>{data.TitleHeader}</h1>
            <p id="header-p">{data.SubTitleHeader}</p>
            <span className="numbers-con" id="numbers-con-desk">
        <div className="img-num-container">
          <div>
            <p className="">8k</p>
            <p className="">{data.company}</p>
          </div>
        </div>
        <div className="img-num-container">
          <div>
            <p>10k+</p>
            <p> {data.visit}</p>
          </div>
        </div>
      </span>
            <div id="rent-list">
                <p>اجاره</p>
                <p>خرید </p>
                <p>فروش</p>
            </div>
        </div>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        TitleHeader: PropTypes.string.isRequired,
        SubTitleHeader: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        visit: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;