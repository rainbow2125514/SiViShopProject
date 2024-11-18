import { memo, useEffect, useState } from "react";
import "./style.scss";
import { FaFacebook, FaTwitter, FaUser } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { ROUTERS } from "utils/router";
import { IoMdMenu } from "react-icons/io";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { LuPhoneCall } from "react-icons/lu";

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
                isActive: location.pathname === "/" ? true : false,
                child: [
                    {
                        name: "item1",
                        path: ROUTERS.USER.HOME,
                    },
                    {
                        name: "item2",
                        path: ROUTERS.USER.HOME,
                    }
                ]
            },
            {
                name: "Cửa hàng",
                path: ROUTERS.USER.PRODUCTS,
                isActive: location.pathname.indexOf(ROUTERS.USER.PRODUCTS) === 1 ? true : false,
                child: [
                    {
                        name: "item1",
                        path: ROUTERS.USER.HOME,
                    },
                    {
                        name: "item2",
                        path: ROUTERS.USER.HOME,
                    }
                ]
            },
            {
                name: "Sản phẩm",
                path: "",
                isActive: false,
                isShowSubMenu: false,
                child: [
                    {
                        name: "item1",
                        path: ROUTERS.USER.HOME,
                    }
                ]
            },
            {
                name: "Bài viết",
                path: "",
                isActive: false,
                child: [
                    {
                        name: "item1",
                        path: ROUTERS.USER.HOME,
                    }
                ]
            },
            {
                name: "Liên hệ",
                path: "",
                isActive: false,
                child: [
                    {
                        name: "item1",
                        path: ROUTERS.USER.HOME,
                    }
                ]
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
                        <div className="col-lg-3 menu_logo">LOGO</div>
                        <div className="col-lg-6 menu_bar">
                            <ul>
                                {
                                    menus.map((menu, menuKey) => (
                                        <li key={menuKey} className={menu.isActive ? "active" : ""}>
                                            <Link to={menu.path}>
                                                {menu.name}
                                            </Link>
                                            {menu.child && (
                                                <ul className="header__menu__dropdown">
                                                    {menu.child.map((childItem, childIndex) => (
                                                        <li key={`${menuKey}-${childIndex}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
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
            <div className="header_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 list_menu_area">
                            <Button className="button_list_item"><IoMdMenu /><span>  Danh sách sản phẩm</span></Button>
                            <ul className="list_menu_item">
                                <li>
                                    Thịt tươi
                                </li>
                                <li>
                                    Rau củ
                                </li>
                                <li>
                                    Nước trái cây
                                </li>
                                <li>
                                    Trái cây
                                </li>
                                <li>
                                    Hải sản
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg">
                            <div className="row">
                            <div className="col-lg-9 list_find_and_support_area">
                                <div className="find_area">
                                    <Form.Control type="text" placeholder="Bạn đang làm gì?" className="find_text_area" />
                                    <Button className="button_find"><IoMdMenu /><span>Tìm kiếm</span></Button>
                                </div>
                            </div>
                            <div className="col-lg-3 phone_area">
                                <a className="phone_icon_background"><LuPhoneCall className="phone_icon" /></a>
                                <ul>
                                    <li style={{ fontSize: 19 }}>
                                        <strong>0656.789.456</strong>
                                    </li>
                                    <li>
                                        Hỗ trợ 24/7
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div className="row image_info">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header);