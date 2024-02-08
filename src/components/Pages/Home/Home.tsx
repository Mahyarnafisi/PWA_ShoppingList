import Header from "../../Layouts/Header/Header";
import Main from "../../Layouts/Main/Main";
import Navbar from "../../Layouts/Navbar/Navbar";
import Styles from "./Home.module.css";

function Home() {
  return (
    <div className={Styles.home}>
      <Header />
      <Main />
      <Navbar />
    </div>
  );
}

export default Home;
