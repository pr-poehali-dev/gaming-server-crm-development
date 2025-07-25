import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  // Данные для CRM
  const staff = [
    { id: 1, name: 'Иванов Иван Иванович', position: 'Менеджер', phone: '+7 (999) 123-45-67', email: 'ivanov@company.ru', salary: 50000, status: 'active' },
    { id: 2, name: 'Петрова Анна Сергеевна', position: 'Бухгалтер', phone: '+7 (999) 234-56-78', email: 'petrova@company.ru', salary: 45000, status: 'active' },
    { id: 3, name: 'Сидоров Петр Михайлович', position: 'Кладовщик', phone: '+7 (999) 345-67-89', email: 'sidorov@company.ru', salary: 35000, status: 'vacation' },
  ];

  const warehouses = [
    { id: 1, name: 'Основной склад', address: 'ул. Складская, 15', manager: 'Сидоров П.М.', capacity: 1000, occupied: 750 },
    { id: 2, name: 'Склад №2', address: 'пр. Промышленный, 8', manager: 'Козлов А.В.', capacity: 500, occupied: 320 },
  ];

  const products = [
    { id: 1, name: 'Товар А', category: 'Категория 1', price: 1500, stock: 25, warehouse: 'Основной склад', supplier: 'ООО "Поставщик 1"' },
    { id: 2, name: 'Товар Б', category: 'Категория 2', price: 2300, stock: 15, warehouse: 'Основной склад', supplier: 'ИП Смирнов' },
    { id: 3, name: 'Товар С', category: 'Категория 1', price: 890, stock: 42, warehouse: 'Склад №2', supplier: 'ООО "Поставщик 2"' },
  ];

  const clients = [
    { id: 1, name: 'ООО "Клиент 1"', contact: 'Директор Иванов', phone: '+7 (999) 111-22-33', email: 'client1@mail.ru', debt: 0, totalOrders: 15 },
    { id: 2, name: 'ИП Петров', contact: 'Петров И.И.', phone: '+7 (999) 222-33-44', email: 'petrov@mail.ru', debt: 5000, totalOrders: 8 },
    { id: 3, name: 'ООО "Клиент 2"', contact: 'Менеджер Сидоров', phone: '+7 (999) 333-44-55', email: 'client2@mail.ru', debt: 0, totalOrders: 23 },
  ];

  const payments = [
    { id: 1, date: '2024-01-15', client: 'ООО "Клиент 1"', amount: 25000, type: 'Поступление', status: 'completed', description: 'Оплата по счету №123' },
    { id: 2, date: '2024-01-14', client: 'ИП Петров', amount: 15000, type: 'Поступление', status: 'pending', description: 'Предоплата за товар' },
    { id: 3, date: '2024-01-13', client: 'Поставщик 1', amount: 30000, type: 'Расход', status: 'completed', description: 'Закупка товара' },
  ];

  const orders = [
    { id: 1, date: '2024-01-15', client: 'ООО "Клиент 1"', products: 'Товар А (5 шт.)', amount: 7500, status: 'completed' },
    { id: 2, date: '2024-01-14', client: 'ИП Петров', products: 'Товар Б (2 шт.)', amount: 4600, status: 'processing' },
    { id: 3, date: '2024-01-13', client: 'ООО "Клиент 2"', products: 'Товар С (10 шт.)', amount: 8900, status: 'shipped' },
  ];

  const tasks = [
    { id: 1, title: 'Инвентаризация склада', assignee: 'Сидоров П.М.', priority: 'high', status: 'in_progress', dueDate: '2024-01-20' },
    { id: 2, title: 'Подготовка отчета по продажам', assignee: 'Петрова А.С.', priority: 'medium', status: 'pending', dueDate: '2024-01-18' },
    { id: 3, title: 'Звонок клиенту по задолженности', assignee: 'Иванов И.И.', priority: 'high', status: 'completed', dueDate: '2024-01-16' },
  ];

  const getStatusBadge = (status: string, type: string = 'default') => {
    const variants = {
      active: 'bg-green-500/20 text-green-400 border-green-500',
      vacation: 'bg-yellow-500/20 text-yellow-400 border-yellow-500',
      completed: 'bg-green-500/20 text-green-400 border-green-500',
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500',
      processing: 'bg-blue-500/20 text-blue-400 border-blue-500',
      shipped: 'bg-purple-500/20 text-purple-400 border-purple-500',
      in_progress: 'bg-blue-500/20 text-blue-400 border-blue-500',
      high: 'bg-red-500/20 text-red-400 border-red-500',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500',
      low: 'bg-gray-500/20 text-gray-400 border-gray-500',
    };
    
    return <Badge className={variants[status] || 'bg-gray-500/20 text-gray-400 border-gray-500'}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* phpMyAdmin-style Header */}
      <header className="bg-[#4a6da7] text-white border-b-2 border-[#2c3e50]">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Database" size={24} />
              <h1 className="text-xl font-bold">Business CRM v1.0</h1>
              <span className="text-sm opacity-75">Локальная сеть - ИП Управление</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>Пользователь: admin</span>
              <span>|</span>
              <span>Сервер: localhost</span>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Icon name="LogOut" size={16} className="mr-1" />
                Выход
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-[#f8f9fa] border-b border-gray-300">
        <div className="px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="dashboard" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </TabsTrigger>
              <TabsTrigger 
                value="staff" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Персонал
              </TabsTrigger>
              <TabsTrigger 
                value="warehouses" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="Warehouse" size={16} className="mr-2" />
                Склады
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="Package" size={16} className="mr-2" />
                Товары
              </TabsTrigger>
              <TabsTrigger 
                value="clients" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="UserCheck" size={16} className="mr-2" />
                Клиенты
              </TabsTrigger>
              <TabsTrigger 
                value="payments" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="CreditCard" size={16} className="mr-2" />
                Платежи
              </TabsTrigger>
              <TabsTrigger 
                value="orders" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Заказы
              </TabsTrigger>
              <TabsTrigger 
                value="tasks" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="CheckSquare" size={16} className="mr-2" />
                Задачи
              </TabsTrigger>
              <TabsTrigger 
                value="reports" 
                className="px-4 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-[#4a6da7] data-[state=active]:bg-white data-[state=active]:text-[#4a6da7]"
              >
                <Icon name="BarChart3" size={16} className="mr-2" />
                Отчеты
              </TabsTrigger>
            </TabsList>

            {/* Dashboard */}
            <TabsContent value="dashboard" className="mt-6 px-4 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      Сотрудники
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#4a6da7]">{staff.length}</div>
                    <p className="text-xs text-gray-500">активных: {staff.filter(s => s.status === 'active').length}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      <Icon name="Package" size={16} />
                      Товары
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#4a6da7]">{products.length}</div>
                    <p className="text-xs text-gray-500">на складе: {products.reduce((sum, p) => sum + p.stock, 0)} шт.</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      <Icon name="UserCheck" size={16} />
                      Клиенты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#4a6da7]">{clients.length}</div>
                    <p className="text-xs text-gray-500">заказов: {clients.reduce((sum, c) => sum + c.totalOrders, 0)}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                      <Icon name="Ruble" size={16} />
                      Оборот
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">184,500₽</div>
                    <p className="text-xs text-gray-500">за текущий месяц</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Последние заказы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium">#{order.id} - {order.client}</div>
                            <div className="text-sm text-gray-600">{order.products}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-green-600">{order.amount.toLocaleString()}₽</div>
                            {getStatusBadge(order.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Задачи на сегодня</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tasks.filter(t => t.status !== 'completed').map((task) => (
                        <div key={task.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium">{task.title}</div>
                            <div className="text-sm text-gray-600">Исполнитель: {task.assignee}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(task.priority)}
                            {getStatusBadge(task.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Staff Management */}
            <TabsContent value="staff" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление персоналом</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить сотрудника
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>ФИО</TableHead>
                        <TableHead>Должность</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Зарплата</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {staff.map((employee) => (
                        <TableRow key={employee.id} className="hover:bg-gray-50">
                          <TableCell>{employee.id}</TableCell>
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell>{employee.position}</TableCell>
                          <TableCell>{employee.phone}</TableCell>
                          <TableCell>{employee.email}</TableCell>
                          <TableCell>{employee.salary.toLocaleString()}₽</TableCell>
                          <TableCell>{getStatusBadge(employee.status)}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Warehouses */}
            <TabsContent value="warehouses" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление складами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить склад
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {warehouses.map((warehouse) => (
                  <Card key={warehouse.id} className="border border-gray-300 shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{warehouse.name}</span>
                        <Badge variant="outline">ID: {warehouse.id}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Адрес:</span>
                          <div className="font-medium">{warehouse.address}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Заведующий:</span>
                          <div className="font-medium">{warehouse.manager}</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Заполненность</span>
                          <span>{warehouse.occupied}/{warehouse.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#4a6da7] h-2 rounded-full" 
                            style={{ width: `${(warehouse.occupied / warehouse.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="Edit" size={14} className="mr-1" />
                          Редактировать
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="Eye" size={14} className="mr-1" />
                          Просмотр
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Products */}
            <TabsContent value="products" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление товарами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить товар
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Категория</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Остаток</TableHead>
                        <TableHead>Склад</TableHead>
                        <TableHead>Поставщик</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id} className="hover:bg-gray-50">
                          <TableCell>{product.id}</TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.price.toLocaleString()}₽</TableCell>
                          <TableCell>
                            <span className={product.stock < 20 ? 'text-red-600 font-semibold' : ''}>
                              {product.stock} шт.
                            </span>
                          </TableCell>
                          <TableCell>{product.warehouse}</TableCell>
                          <TableCell>{product.supplier}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Clients */}
            <TabsContent value="clients" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление клиентами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить клиента
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Название/ФИО</TableHead>
                        <TableHead>Контактное лицо</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Задолженность</TableHead>
                        <TableHead>Заказов</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id} className="hover:bg-gray-50">
                          <TableCell>{client.id}</TableCell>
                          <TableCell className="font-medium">{client.name}</TableCell>
                          <TableCell>{client.contact}</TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>{client.email}</TableCell>
                          <TableCell>
                            <span className={client.debt > 0 ? 'text-red-600 font-semibold' : 'text-green-600'}>
                              {client.debt.toLocaleString()}₽
                            </span>
                          </TableCell>
                          <TableCell>{client.totalOrders}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Phone" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments */}
            <TabsContent value="payments" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление платежами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить платеж
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead>Клиент/Поставщик</TableHead>
                        <TableHead>Сумма</TableHead>
                        <TableHead>Тип</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Описание</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((payment) => (
                        <TableRow key={payment.id} className="hover:bg-gray-50">
                          <TableCell>{payment.id}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>{payment.client}</TableCell>
                          <TableCell>
                            <span className={payment.type === 'Поступление' ? 'text-green-600' : 'text-red-600'}>
                              {payment.type === 'Поступление' ? '+' : '-'}{payment.amount.toLocaleString()}₽
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge variant={payment.type === 'Поступление' ? 'default' : 'destructive'}>
                              {payment.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(payment.status)}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{payment.description}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Printer" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders */}
            <TabsContent value="orders" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление заказами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать заказ
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead>Клиент</TableHead>
                        <TableHead>Товары</TableHead>
                        <TableHead>Сумма</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id} className="hover:bg-gray-50">
                          <TableCell>#{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{order.products}</TableCell>
                          <TableCell className="font-semibold text-green-600">{order.amount.toLocaleString()}₽</TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Eye" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Printer" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tasks */}
            <TabsContent value="tasks" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Управление задачами</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать задачу
                </Button>
              </div>

              <Card className="border border-gray-300 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Задача</TableHead>
                        <TableHead>Исполнитель</TableHead>
                        <TableHead>Приоритет</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Срок</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tasks.map((task) => (
                        <TableRow key={task.id} className="hover:bg-gray-50">
                          <TableCell>{task.id}</TableCell>
                          <TableCell className="font-medium">{task.title}</TableCell>
                          <TableCell>{task.assignee}</TableCell>
                          <TableCell>{getStatusBadge(task.priority)}</TableCell>
                          <TableCell>{getStatusBadge(task.status)}</TableCell>
                          <TableCell>{task.dueDate}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Icon name="Check" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports */}
            <TabsContent value="reports" className="mt-6 px-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Отчеты и аналитика</h2>
                <Button className="bg-[#4a6da7] hover:bg-[#3a5a97]">
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт в Excel
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle>Финансовый отчет</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Общий доход:</span>
                      <span className="font-semibold text-green-600">+184,500₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Общий расход:</span>
                      <span className="font-semibold text-red-600">-120,000₽</span>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <span className="font-semibold">Прибыль:</span>
                      <span className="font-bold text-green-600">64,500₽</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle>Отчет по складу</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Всего товаров:</span>
                      <span className="font-semibold">{products.reduce((sum, p) => sum + p.stock, 0)} шт.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Стоимость остатков:</span>
                      <span className="font-semibold">{products.reduce((sum, p) => sum + (p.price * p.stock), 0).toLocaleString()}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Товаров с низким остатком:</span>
                      <span className="font-semibold text-red-600">{products.filter(p => p.stock < 20).length}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle>Отчет по клиентам</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Всего клиентов:</span>
                      <span className="font-semibold">{clients.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Общая задолженность:</span>
                      <span className="font-semibold text-red-600">{clients.reduce((sum, c) => sum + c.debt, 0).toLocaleString()}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Выполнено заказов:</span>
                      <span className="font-semibold">{clients.reduce((sum, c) => sum + c.totalOrders, 0)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-300 shadow-sm">
                  <CardHeader>
                    <CardTitle>Отчет по персоналу</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Всего сотрудников:</span>
                      <span className="font-semibold">{staff.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Фонд оплаты труда:</span>
                      <span className="font-semibold">{staff.reduce((sum, s) => sum + s.salary, 0).toLocaleString()}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>На рабочем месте:</span>
                      <span className="font-semibold text-green-600">{staff.filter(s => s.status === 'active').length}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}