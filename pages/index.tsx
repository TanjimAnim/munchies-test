import Menu from "../src/components/menu";
import HomePage from "../src/components/Home";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Menu />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
