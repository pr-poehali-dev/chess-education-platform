import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ChessPiece from "@/components/ChessPiece";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Lock, Star } from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: "начальный" | "средний" | "продвинутый";
  completed: boolean;
  locked: boolean;
  duration: string;
  icon: "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
}

const Lessons = () => {
  const [lessons] = useState<Lesson[]>([
    {
      id: 1,
      title: "Знакомство с шахматной доской",
      description: "Узнай, как выглядит шахматная доска и как называются клетки!",
      difficulty: "начальный",
      completed: true,
      locked: false,
      duration: "15 минут",
      icon: "pawn"
    },
    {
      id: 2,
      title: "Как ходит пешка",
      description: "Маленькая, но очень важная фигура. Изучи все её ходы!",
      difficulty: "начальный",
      completed: false,
      locked: false,
      duration: "20 минут",
      icon: "pawn"
    },
    {
      id: 3,
      title: "Могучая ладья",
      description: "Узнай, как ходит ладья и почему она так сильна!",
      difficulty: "начальный",
      completed: false,
      locked: false,
      duration: "25 минут",
      icon: "rook"
    },
    {
      id: 4,
      title: "Хитрый конь",
      description: "Самая необычная фигура в шахматах. Освой её прыжки!",
      difficulty: "средний",
      completed: false,
      locked: true,
      duration: "30 минут",
      icon: "knight"
    },
    {
      id: 5,
      title: "Могучий слон",
      description: "Изучи диагональные ходы слона и его особенности!",
      difficulty: "средний",
      completed: false,
      locked: true,
      duration: "25 минут",
      icon: "bishop"
    },
    {
      id: 6,
      title: "Сильный ферзь",
      description: "Познакомься с самой сильной фигурой на доске!",
      difficulty: "продвинутый",
      completed: false,
      locked: true,
      duration: "35 минут",
      icon: "queen"
    }
  ]);

  // Расчёт прогресса
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  // Цвета для уровня сложности
  const difficultyColor = {
    "начальный": "bg-green-100 text-green-800",
    "средний": "bg-yellow-100 text-yellow-800",
    "продвинутый": "bg-purple-100 text-purple-800"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-chess-primary/20 to-chess-secondary/20 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Уроки шахмат
              </h1>
              <p className="text-xl">
                Изучай шахматы шаг за шагом с нашими интерактивными уроками!
              </p>
              <div className="flex items-center gap-2">
                <Progress value={progressPercentage} className="flex-1 h-4" />
                <span className="text-sm font-medium">{progressPercentage}%</span>
              </div>
              <p className="text-sm">Пройдено {completedLessons} из {totalLessons} уроков</p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className="absolute animate-float">
                    <ChessPiece type="knight" color="white" size="xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Доступные уроки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className={`transform transition-all duration-300 hover:scale-105 ${lesson.locked ? 'opacity-70' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className={difficultyColor[lesson.difficulty]}>
                    {lesson.difficulty}
                  </Badge>
                  {lesson.completed ? (
                    <CheckCircle className="text-green-500" />
                  ) : lesson.locked ? (
                    <Lock className="text-gray-400" />
                  ) : null}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-10 h-10 bg-chess-primary/20 rounded-full flex items-center justify-center">
                    <ChessPiece type={lesson.icon} color="black" size="sm" />
                  </div>
                  <CardTitle>{lesson.title}</CardTitle>
                </div>
                <CardDescription className="mt-2">
                  {lesson.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-1" />
                  <span>Длительность: {lesson.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${lesson.locked ? 'bg-gray-400' : 'bg-chess-primary hover:bg-chess-secondary'}`}
                  disabled={lesson.locked}
                >
                  {lesson.completed ? "Повторить урок" : lesson.locked ? "Урок заблокирован" : "Начать урок"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-chess-primary/10 py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Хочешь узнать больше?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Изучи правила и стратегии, чтобы стать настоящим шахматным чемпионом!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary/10">
              <Link to="/rules">Правила игры</Link>
            </Button>
            <Button variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary/10">
              <Link to="/strategies">Стратегии</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chess-dark text-white py-8 mt-auto">
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

export default Lessons;
