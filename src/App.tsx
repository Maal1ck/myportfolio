import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioPage } from "./pages/PortfolioPage";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router>
        <div className="min-h-screen font-sans bg-base-bg text-text-main selection:bg-accent selection:text-base-bg flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
          
          <footer className="py-8 bg-base-card border-t border-border-main text-center">
            <p className="text-text-muted font-medium text-xs tracking-wide px-6">
              © {new Date().getFullYear()} El Hadji Malick DIEYE. Built with React.
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}
