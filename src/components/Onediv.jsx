import React from 'react';
import "./style/Onediv.css";
import "./style/responsive/ResponsiveOnediv.css";
import data from '../Onediv.json'; // وارد کردن فایل JSON

function Onediv() {
    return (
        <div className="AllDiv">
            <div className="text">
                <h1 className="title">{data.title}</h1>
                <h4 className="subtitle">{data.subtitle}</h4>
                <div className="stats">
                    {data.stats.map((stat, index) => (
                        <div className="stat" key={index}>
                            <img className="stat-icon" src={stat.icon} alt=""/>
                            <h6 className="stat-value">{stat.value}</h6>
                            <h5 className="stat-value">{stat.label}</h5>
                        </div>
                    ))}
                </div>
            </div>
            <img className="img3" src={data.image} alt=""/>
        </div>
    );
}

export default Onediv;