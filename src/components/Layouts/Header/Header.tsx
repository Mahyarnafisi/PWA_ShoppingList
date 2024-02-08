import Styles from "./Header.module.css";
function Header() {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.title}>Shopping List</h1>
    </div>
  );
}

export default Header;
