import Category from "../src/components/category";
import HomePage from "../src/components/Home";
import Map from "../src/components/map";
import Menu from "../src/components/menu";
import Fondas from "../src/components/Fondas";
import TopFooter from "../src/components/Footer/TopFooter";
import BottomFooter from "../src/components/Footer/BottomFooter";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Category />
      <Map />
      <Menu />
      <Fondas />
      <TopFooter />
      <BottomFooter />
    </div>
  );
}
