
import React, { useState } from 'react';
import {FaHeart, FaHome, FaPhone, FaWhatsapp} from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import data from '../Product.json'; // ایمپورت کردن داده‌ها
import './style/Product.css';
import {FaRegHeart} from "react-icons/fa6";


const ProductComponent = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % data.images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + data.images.length) % data.images.length);
    };

    return (

        <div className="product-container">
            <div className="details">
                <div className="image-container">
                    <AiOutlineLeft onClick={handlePrev}/>
                    <img id='imgProduct' src={data.images[currentImage]} alt="Product Image"/>
                    <AiOutlineRight onClick={handleNext}/>
                </div>
                <FaRegHeart size="2rem" color="#7065f0"/>
                <p>قیمت: {data.price}</p>
                <p>آدرس: {data.address}</p>
                <p>نوعیت: {data.type}</p>
                <p>توضیحات:</p>
                <ul>
                    <li>متراژ: {data.details.area}</li>
                    <li>تعداد اتاق: {data.details.rooms}</li>
                    <li>تعداد حمام: {data.details.bathrooms}</li>
                    <li>تعداد دستشویی: {data.details.toilets}</li>
                </ul>
                <div className="contact-links">
                    <h1>ارتباط با بنگاه</h1>
                    <a href="tel:09352333881" target="_blank" rel="noopener noreferrer">
                        <FaPhone id='iconProduct' size='40px' color="#7065f0"/>
                    </a>
                    <a href="https://wa.me/09352333881" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp id='iconProduct' color="#7065f0" size='40px'/>
                    </a>
                </div>
            </div>

            {/*2*/}
            <div className="details">
                <div className="image-container">
                    <AiOutlineLeft onClick={handlePrev}/>
                    <img id='imgProduct' src={data.images[currentImage]} alt="Product Image"/>
                    <AiOutlineRight onClick={handleNext}/>
                </div>
                <FaRegHeart size="2rem" color="#7065f0"/>
                <p>قیمت: {data.price}</p>
                <p>آدرس: {data.address}</p>
                <p>نوعیت: {data.type}</p>
                <p>توضیحات:</p>
                <ul>
                    <li>متراژ: {data.details.area}</li>
                    <li>تعداد اتاق: {data.details.rooms}</li>
                    <li>تعداد حمام: {data.details.bathrooms}</li>
                    <li>تعداد دستشویی: {data.details.toilets}</li>
                </ul>
                <div className="contact-links">
                    <h1>ارتباط با بنگاه</h1>
                    <a href="tel:09352333881" target="_blank" rel="noopener noreferrer">
                        <FaPhone id='iconProduct' size='40px' color="#7065f0"/>
                    </a>
                    <a href="https://wa.me/09352333881" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp id='iconProduct' color="#7065f0" size='40px'/>
                    </a>
                </div>
            </div>

            {/*3*/}

            <div className="details">
                <div className="image-container">
                    <AiOutlineLeft onClick={handlePrev}/>
                    <img id='imgProduct' src={data.images[currentImage]} alt="Product Image"/>
                    <AiOutlineRight onClick={handleNext}/>
                </div>
                <FaRegHeart size="2rem" color="#7065f0"/>
                <p>قیمت: {data.price}</p>
                <p>آدرس: {data.address}</p>
                <p>نوعیت: {data.type}</p>
                <p>توضیحات:</p>
                <ul>
                    <li>متراژ: {data.details.area}</li>
                    <li>تعداد اتاق: {data.details.rooms}</li>
                    <li>تعداد حمام: {data.details.bathrooms}</li>
                    <li>تعداد دستشویی: {data.details.toilets}</li>
                </ul>
                <div className="contact-links">
                    <h1>ارتباط با بنگاه</h1>
                    <a href="tel:09352333881" target="_blank" rel="noopener noreferrer">
                        <FaPhone id='iconProduct' size='40px' color="#7065f0"/>
                    </a>
                    <a href="https://wa.me/09352333881" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp id='iconProduct' color="#7065f0" size='40px'/>
                    </a>
                </div>
            </div>


            {/*4*/}


            <div className="details">
                <div className="image-container">
                    <AiOutlineLeft onClick={handlePrev}/>
                    <img id='imgProduct' src={data.images[currentImage]} alt="Product Image"/>
                    <AiOutlineRight onClick={handleNext}/>
                </div>
                <FaRegHeart size="2rem" color="#7065f0"/>
                <p>قیمت: {data.price}</p>
                <p>آدرس: {data.address}</p>
                <p>نوعیت: {data.type}</p>
                <p>توضیحات:</p>
                <ul>
                    <li>متراژ: {data.details.area}</li>
                    <li>تعداد اتاق: {data.details.rooms}</li>
                    <li>تعداد حمام: {data.details.bathrooms}</li>
                    <li>تعداد دستشویی: {data.details.toilets}</li>
                </ul>
                <div className="contact-links">
                    <h1>ارتباط با بنگاه</h1>
                    <a href="tel:09352333881" target="_blank" rel="noopener noreferrer">
                        <FaPhone id='iconProduct' size='40px' color="#7065f0"/>
                    </a>
                    <a href="https://wa.me/09352333881" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp id='iconProduct' color="#7065f0" size='40px'/>
                    </a>
                </div>
            </div>


        </div>
    );
};

export default ProductComponent;