import React, {useState} from "react";
import PropTypes from "prop-types";
import {LuMenu} from "react-icons/lu";
import {IoIosArrowDown, IoIosClose} from "react-icons/io";
import "./style/Menu.css";
import "./style/responsive/Responsiv-menu.css";
import "./style/responsive/Responsive.css";
import {Link} from 'react-router-dom';

const MenuItem = ({label, subItems, isOpen, onClick}) => {
    return (
        <li>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {label}
                <IoIosArrowDown className={`icon-arrow ${isOpen ? 'rotate' : ''}`}/>
            </a>
            {isOpen && (
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
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

const Menu = () => {
    const [openItem, setOpenItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuItemClick = (label) => {
        setOpenItem(openItem === label ? null : label);
    };

    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                <ol className={`menu-item ${isMobileMenuOpen ? 'open' : ''}`}>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            label={item.label}
                            subItems={item.subItems}
                            isOpen={openItem === item.label}
                            onClick={() => handleMenuItemClick(item.label)}
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
                <div className="iconmenu" onClick={handleMobileMenuClick}>
                    {isMobileMenuOpen ? (
                        <IoIosClose size="40px" color="#7065f0"/>
                    ) : (
                        <LuMenu size="40px" color="#7065f0"/>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Menu;