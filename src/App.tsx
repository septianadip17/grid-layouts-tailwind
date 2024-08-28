import Colors from "./components/Colors";
import CssGrid from "./components/CssGrid";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-3xl font-bold text-center pt-5 border-2 border-yellow-500">Hello World</h1>
      <CssGrid />
      <hr className="border-8 border-black m-10"/>
      <Colors />
    </div>
  );
}

export default App;
