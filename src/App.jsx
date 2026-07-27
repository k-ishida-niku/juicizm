import { SessionStateProvider } from "./context/SessionStateProvider/SessionStateProvider";
import { useGsapRefresh } from "./hooks/useGsapRefresh";

import { Loading } from "./components/Loading/Loading";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";

function App() {
  useGsapRefresh();
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
