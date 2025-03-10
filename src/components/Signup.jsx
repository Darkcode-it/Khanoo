import React, { useState } from "react";
import './style/Signup.css'; // فایل CSS برای استایل‌ها

const Signup = () => {
    // State برای مدیریت مقادیر فرم
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [password, setPassword] = useState("");
    const [robotTest, setRobotTest] = useState("");
    const [errors, setErrors] = useState({}); // State برای مدیریت خطاها

    // تابع اعتبارسنجی فرم
    const validateForm = () => {
        const errors = {};

        if (!email) errors.email = "ایمیل الزامی است.";
        if (!phone) errors.phone = "شماره تماس الزامی است.";
        if (!firstName) errors.firstName = "نام الزامی است.";
        if (!lastName) errors.lastName = "نام خانوادگی الزامی است.";
        if (!nationalCode) errors.nationalCode = "کد ملی الزامی است.";
        if (!password) errors.password = "رمز عبور الزامی است.";
        if (robotTest !== "5") errors.robotTest = "پاسخ تست ربات نادرست است.";

        setErrors(errors);
        return Object.keys(errors).length === 0; // اگر خطایی نبود، فرم معتبر است
    };

    // تابع برای مدیریت ارسال فرم
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("National Code:", nationalCode);
            console.log("Password:", password);
            console.log("Robot Test:", robotTest);
            // در اینجا می‌توانید منطق ارسال فرم به سرور را اضافه کنید
        } else {
            console.log("فرم دارای خطا است.");
        }
    };

    return (
        <div className="AllDiv">
            <div className="text">
                <h1 className="title">ثبت نام در سایت</h1>
                <p className="subtitle">لطفا اطلاعات خود را وارد کنید.</p>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <input
                            placeholder='ایمیل'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='شماره تماس'
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='نام'
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='نام خانوادگی'
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='کد ملی'
                            type="number"
                            value={nationalCode}
                            onChange={(e) => setNationalCode(e.target.value)}
                            required
                        />
                        {errors.nationalCode && <span className="error">{errors.nationalCode}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='رمز عبور'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='تست ربات: ۲ + ۳ = ؟'
                            type="number"
                            value={robotTest}
                            onChange={(e) => setRobotTest(e.target.value)}
                            required
                        />
                        {errors.robotTest && <span className="error">{errors.robotTest}</span>}
                    </div>
                    <button type="submit" className="submit-btn">
                        ثبت نام
                    </button>
                </form>
            </div>
            <img
                src="./public/img/map3.jpg" // مسیر تصویر خود را وارد کنید
                alt="Signup Image"
                className="img3"
            />
        </div>
    );
};

export default Signup;