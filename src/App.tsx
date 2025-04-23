import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-full">
      <Header />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <Sidebar />
          </div>
          <main className="lg:col-span-9">{/* routing */}</main>
        </div>
      </div>
    </div>
  );
};

export default App;
