import { NavLink } from "react-router";
import Button from "./Ui/Button";
export default function Header() {
  return (
    <header>
      <div className="m-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img src="#" alt="main logo" />
        <nav className="header-nav flex items-center gap-8 text-sm font-medium text-(--text-gray)">
          <NavLink to="/" className="header-link">
            О нас
          </NavLink>
          <NavLink to="/" className="header-link">
            Услуги
          </NavLink>
          <NavLink to="/" className="header-link">
            Кейсы
          </NavLink>
          <NavLink to="/" className="header-link">
            Тарифы
          </NavLink>
          <NavLink to="/" className="header-link">
            Статьи
          </NavLink>
          <NavLink to="/" className="header-link">
            Контакты
          </NavLink>
        </nav>
        <Button>Получить консультацию</Button>
      </div>
    </header>
  );
}
