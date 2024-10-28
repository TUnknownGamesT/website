
import "/src/css/nav-bar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoIcon from "../assets/UG_Logo.jpg";


export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <img src={logoIcon} style={{ width: '40px'}}/>
        <button className="menu-button" aria-label="Menu">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      </div>
    </>
  );
}
