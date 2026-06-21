import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Haruka Client — доступен</Badge>,
    title: "Тебя убивают снова и снова.",
    showButton: true,
    buttonText: 'Узнать решение'
  },
  {
    id: 'about',
    title: 'А что если всё изменить?',
    content: 'Пока другие умирают — ты побеждаешь. Haruka Client даёт то, чего нет у остальных: точность, скорость и невидимость.'
  },
  {
    id: 'features',
    title: 'Твоё преимущество.',
    content: 'KillAura, Fly, Speed, X-Ray, AutoClicker и десятки модулей. Один клиент — и баланс сил меняется навсегда.'
  },
  {
    id: 'safety',
    title: 'Они не узнают.',
    content: 'Обход анти-читов, чистый код без вирусов. Тысячи игроков уже играют с Haruka — и остаются невидимыми.'
  },
  {
    id: 'pricing',
    title: 'Выбери свой план.',
    showPricing: true,
    plans: [
      { name: 'Сезон', price: '149₽', period: '7 дней' },
      { name: 'Месяц', price: '299₽', period: '30 дней' },
      { name: '2 месяца', price: '499₽', period: '60 дней' },
      { name: '3 месяца', price: '699₽', period: '90 дней', highlight: true },
      { name: 'Навсегда', price: '1499₽', period: '∞' },
    ]
  },
  {
    id: 'buy',
    title: 'Хватит проигрывать.',
    content: 'Получи Haruka Client прямо сейчас. Оплата за секунды — и ты уже на другой стороне.',
    showButton: true,
    buttonText: 'Получить Haruka'
  },
]