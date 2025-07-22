import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedServer, setSelectedServer] = useState<string | null>(null);

  const servers = [
    { id: '1', name: 'Counter-Strike 2', status: 'online', players: '24/32', cpu: 45, ram: 67, uptime: '5d 12h' },
    { id: '2', name: 'Minecraft Survival', status: 'online', players: '18/20', cpu: 32, ram: 78, uptime: '12d 3h' },
    { id: '3', name: 'Rust PvP', status: 'restart', players: '0/100', cpu: 0, ram: 12, uptime: '0m' },
    { id: '4', name: 'Valheim', status: 'offline', players: '0/10', cpu: 0, ram: 0, uptime: '0m' },
  ];

  const tariffs = [
    { name: 'Стартовый', price: '490₽', players: '10', ram: '2GB', cpu: '1 Core' },
    { name: 'Игровой', price: '990₽', players: '32', ram: '4GB', cpu: '2 Cores' },
    { name: 'Профи', price: '1990₽', players: '100', ram: '8GB', cpu: '4 Cores' },
  ];

  const tickets = [
    { id: '#001', title: 'Проблемы с подключением к серверу', status: 'open', priority: 'high' },
    { id: '#002', title: 'Запрос на увеличение слотов', status: 'pending', priority: 'medium' },
    { id: '#003', title: 'Ошибка загрузки мода', status: 'closed', priority: 'low' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-cyber-green shadow-cyber-green animate-glow';
      case 'restart': return 'text-yellow-400 shadow-yellow-400 animate-glow';
      case 'offline': return 'text-red-400 shadow-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online': return <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green">Онлайн</Badge>;
      case 'restart': return <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400">Перезапуск</Badge>;
      case 'offline': return <Badge className="bg-red-400/20 text-red-400 border-red-400">Офлайн</Badge>;
      default: return <Badge variant="secondary">Неизвестно</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gaming-darker text-white">
      {/* Header */}
      <header className="border-b border-gaming-gray bg-gaming-dark/50 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Server" className="text-cyber-blue" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                  GameHost CRM
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gaming-gray/30">
                <Icon name="User" size={16} className="text-cyber-green" />
                <span className="text-sm">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid grid-cols-6 bg-gaming-gray/30 border border-gaming-gray">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Панель
            </TabsTrigger>
            <TabsTrigger value="servers" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="Server" size={16} className="mr-2" />
              Серверы
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Биллинг
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Поддержка
            </TabsTrigger>
            <TabsTrigger value="config" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue">
              <Icon name="Cog" size={16} className="mr-2" />
              Конфигурация
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Активные серверы</span>
                    <Icon name="Activity" className="text-cyber-green" size={16} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-green">2</div>
                  <p className="text-xs text-gray-500">из 4 серверов</p>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Онлайн игроков</span>
                    <Icon name="Users" className="text-cyber-blue" size={16} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-blue">42</div>
                  <p className="text-xs text-gray-500">из 162 слотов</p>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Доход за месяц</span>
                    <Icon name="TrendingUp" className="text-cyber-green" size={16} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyber-green">15,890₽</div>
                  <p className="text-xs text-gray-500">+12% к прошлому месяцу</p>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Тикеты</span>
                    <Icon name="MessageSquare" className="text-yellow-400" size={16} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-400">3</div>
                  <p className="text-xs text-gray-500">1 требует внимания</p>
                </CardContent>
              </Card>
            </div>

            {/* Server Status */}
            <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Server" className="text-cyber-blue" size={20} />
                  Состояние серверов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servers.map((server) => (
                    <div key={server.id} className="flex items-center justify-between p-4 rounded-lg bg-gaming-gray/30 border border-gaming-gray/50">
                      <div className="flex items-center gap-4">
                        <img 
                          src="/img/73bead46-831e-4cae-8322-e37f5ce29b48.jpg" 
                          alt="Server" 
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{server.name}</h3>
                          <p className="text-sm text-gray-400">Игроки: {server.players} | Аптайм: {server.uptime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-400">CPU: {server.cpu}%</div>
                          <Progress value={server.cpu} className="w-20 h-2" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">RAM: {server.ram}%</div>
                          <Progress value={server.ram} className="w-20 h-2" />
                        </div>
                        {getStatusBadge(server.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Servers Management */}
          <TabsContent value="servers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Управление серверами</h2>
              <Button className="bg-cyber-blue hover:bg-cyber-blue/80">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить сервер
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {servers.map((server) => (
                <Card key={server.id} className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/img/73bead46-831e-4cae-8322-e37f5ce29b48.jpg" 
                          alt="Server" 
                          className="w-10 h-10 rounded object-cover"
                        />
                        {server.name}
                      </div>
                      {getStatusBadge(server.status)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-gray-400">CPU</Label>
                        <Progress value={server.cpu} className="mt-1" />
                        <span className="text-xs text-gray-500">{server.cpu}%</span>
                      </div>
                      <div>
                        <Label className="text-xs text-gray-400">RAM</Label>
                        <Progress value={server.ram} className="mt-1" />
                        <span className="text-xs text-gray-500">{server.ram}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Игроки: {server.players}</span>
                      <span className="text-gray-400">Аптайм: {server.uptime}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-cyber-green text-cyber-green hover:bg-cyber-green/10">
                        <Icon name="Play" size={14} className="mr-1" />
                        Запуск
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                        <Icon name="RotateCcw" size={14} className="mr-1" />
                        Перезапуск
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-red-400 text-red-400 hover:bg-red-400/10">
                        <Icon name="Square" size={14} className="mr-1" />
                        Стоп
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Тарифы и платежи</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tariffs.map((tariff, index) => (
                <Card key={index} className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="text-xl font-bold">{tariff.name}</div>
                      <div className="text-3xl font-bold text-cyber-blue mt-2">{tariff.price}</div>
                      <div className="text-sm text-gray-400">в месяц</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Игроки:</span>
                        <span>{tariff.players}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">RAM:</span>
                        <span>{tariff.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">CPU:</span>
                        <span>{tariff.cpu}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80">
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Orders */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Управление заказами</h2>
              <Button className="bg-cyber-blue hover:bg-cyber-blue/80">
                <Icon name="Plus" size={16} className="mr-2" />
                Новый заказ
              </Button>
            </div>

            <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
              <CardHeader>
                <CardTitle>Активные заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gaming-gray/30 border border-gaming-gray/50">
                    <div>
                      <h3 className="font-semibold">Заказ #12345</h3>
                      <p className="text-sm text-gray-400">Counter-Strike 2 сервер - Тариф "Игровой"</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green mb-1">Активен</Badge>
                      <p className="text-sm text-gray-400">990₽/мес</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gaming-gray/30 border border-gaming-gray/50">
                    <div>
                      <h3 className="font-semibold">Заказ #12346</h3>
                      <p className="text-sm text-gray-400">Minecraft сервер - Тариф "Стартовый"</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400 mb-1">Ожидает оплаты</Badge>
                      <p className="text-sm text-gray-400">490₽/мес</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Система поддержки</h2>
              <Button className="bg-cyber-blue hover:bg-cyber-blue/80">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать тикет
              </Button>
            </div>

            <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
              <CardHeader>
                <CardTitle>Тикеты поддержки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg bg-gaming-gray/30 border border-gaming-gray/50">
                      <div>
                        <h3 className="font-semibold">{ticket.title}</h3>
                        <p className="text-sm text-gray-400">Тикет {ticket.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          className={
                            ticket.priority === 'high' 
                              ? "bg-red-400/20 text-red-400 border-red-400"
                              : ticket.priority === 'medium'
                              ? "bg-yellow-400/20 text-yellow-400 border-yellow-400"
                              : "bg-gray-400/20 text-gray-400 border-gray-400"
                          }
                        >
                          {ticket.priority === 'high' ? 'Высокий' : ticket.priority === 'medium' ? 'Средний' : 'Низкий'}
                        </Badge>
                        <Badge 
                          className={
                            ticket.status === 'open' 
                              ? "bg-cyber-green/20 text-cyber-green border-cyber-green"
                              : ticket.status === 'pending'
                              ? "bg-yellow-400/20 text-yellow-400 border-yellow-400"
                              : "bg-gray-400/20 text-gray-400 border-gray-400"
                          }
                        >
                          {ticket.status === 'open' ? 'Открыт' : ticket.status === 'pending' ? 'В ожидании' : 'Закрыт'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuration */}
          <TabsContent value="config" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Конфигурация системы</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader>
                  <CardTitle>Автоматический перезапуск</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="restart-interval">Интервал проверки (минуты)</Label>
                    <Input 
                      id="restart-interval"
                      type="number" 
                      defaultValue="5"
                      className="bg-gaming-gray/30 border-gaming-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-restarts">Максимум перезапусков в час</Label>
                    <Input 
                      id="max-restarts"
                      type="number" 
                      defaultValue="3"
                      className="bg-gaming-gray/30 border-gaming-gray"
                    />
                  </div>
                  <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80">
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gaming-dark/50 border-gaming-gray backdrop-blur">
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email для уведомлений</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="admin@gamehost.ru"
                      className="bg-gaming-gray/30 border-gaming-gray"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discord-webhook">Discord Webhook URL</Label>
                    <Input 
                      id="discord-webhook"
                      type="url" 
                      placeholder="https://discord.com/api/webhooks/..."
                      className="bg-gaming-gray/30 border-gaming-gray"
                    />
                  </div>
                  <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/80">
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}