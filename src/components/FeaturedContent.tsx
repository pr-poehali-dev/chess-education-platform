import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChessPiece from '@/components/ChessPiece';

interface ContentItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

const ContentItem: React.FC<ContentItemProps> = ({ title, description, icon, linkTo }) => {
  return (
    <Card className="overflow-hidden border-2 hover:border-chess-primary transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-chess-primary/10 to-chess-secondary/10">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-full bg-white shadow-md">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full hover:bg-chess-primary hover:text-white">
          <Link to={linkTo}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ContentItem
        title="Правила игры"
        description="Узнай, как двигаются фигуры и основные правила шахмат — просто и понятно для начинающих!"
        icon={<ChessPiece type="pawn" color="black" size="sm" />}
        linkTo="/rules"
      />
      <ContentItem
        title="Стратегии"
        description="Разные хитрости и тактики, которые помогут тебе побеждать и становиться лучше в шахматах."
        icon={<ChessPiece type="knight" color="white" size="sm" />}
        linkTo="/strategies"
      />
      <ContentItem
        title="Интерактивные уроки"
        description="Учись играть в шахматы с интересными упражнениями и весёлыми заданиями!"
        icon={<ChessPiece type="queen" color="black" size="sm" />}
        linkTo="/lessons"
      />
    </div>
  );
};

export default FeaturedContent;
