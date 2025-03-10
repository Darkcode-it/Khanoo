import React, {useEffect, useRef} from 'react';
import "./style/Twodiv.css";
import "./style/responsive/ResponsiveTwodiv.css";
import data from "../Data.json";

export default function Twodiv() {
    const {TitleTwodiv, paragraphSecond, textSecond, CompanyIcon} = data;
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // اضافه کردن کلاس visible
                    } else {
                        entry.target.classList.remove('visible'); // حذف کلاس visible
                    }
                });
            },
            {
                threshold: 0.5, // وقتی 50% از عنصر در viewport قرار گرفت
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="second" ref={sectionRef}>
            <h1 className="titleSecond">{TitleTwodiv}</h1>
            <p className="paragraphSecond">{paragraphSecond}</p>
            <h2 className="textSecond">{textSecond}</h2>
            <p id='active'>{CompanyIcon}</p>
            <img className="img-user" src="./img/p.svg" alt="User" loading="lazy"/>
        </div>
    );
}