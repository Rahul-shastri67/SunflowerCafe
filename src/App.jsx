import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import MenuSection from "./components/MenuSection/MenuSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useActiveSection from "./hooks/useActiveSection";
import { CATEGORIES } from "./data/menuData";
import styles from "./App.module.css";

const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

function App() {
  const activeId = useActiveSection(CATEGORY_IDS);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className={`container ${styles.menuLayout}`}>
          <CategoryNav categories={CATEGORIES} activeId={activeId} />
          <div className={styles.menuContent}>
            {CATEGORIES.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
