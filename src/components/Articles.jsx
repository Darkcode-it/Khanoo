import "./style/Articles.css"; // وارد کردن فایل CSS برای استایل‌های مقالات
import "./style/responsive/ResponsiveArticle.css"; // وارد کردن فایل CSS برای واکنش‌گرایی مقالات
import { FaRegHeart } from "react-icons/fa6"; // وارد کردن آیکون قلب از کتابخانه react-icons
import { MdOutlineBedroomParent } from "react-icons/md"; // وارد کردن آیکون اتاق خواب از کتابخانه react-icons
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia"; // وارد کردن آیکون لینک خارجی از کتابخانه react-icons
import { MdOutlineBathroom } from "react-icons/md"; // وارد کردن آیکون حمام از کتابخانه react-icons

export default function Articles() {
    return (
        <div>
            <div className="first">
                <div className="article-s">
                    {/* مقاله اول */}
                    <div className="article">
                        <img className="img-article" src="./img/h4.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله دوم */}
                    <div className="article">
                        <img className="img-article" src="./img/h6.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله سوم */}
                    <div className="article">
                        <img className="img-article" src="./img/h6.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله چهارم */}
                    <div className="article">
                        <img className="img-article" src="./img/h7.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله پنجم */}
                    <div className="article">
                        <img className="img-article" src="./img/h8.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله ششم */}
                    <div className="article">
                        <img className="img-article" src="./img/h8.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله هفتم */}
                    <div className="article">
                        <img className="img-article" src="./img/h8.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">6x8 متر مربع</h1>
                        </div>
                    </div>

                    {/* مقاله هشتم */}
                    <div className="article">
                        <img className="img-article" src="./img/h9.svg" alt="تصویر خانه" />
                        <div className="icon-plice">
                            <h1 className="price">$2,095/ماه</h1>
                            <FaRegHeart size="2rem" color="#7065f0" />
                        </div>
                        <h1 className="title-price">Cove Red</h1>
                        <p className="subtitle-price">خیابان Curlew 243، Palm Harbor، تگزاس</p>
                        <div className="Facilities">
                            <MdOutlineBedroomParent className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">4 تخت</h1>
                            <MdOutlineBathroom className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds">2 حمام</h1>
                            <LiaExternalLinkSquareAltSolid className="icon-hover" size="5rem" color="#7065f0" />
                            <h1 className="Beds" >6x8 متر مربع</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}