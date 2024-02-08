import Styles from "./ListItem.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function ListItem() {
  return (
    <div className={Styles.listItem}>
      <div className={Styles.colorTag}></div>
      <h2 className={Styles.title}>Title item to buy</h2>
      <h2 className={Styles.shop}>lidl</h2>
      <button className={Styles.btn__rmv}>
        <CloseOutlinedIcon />
      </button>
    </div>
  );
}

export default ListItem;
