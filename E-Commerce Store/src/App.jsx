import "./App.css";
import Navigation from "./costumer/components/Navigation/Navigation";
import Homepage from "./costumer/Pages/Homepage/Homepage";
// import Product from "./costumer/components/Product/Product";
import Footer from "./costumer/components/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <Homepage />
        {/* <Product /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
