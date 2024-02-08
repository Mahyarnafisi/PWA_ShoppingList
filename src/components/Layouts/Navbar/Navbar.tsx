import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={Styles.navbar}>
      <NavLink to="/home/list" className={Styles.shopList}>
        <ShoppingCartOutlinedIcon />
      </NavLink>
      <NavLink to="/home/add" className={Styles.add}>
        <AddOutlinedIcon /> <h2>Add New Item</h2>
      </NavLink>
      <NavLink to="/home/info" className={Styles.info}>
        <InfoOutlinedIcon />
      </NavLink>
    </div>
  );
}

export default Navbar;
