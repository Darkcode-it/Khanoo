
import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import "./style/Menu.css";
import "./style/responsive/Responsiv-menu.css";
import "./style/responsive/Responsive.css";
import { Link } from 'react-router-dom';

const MenuItem = ({ label, subItems, onMouseEnter, onMouseLeave, isHovered }) => {
    return (
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a href="index.html">
                {label}
                <IoIosArrowDown className="icon-arrow" />
            </a>
            {isHovered && (
                <ul className="sub-menu">
                    {subItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </li>
    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    isHovered: PropTypes.bool.isRequired,
};

const Menu = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleMouseEnter = useCallback((item) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setHoveredItem(item);
    }, [timeoutId]);

    const handleMouseLeave = useCallback(() => {
        const id = setTimeout(() => {
            setHoveredItem(null);
        }, 300);
        setTimeoutId(id);
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    const menuItems = [
        {
            label: "ساختمان",
            subItems: ["تکمه", "نیمه شناژ", "شناژ قایم اهن ICF"],
        },
        {
            label: "زمین مسکونی",
            subItems: ["محدوده شهری", "غیره شهری"],
        },
        {
            label: "کشاوزی",
            subItems: ["باغ", "دیمه", "بارانی"],
        },
    ];

    return (
        <div className="container">
            <nav className="menu" id="nav">
                <h1 id="logo">خانوو</h1>
                <ol className="menu-item">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            label={item.label}
                            subItems={item.subItems}
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                            isHovered={hoveredItem === item.label}
                        />
                    ))}
                </ol>
                <div className="btns">
                    <button className="btn1" type="button">
                        ورود
                    </button>
                    <button className="btn1b" type="button ">
                    <Link to="/ogin">ثبت نام</Link>
                 
                    </button>
                </div>
                <LuMenu size="40px" color="#7065f0" className="iconmenu" />
            </nav>
        </div>
    );
};

export default Menu;
