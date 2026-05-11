import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Products from "./components/Products";
import Availability from "./components/Availability";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-bg">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <div className="site-shell">
        <Header />

        <main className="content-wrapper">
          <Hero />
          <Info />
          <Products />
          <Availability />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;