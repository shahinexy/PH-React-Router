import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <h1>This is the home component.</h1>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
