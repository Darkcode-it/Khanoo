import React, { useState } from "react";
import  './style/Login.css'

const Login = () => {
    // State برای مدیریت مقادیر فرم
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // تابع برای مدیریت ارسال فرم
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Name:", name);
        // در اینجا می‌توانید منطق ارسال فرم به سرور را اضافه کنید
    };

    return (
        <div className="AllDiv">
            <div className="text">
                <h1 className="title">ورود به حساب کاربری</h1>
                <p className="subtitle">لطفا اطلاعات خود را وارد کنید.</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input
                            placeholder='ایمیل'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input
                            placeholder='رمز عبور:'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input
                            placeholder='نام'
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <a href="#" className="forgot-password">
                        رمز عبور را فراموش کرده‌اید؟
                    </a>
                    <button type="submit" className="submit-btn">
                        ارسال
                    </button>
                </form>
            </div>
            <img
                src="./public/img/map3.jpg" // مسیر تصویر خود را وارد کنید
                alt="Login Image"
                className="img3"
            />
        </div>
    );
};

export default Login;