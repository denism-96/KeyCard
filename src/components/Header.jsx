import { NavLink } from "react-router";
import Button from "./Ui/Button";
export default function Header() {
  return (
    <header>
      <div>
        <img src="#" alt="main logo" />
        <nav>
          <NavLink to="/">О нас</NavLink>
          <NavLink to="/">Услуги</NavLink>
          <NavLink to="/">Кейсы</NavLink>
          <NavLink to="/">Тарифы</NavLink>
          <NavLink to="/">Статьи</NavLink>
          <NavLink to="/">Контакты</NavLink>
        </nav>
        <Button>Получить консультацию</Button>
      </div>
    </header>
  );
}
