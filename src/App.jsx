// import './App.css'
// import Menu from "./components/Menu.jsx";
// import "./components/style/responsive/Responsive.css"
// import Onediv from "./components/Onediv.jsx";
// import Articles from "./components/Articles.jsx";
// import Twodiv from "./components/Twodiv.jsx";
// import There from "./components/There.jsx";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/Header.jsx";
// import Login from "./components/Login.jsx";
// function App() {
//
//
//   return (
//    <div dir='rtl'>
// <Menu/>
//        <Header/>
//        <Onediv/>
//         <Articles/>
//        <Twodiv/>
//        <There/>
//        <Footer/>
//        <Login/>
//        </div>
//   )
// }
//
// export default App


import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu.jsx";
import "./components/style/responsive/Responsive.css";
import Onediv from "./components/Onediv.jsx";
import Articles from "./components/Articles.jsx";
import Twodiv from "./components/Twodiv.jsx";
import There from "./components/There.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ItemMenu from "./components/ItemMenu.jsx";

function App() {
    return (
        <Router>
            <div dir="rtl">
            <Menu/>
                <Header/>
                <Onediv/>
                <Articles/>
                <Twodiv/>
                <There/>
                <Footer/>
                <Login/>
                <Signup />
               <ItemMenu/>
                <Routes>
                <Route path="/Login" element={<Login />} />
                       
                
                </Routes>
            </div>
        </Router>
    );
}

export default App;