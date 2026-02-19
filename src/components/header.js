import { Link } from "gatsby";
import {
    FaChalkboardTeacher,
    FaHome,
    FaUniversity,
    FaReadme,
} from "react-icons/fa";
import { MdLibraryBooks, MdWork } from "react-icons/md";

const Header = () => {
    return (
        <nav>
            <div className="home-link-container">
                <Link to="/">
                    <FaHome></FaHome>
                    Home
                </Link>
            </div>
            <div className="nav-link-container">
                <Link to="/cv/">
                    <MdWork></MdWork>
                    CV
                </Link>
                <Link to="/publications/">
                    <MdLibraryBooks></MdLibraryBooks>
                    Publications
                </Link>
                <Link to="/teaching/">
                    <FaChalkboardTeacher></FaChalkboardTeacher>
                    Teaching
                </Link>
                <Link to="/service/">
                    <FaUniversity></FaUniversity>
                    Service
                </Link>
                <Link to="/blog/">
                    <FaReadme></FaReadme>
                    Blog
                </Link>
            </div>
        </nav>
    );
};

export default Header;
