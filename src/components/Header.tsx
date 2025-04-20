import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 animate-float">
              <div className="absolute inset-0 bg-chess-primary rounded-full transform rotate-45"></div>
              <div className="absolute inset-1 bg-white rounded-full"></div>
              <div className="absolute inset-[6px] bg-chess-secondary rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-chess-primary to-chess-secondary text-transparent bg-clip-text">ШахМаты</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/rules" className="text-lg font-medium hover:text-chess-primary transition-colors">
            Правила
          </Link>
          <Link to="/strategies" className="text-lg font-medium hover:text-chess-primary transition-colors">
            Стратегии
          </Link>
          <Link to="/lessons" className="text-lg font-medium hover:text-chess-primary transition-colors">
            Уроки
          </Link>
          <Button className="bg-chess-primary hover:bg-chess-secondary">
            Начать играть
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border/40 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/rules" 
              className="px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={toggleMenu}
            >
              Правила
            </Link>
            <Link 
              to="/strategies" 
              className="px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={toggleMenu}
            >
              Стратегии
            </Link>
            <Link 
              to="/lessons" 
              className="px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={toggleMenu}
            >
              Уроки
            </Link>
            <Button 
              className="bg-chess-primary hover:bg-chess-secondary w-full"
              onClick={toggleMenu}
            >
              Начать играть
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
