import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

export default function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main className="bg-black/60">
        <Meals />
      </main>
    </div>
  );
}
