import "./style/Articles.css"; // وارد کردن فایل CSS برای استایل‌های مقالات
import "./style/responsive/ResponsiveArticle.css"; // وارد کردن فایل CSS برای واکنش‌گرایی مقالات
import {FaRegHeart} from "react-icons/fa6"; // وارد کردن آیکون قلب از کتابخانه react-icons
import {MdOutlineBedroomParent} from "react-icons/md"; // وارد کردن آیکون اتاق خواب از کتابخانه react-icons
import {LiaExternalLinkSquareAltSolid} from "react-icons/lia"; // وارد کردن آیکون لینک خارجی از کتابخانه react-icons
import {MdOutlineBathroom} from "react-icons/md"; // وارد کردن آیکون حمام از کتابخانه react-icons
import data from "../DatArticle.json"; // وارد کردن داده‌ها از فایل JSON

export default function Articles() {
    return (
        <div>
            <div className="first">
                <div className="article-s">
                    {/* نمایش پویای مقالات */}
                    {data.map((article) => (
                        <div className="article" key={article.id}>
                            <img className="img-article" src={article.image} alt="تصویر خانه"/>
                            <div className="icon-plice">
                                <h1 className="price">{article.price}</h1>
                                <FaRegHeart size="2rem" color="#7065f0"/>
                            </div>
                            <h1 className="title-price">{article.title}</h1>
                            <p className="subtitle-price">{article.address}</p>
                            <div className="Facilities">
                                <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0"/>
                                <h1 className="Beds">{article.beds} خواب</h1>
                                <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0"/>
                                <h1 className="Beds">{article.baths} حمام</h1>
                                <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0"/>
                                <h1 className="Beds">{article.size}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}