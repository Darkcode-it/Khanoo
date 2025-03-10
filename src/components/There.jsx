// import "./style/There.css";
// import "./style/responsive/ResponsiveThere.css";
//
// function There() {
//     return (
//         <div className="third-wrapper">
//             <div className="third">
//                 <div className="content">
//                     <h1 className="titleSearch">قبل خرید</h1>
//                     <h2 className="textSearch">بیا داراییت رو محاسبه کنیم</h2>
//                     <p className="paragraph">
//                         پولی که داری رو داخل کادر بنویس و خانه ای که میشه رو خرید رو ببین
//                     </p>
//                     <div className="SearchVsButton">
//                         <input
//                             id="inputcalculate"
//                             className="input1"
//                             type="number"
//                             placeholder="چقدر داری"
//                         />
//                         <button id="btncalculate" className="btn2" type="button">
//                             محاسبه کن
//                         </button>
//                     </div>
//                     <p className="paragraph2">
//                         به بیش از 10000 مالک دیگر در جامعه املاک و مستغلات ما بپیوندید.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default There;
//

import React, { useState } from "react";
import "./style/There.css";
import "./style/responsive/ResponsiveThere.css";

function There() {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ""); // فقط اعداد را نگه دار
        const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // جداکننده هزارگان
        setValue(formattedValue); // مقدار فرمت‌شده را در state ذخیره کن
    };

    return (
        <div className="third-wrapper">
            <div className="third">
                <div className="content">
                    <h1 className="titleSearch">قبل خرید</h1>
                    <h2 className="textSearch">بیا داراییت رو محاسبه کنیم</h2>
                    <p className="paragraph">
                        پولی که داری رو داخل کادر بنویس و خانه ای که میشه رو خرید رو ببین
                    </p>
                    <div className="SearchVsButton">
                        <div className="input-container">
                            <input
                                id="inputcalculate"
                                className="input1"
                                type="text"
                                value={value}
                                onChange={handleInputChange}
                                placeholder="چقدر داری"
                            />
                            <button id="btncalculate" className="btn2" type="button">
                                محاسبه کن
                            </button>
                        </div>
                    </div>
                    <p className="paragraph2">
                        به بیش از 10000 مالک دیگر در جامعه املاک و مستغلات ما بپیوندید.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default There;