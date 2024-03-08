import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StorePage from "./pages/StorePage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/store/:product" element={<StorePage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
