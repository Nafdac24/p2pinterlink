import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WalletApp from "./pages/WalletApp";
import ChooseImportMethod from "./pages/ChooseImportMethod";
import ImportRecoveryPhrase from "./pages/ImportRecoveryPhrase";
import ManageWallets from "./pages/ManageWallets";
import AboutPage from "./pages/AboutPage";
import Larisa from "./pages/Larisa";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="lari" element={<Larisa />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wallet" element={<WalletApp />} />

        <Route path="/import" element={<ChooseImportMethod />} />

        <Route
          path="/import/recovery-phrase"
          element={<ImportRecoveryPhrase />}
        />

        <Route path="/manage-wallets" element={<ManageWallets />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
