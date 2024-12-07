import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import PageName from "./components/PageName";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ParentsPage from "./Pages/ParentsPage/ParentsPage";
import Registration from "./Pages/RegistrationPage/Registration";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NewsPage from "./Pages/NewsPage/NewsPage";

const usePageName = () => {
  const location = useLocation();

  // Map of paths to page names
  const pageNames = {
    "/": "MŠ ZUPKOVA",
    "/about": "O nás",
    "/parents": "Pre rodičov",
    "/news": "Oznamy",
    "/zapis": "Zápis",
    "/contact": "Kontakt",
  };

  return pageNames[location.pathname] || "Unknown Page";
};

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <PageNameWithRoute />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/news" element={<News />} />
          <Route path="/zapis" element={<Zapis />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

const PageNameWithRoute = () => {
  const pageName = usePageName();

  return <PageName pageName={pageName} />;
};

// Route Components
const Home = () => <HomePage />;
const AboutUS = () => <AboutUsPage />;
const Contact = () => <ContactPage />;
const Zapis = () => <Registration />;
const Parents = () => <ParentsPage />;
const News = () => <NewsPage />;

export default App;
