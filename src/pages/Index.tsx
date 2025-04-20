import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ChessboardDisplay from "@/components/ChessboardDisplay";
import FeaturedContent from "@/components/FeaturedContent";
import ChessPiece from "@/components/ChessPiece";

const Index = () => {
  const [showPiece, setShowPiece] = useState(false);

  useEffect(() => {
    // Анимация появления фигуры после загрузки страницы
    const timer = setTimeout(() => {
      setShowPiece(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col chess-pattern">
      <Header />

      {/* Hero Section */}
      <section className="container py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Шахматное королевство для <span className="text-chess-primary animate-pulse">любознательных</span> детей
          </h1>
          <p className="text-xl">
            Изучай шахматы весело и легко! Правила игры, интересные стратегии и увлекательные уроки ждут тебя.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-chess-primary hover:bg-chess-secondary text-white text-lg">
              <Link to="/lessons">Начать учиться</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary/10 text-lg">
              <Link to="/rules">Узнать правила</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <ChessboardDisplay />
            {showPiece && (
              <div className="absolute top-[-40px] right-[-20px] animate-float">
                <ChessPiece type="knight" color="white" size="lg" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Что ты найдёшь на нашем сайте?
        </h2>
        <FeaturedContent />
      </section>

      {/* Fun Facts */}
      <section className="bg-gradient-to-r from-chess-primary/20 to-chess-secondary/20 py-12">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Интересные факты о шахматах
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ChessPiece type="rook" color="black" className="mr-2" />
                <h3 className="text-xl font-bold">Самая длинная партия</h3>
              </div>
              <p>Самая длинная официальная шахматная партия длилась 269 ходов и закончилась ничьей!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ChessPiece type="queen" color="white" className="mr-2" />
                <h3 className="text-xl font-bold">Ферзь - самая сильная фигура</h3>
              </div>
              <p>Раньше ферзь был гораздо слабее и мог ходить только на одну клетку по диагонали!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ChessPiece type="knight" color="black" className="mr-2" />
                <h3 className="text-xl font-bold">Конь может перепрыгивать</h3>
              </div>
              <p>Единственная фигура, которая может перепрыгивать через другие фигуры на доске!</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="container py-12 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готов стать юным шахматным гением?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Присоединяйся к нам и начни своё увлекательное путешествие в мир шахмат! Мы поможем тебе стать настоящим стратегом.
        </p>
        <Button size="lg" className="bg-chess-primary hover:bg-chess-secondary text-white text-lg">
          <Link to="/lessons">Начать сейчас!</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-chess-dark text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 mr-2 bg-chess-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-chess-secondary rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold">ШахМаты</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/rules" className="hover:text-chess-primary transition-colors">Правила</Link>
              <Link to="/strategies" className="hover:text-chess-primary transition-colors">Стратегии</Link>
              <Link to="/lessons" className="hover:text-chess-primary transition-colors">Уроки</Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>&copy; 2023 ШахМаты - Шахматный сайт для детей</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
