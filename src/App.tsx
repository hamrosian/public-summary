import { useState, createContext, useContext } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home, featuredArticle, recentArticles } from './components/Home';
import { Article } from './components/Article';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './index.css';

// Dark mode context
type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function useDarkMode() {
  return useContext(DarkModeContext);
}

type Page = 'home' | 'article' | 'about' | 'contact';

type ArticleData = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

const allArticles: ArticleData[] = [
  featuredArticle,
  ...recentArticles,
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleReadArticle = (id: string) => {
    const article = allArticles.find(a => a.id === id);
    if (article) {
      setCurrentPage('article');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'article':
        return (
          <div className="blog-content">
            <main className="main-content">
              <Article />
            </main>
            <Sidebar />
          </div>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onReadArticle={handleReadArticle} />;
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="blog-layout">
        {renderPage()}
      </div>
      <Footer />
    </DarkModeContext.Provider>
  );
}

export default App;
