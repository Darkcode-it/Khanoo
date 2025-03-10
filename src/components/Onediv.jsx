import "./style/Onediv.css"
import "./style/responsive/ResponsiveOnediv.css"
function Onediv() {
    return (

        <div className="AllDiv">
            <div className="text">
                <h1 className="title">راه جدید برای پیدا کردن خانه جدید</h1>
                <h4 className="subtitle">مکان رویایی خود را برای زندگی با بیش از 10000 ملک فهرست شده پیدا کنید</h4>
                <div className="stats">
                    <div className="stat">
                        <img className="stat-icon" src="./img/ho.svg" alt=""/>
                        <h6 className="stat-value">7.4%</h6>
                        <h5 className="stat-value">نرخ بازگشت ملک</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="./img/se.svg " alt=""/>
                        <h6 className="stat-value">3,856</h6>
                        <h5 className="stat-value">املاک در فروش و اجاره</h5>
                    </div>
                    <div className="stat">
                        <img className="stat-icon" src="./img/ho.svg" alt=""/>
                        <h6 className="stat-value">2,540</h6>
                        <h5 className="stat-value">معاملات انجام شده روزانه
                        </h5>
                    </div>
                </div>
            </div>
            <img className="img3" src="./img/h3.svg" alt=""/>

        </div>


    );
}

export default Onediv;