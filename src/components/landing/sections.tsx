import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Продажи открыты</Badge>,
    title: "Доминируй на сервере.",
    showButton: true,
    buttonText: 'Купить чит'
  },
  {
    id: 'about',
    title: 'Почему наш чит?',
    content: 'Стабильный софт с автообновлениями, незаметный обход анти-читов и поддержка последних версий Minecraft.'
  },
  {
    id: 'features',
    title: 'Что внутри',
    content: 'KillAura, Fly, Speed, X-Ray, AutoClicker и десятки других функций. Гибкие настройки и удобное меню под любую задачу.'
  },
  {
    id: 'safety',
    title: 'Безопасность',
    content: 'Защита от бана, чистый код без логгеров и вирусов. Тысячи игроков уже используют наш чит каждый день.'
  },
  {
    id: 'buy',
    title: 'Готов начать?',
    content: 'Выбери подписку, оплати удобным способом и получи доступ к читу мгновенно. Поддержка 24/7.',
    showButton: true,
    buttonText: 'Получить чит'
  },
]