import { SessionStateProvider } from "./context/SessionStateProvider/SessionStateProvider";
import { Loading } from "./components/Loading/Loading";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <SessionStateProvider>
      <Loading />
      <Header />
      <Home />
      <Footer />
    </SessionStateProvider>
  );
}

export default App;
