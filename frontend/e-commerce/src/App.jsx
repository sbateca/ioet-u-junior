import "./App.css";
import { Navbar } from "./components/Navbar";
import { ResultInfoBar } from "./components/ResultInfoBar";
import { SearchProvider } from "./contexts/SearchContext";
import { CartProvider } from "./contexts/CartContext";
import { ContentContainer } from "./components/ContentContainer";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Navbar />
        <ResultInfoBar />
        <ContentContainer />
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
