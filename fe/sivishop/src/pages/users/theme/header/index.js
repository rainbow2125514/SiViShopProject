import { memo } from "react";
import "./style.scss";
import { FaFacebook, FaTwitter, FaUser } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
    return (
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
    )
}

export default memo(Header);