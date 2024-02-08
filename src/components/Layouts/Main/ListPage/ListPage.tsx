import ListItem from "../../../UI/ListItem/ListItem";
import Styles from "./ListPage.module.css";

function ListPage() {
  return (
    <div className={Styles.listPage}>
      <ListItem />
      <ListItem />
    </div>
  );
}

export default ListPage;
