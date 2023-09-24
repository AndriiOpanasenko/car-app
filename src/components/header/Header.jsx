import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={s.header_wrapper}>
            <Link className="main_link" to="/">
                <h1>Cars catalog</h1>
            </Link>
            <ul className={s.header_list}>
                <Link className="main_link" to="/about">
                    <li>About us</li>
                </Link>
                <Link className="main_link" to="/contacts">
                    <li>Contacts</li>
                </Link>

                <span>
                    <span></span>
                </span>
            </ul>
        </header>
    );
};
