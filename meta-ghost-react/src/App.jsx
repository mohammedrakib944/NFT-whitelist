import "./App.css";
import Home from "./pages/Home";
import { ContextProvidor } from "./Context";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ContextProvidor>
      <div className="w-full min-h-screen bg-[#000000]">
        <div className="w-full min-h-[200px] xl:min-h-[350px] backgroundStyle"></div>
        <div className="wrapper">
          <Home />
        </div>
      </div>
    </ContextProvidor>
  );
}

export default App;
