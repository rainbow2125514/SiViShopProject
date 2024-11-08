import { memo, useEffect, useState } from "react";
import "./style.scss";
import { FaFacebook, FaTwitter, FaUser } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { ROUTERS } from "utils/router";

function formatNumber(number, decimalPlaces = 2) {
    // Làm tròn số đến số chữ số thập phân cần thiết
    const roundedNumber = Number(number.toFixed(decimalPlaces));

    // Định dạng số theo chuẩn tiếng Việt (dấu chấm cho phần ngàn, dấu phẩy cho phần thập phân)
    return `${roundedNumber.toLocaleString("vi-VN")} đ`;
}

const Header = () => {
    var location = useLocation();
    console.log(location)
    const [menus, setMenus] = useState([])
    console.log(menus);
    useEffect(() => {
        setMenus([
            {
                name: "Trang chủ",
                path: ROUTERS.USER.HOME,
                isActive: location.pathname === "/" ? true:false,
            },
            {
                name: "Cửa hàng",
                path: ROUTERS.USER.PRODUCTS,
                isActive: location.pathname.indexOf(ROUTERS.USER.PRODUCTS) === 1 ? true:false,
            },
            {
                name: "Sản phẩm",
                path: "",
                isActive:false,
                isShowSubMenu: false,
                child: [
                    {
                        name: "Trang chủ",
                        path: ROUTERS.USER.HOME,
                    }
                ]
            },
            {
                name: "Bài viết",
                path: "",
                isActive:false,
            },
            {
                name: "Liên hệ",
                path: "",
                isActive:false
            }
        ])
    }, [location])
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    hello@gmail.com
                                </li>
                                <li>
                                    Miễn phí ship cho đơn từ 200.000đ
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <BsTelegram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaUser /><span className="span_login">Đăng nhập</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">LOGO</div>
                        <div className="col-lg-6 menu_bar">
                            <ul>
                                {
                                menus.map((menu,menuKey) =>(
                                    <li key={menuKey} className={menu.isActive?"active":""}>
                                    <Link to={menu.path}>
                                        {menu.name}
                                    </Link>
                                </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-lg-3 shop_cart">
                            <div>
                                <span>{formatNumber(123123123)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <IoCartOutline /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);