import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Trophy, 
  Swords, 
  Castle, 
  Chess, 
  Shield, 
  Lightbulb,
  ArrowRight
} from "lucide-react";

const Strategies = () => {
  const [activeTab, setActiveTab] = useState("beginner");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-chess-soft-bg">
      <Header />
      <main className="container py-8 space-y-8 px-4 sm:px-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-chess-primary to-chess-secondary text-transparent bg-clip-text">
            Шахматные стратегии
          </h1>
          <p className="text-xl text-muted-foreground">
            Изучи приёмы и тактики, которые помогут тебе побеждать в шахматах!
          </p>
        </div>

        <Tabs defaultValue="beginner" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="beginner" className="rounded-l-lg">Начинающим</TabsTrigger>
              <TabsTrigger value="intermediate">Продолжающим</TabsTrigger>
              <TabsTrigger value="advanced" className="rounded-r-lg">Продвинутым</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="beginner" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StrategyCard 
                title="Защита короля" 
                description="Узнай, как защищать своего короля от атак соперника"
                icon={<Shield className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
              <StrategyCard 
                title="Детский мат" 
                description="Простая комбинация для быстрой победы в начале игры"
                icon={<Trophy className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
              <StrategyCard 
                title="Развитие фигур" 
                description="Как правильно выводить фигуры в начале партии"
                icon={<Chess className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
              <StrategyCard 
                title="Центр доски" 
                description="Почему важно контролировать центр шахматной доски"
                icon={<Swords className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
              <StrategyCard 
                title="Рокировка" 
                description="Специальный ход для защиты короля и активации ладьи"
                icon={<Castle className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
              <StrategyCard 
                title="Простые ловушки" 
                description="Хитрые приёмы для начинающих шахматистов"
                icon={<Lightbulb className="h-8 w-8 text-chess-primary" />}
                level="Лёгкий"
              />
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StrategyCard 
                title="Вилка" 
                description="Атака одной фигурой сразу двух фигур противника"
                icon={<Swords className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
              <StrategyCard 
                title="Связка" 
                description="Ограничение подвижности фигуры соперника"
                icon={<Shield className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
              <StrategyCard 
                title="Открытый шах" 
                description="Особый вид шаха, когда одна фигура открывает линию атаки для другой"
                icon={<Chess className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
              <StrategyCard 
                title="Двойной удар" 
                description="Одновременная атака на две цели на шахматной доске"
                icon={<Swords className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
              <StrategyCard 
                title="Проходная пешка" 
                description="Важный стратегический элемент в эндшпиле"
                icon={<Trophy className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
              <StrategyCard 
                title="Борьба за открытые линии" 
                description="Как использовать открытые вертикали для атаки"
                icon={<Castle className="h-8 w-8 text-chess-primary" />}
                level="Средний"
              />
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StrategyCard 
                title="Жертва материала" 
                description="Когда и как правильно жертвовать фигуры для преимущества"
                icon={<Swords className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
              <StrategyCard 
                title="Позиционная игра" 
                description="Тонкости стратегического планирования партии"
                icon={<Shield className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
              <StrategyCard 
                title="Атака на короля" 
                description="Организация матовой атаки в различных позициях"
                icon={<Trophy className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
              <StrategyCard 
                title="Защита трудных позиций" 
                description="Техники защиты и контратаки в сложных ситуациях"
                icon={<Castle className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
              <StrategyCard 
                title="Критические позиции" 
                description="Анализ и принятие решений в ключевые моменты партии"
                icon={<Lightbulb className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
              <StrategyCard 
                title="Эндшпильные техники" 
                description="Мастерство завершения партии с преимуществом"
                icon={<Chess className="h-8 w-8 text-chess-primary" />}
                level="Сложный"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-col items-center mt-12 space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto border border-border/20">
          <div className="flex items-center justify-center w-16 h-16 bg-chess-primary/20 rounded-full mb-2">
            <Lightbulb className="h-8 w-8 text-chess-primary" />
          </div>
          <h2 className="text-2xl font-bold text-center">Хочешь стать настоящим шахматным мастером?</h2>
          <p className="text-center text-muted-foreground">
            Регулярная практика и изучение стратегий помогут тебе стать сильным игроком!
          </p>
          <Button className="mt-4 gap-2 bg-chess-primary hover:bg-chess-secondary">
            Перейти к интерактивным урокам
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

const StrategyCard = ({ title, description, icon, level }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 border border-border/50 bg-white/20 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${
            level === "Лёгкий" 
              ? "bg-green-100 text-green-800" 
              : level === "Средний" 
                ? "bg-yellow-100 text-yellow-800" 
                : "bg-red-100 text-red-800"
          }`}>
            {level}
          </span>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center">
            {/* Strategy illustration will go here */}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="w-full justify-between group">
          <span>Изучить стратегию</span>
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Strategies;
