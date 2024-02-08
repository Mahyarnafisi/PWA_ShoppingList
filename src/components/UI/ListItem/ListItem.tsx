import Styles from "./ListItem.module.css";
function ListItem() {
  return (
    <div className={Styles.listItem}>
      <div className={Styles.colorTag}>color</div>
      <h2 className={Styles.title}>title item</h2>
      <h2 className={Styles.shop}>shop</h2>
      <button className={Styles.btn__rmv}>close</button>
    </div>
  );
}

export default ListItem;
