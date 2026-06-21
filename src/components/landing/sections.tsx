import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Haruka Client — доступен</Badge>,
    title: "Haruka Client.",
    showButton: true,
    buttonText: 'Купить Haruka'
  },
  {
    id: 'about',
    title: 'Почему Haruka?',
    content: 'Стабильный клиент с автообновлениями, незаметный обход анти-читов и поддержка актуальных версий Minecraft.'
  },
  {
    id: 'features',
    title: 'Возможности',
    content: 'KillAura, Fly, Speed, X-Ray, AutoClicker и десятки других модулей. Удобное меню, гибкие настройки, красивый интерфейс.'
  },
  {
    id: 'safety',
    title: 'Безопасность',
    content: 'Обход популярных анти-читов, чистый код без вирусов и логгеров. Тысячи игроков уже доверяют Haruka Client.'
  },
  {
    id: 'buy',
    title: 'Готов к игре?',
    content: 'Выбери подписку, оплати удобным способом и получи Haruka Client мгновенно. Поддержка 24/7.',
    showButton: true,
    buttonText: 'Получить Haruka'
  },
]