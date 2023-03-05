import {Logo} from "../../assets/svg/Logo";
import Button from "../../shared/Button/Button";

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header_container page_container">
                <div className="logo">
                    <Logo className="icon"/>
                    <h1>Go<span>Corona</span></h1>
                </div>
                <div className="navigation">
                    <p>HOME</p>
                    <p>FEATURES</p>
                    <p>SUPPORT</p>
                    <p>CONTACT US</p>
                </div>
                <Button title='DOWNLOAD' backgroundColor='#4285F4'/>
            </div>
        </div>
    )
}

export default Header