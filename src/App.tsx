import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { DataContextProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DataContextProvider>
  
  );
};

export default App;
