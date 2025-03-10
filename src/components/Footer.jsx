import "./style/Footer.css";
import "./style/responsive/ResponsiveFooter.css";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div>
                <h1 id="logoEnd">خانوو</h1>
            </div>
            <div className="allDivFooter">
                <div>
                    <ul>
                        <li><a href="#">فروش خانه</a></li>
                        <li><a href="#">درخواست پیشنهاد</a></li>
                        <li><a href="#">قیمت‌گذاری</a></li>
                        <li><a href="#">نظرات</a></li>
                        <li><a href="#">داستان‌ها</a></li>
                        <li><a href="#">خرید خانه</a></li>
                        <li><a href="#">خرید</a></li>
                        <li><a href="#">مالی</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">خرید، اجاره و فروش</a></li>
                        <li><a href="#">خرید و فروش املاک</a></li>
                        <li><a href="#">اجاره خانه</a></li>
                        <li><a href="#">معامله سازنده</a></li>
                        <li><a href="#">قوانین و حریم خصوصی</a></li>
                        <li><a href="#">اعتماد و امنیت</a></li>
                        <li><a href="#">شرایط استفاده</a></li>
                        <li><a href="#">سیاست حریم خصوصی</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">شرکت</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">سرمایه‌گذاران</a></li>
                        <li><a href="#">منابع</a></li>
                        <li><a href="#">وبلاگ</a></li>
                        <li><a href="#">راهنماها</a></li>
                        <li><a href="#">سوالات متداول</a></li>
                        <li><a href="#">مرکز کمک</a></li>
                    </ul>
                </div>
            </div>
            <div className="endtext">
                ©۲۰۲۱ استاتری. تمام حقوق محفوظ است.
                <div className="endicon">
                    <a href="https://www.facebook.com/DarkCodeit" target="_blank" rel="noopener noreferrer">
                        <CiFacebook size="30px" color="#7065f0" />
                    </a>
                    <a href="https://github.com/Darkcode-it" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="30px" color="#7065f0" />
                    </a>
                    <a href="https://t.me/darkcodeit" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size="30px" color="#7065f0" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;