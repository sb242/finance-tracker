import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { error, isPending, logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
