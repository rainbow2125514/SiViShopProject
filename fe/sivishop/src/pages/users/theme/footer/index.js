import { memo } from "react";
import "./style.scss";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className="footer_background">
            <div className="container">
                <div className="Footer_block">
                    <div className="col-lg-3">
                        <ul>
                            <h1>
                                SIVI SHOP
                            </h1>
                            <li>
                                Địa chỉ: 213 Dương Đình Nghệ
                            </li>
                            <li>
                                Phone: 0977-232-223
                            </li>
                            <li>
                                Email: hello@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <h3>
                                Cửa hàng
                            </h3>
                            <li>
                                Liên hệ
                            </li>
                            <li>
                                Thông tin về chúng tôi
                            </li>
                            <li>
                                Sản phẩm kinh doanh
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 HeaderEmpty">
                        <ul>
                            <li>
                                Thông tin tài khoản
                            </li>
                            <li>
                                Giỏ hàng
                            </li>
                            <li>
                                Danh sách ưa thích
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul>

                            <h3>
                                Khuyến mãi & ưu đãi
                            </h3>
                            <li>
                                Đăng ký nhận thông tin tại đây
                            </li>
                            <li >
                                <div className="inputInfo">
                                    <Form.Control type="text" placeholder="Nhập Email" />
                                    <Button as="a" variant="primary">
                                        Đăng ký
                                    </Button>
                                </div>
                            </li>
                            <li>
                                Khuyến mãi & ưu đãi
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);