import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

export default function App() {
  return (
    <div>
      <Header />
      <main className="bg-black/60">
        <Meals />
      </main>
    </div>
  );
}
