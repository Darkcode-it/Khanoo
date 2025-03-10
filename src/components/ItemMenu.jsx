import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const ItemMenu = () => {
    // داده‌های مقالات (می‌توانید از API یا JSON هم استفاده کنید)
    const articles = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        image: "./img/h6.svg", // مسیر تصویر
        price: `$${2000 + index * 100}/ماه`, // قیمت
        title: `Cove Red ${index + 1}`, // عنوان
        address: `خیابان Curlew 243، Palm Harbor، تگزاس`, // آدرس
        beds: 4, // تعداد تخت‌ها
        baths: 2, // تعداد حمام‌ها
        size: "6x8 متر مربع", // اندازه
    }));

    return (
        <div className="article-container">
            {articles.map((article) => (
                <div className="article" key={article.id}>
                    <img className="img-article" src={article.image} alt="تصویر خانه" />
                    <div className="icon-plice">
                        <h1 className="price">{article.price}</h1>
                        <FaRegHeart size="2rem" color="#7065f0" />
                    </div>
                    <h1 className="title-price">{article.title}</h1>
                    <p className="subtitle-price">{article.address}</p>
                    <div className="Facilities">
                        <MdOutlineBedroomParent className="icon-hover" size="1.5rem" color="#7065f0" />
                        <h1 className="Beds">{article.beds} تخت</h1>
                        <MdOutlineBathroom className="icon-hover" size="1.5rem" color="#7065f0" />
                        <h1 className="Beds">{article.baths} حمام</h1>
                        <div className="icon-wrapper">
                            <LiaExternalLinkSquareAltSolid className="icon-hover external-icon" size="1.5rem" color="#7065f0" />
                        </div>
                        <h1 className="Beds">{article.size}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemMenu;