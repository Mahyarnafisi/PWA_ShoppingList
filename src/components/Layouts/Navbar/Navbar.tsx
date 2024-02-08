import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={Styles.navbar}>
      <NavLink to="#" className={Styles.shopList}>
        <ShoppingCartOutlinedIcon />
      </NavLink>
      <NavLink to="#" className={Styles.add}>
        <AddOutlinedIcon /> <h2>Add New Item</h2>
      </NavLink>
      <NavLink to="#" className={Styles.info}>
        <InfoOutlinedIcon />
      </NavLink>
    </div>
  );
}

export default Navbar;
