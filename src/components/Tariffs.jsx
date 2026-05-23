import Button from "./Ui/Button";

export default function Tariffs() {
  return (
    <section className="bg-[#0b1224] py-20">
      <div className="m-auto max-w-7xl text-center">
        <span className="mb-5 inline-block rounded-full border border-[#f5790518] bg-[#ff7a0018] px-3 text-(--text-orange)">
          Тарифы
        </span>
        <h2 className="mb-10 text-5xl font-black">
          Выберите формат работы
          <br />
          <span className="gradient-orange">под ваши задачи</span>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <article className="article-content flex h-120 flex-col justify-between p-8">
            <div>
              <p className="text-2xl font-black">Start</p>
              <h3 className="mb-1 text-4xl font-black">
                от 30 000{" "}
                <span className="text-[16px] text-(--text-gray)">₽/мес</span>
              </h3>
              <p className="mb-6 text-sm text-(--text-gray)">
                Подходит для малого бизнеса и тестового запуска рекламы
              </p>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              <li>Анализ ниши</li>
              <li>Настройка рекламного кабинета</li>
              <li>Запуск одной рекламной компании</li>
              <li>Базовая Аналитика</li>
              <li>Ежемесячный отчет</li>
            </ul>
            <Button bgStyle={"secondary"} className="w-full">
              Оставить заявку
            </Button>
          </article>
          <article className="article-content flex h-120 flex-col justify-between p-8">
            <div>
              <p className="text-2xl font-black">Business</p>
              <h3 className="mb-1 text-4xl font-black">
                от 70 000{" "}
                <span className="text-[16px] text-(--text-gray)">₽/мес</span>
              </h3>
              <p className="mb-6 text-sm text-(--text-gray)">
                Для системного роста и масштабирования рекламы.
              </p>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              <li>Маркетинговая стратегия</li>
              <li>Запуск нескольких рекламных каналов</li>
              <li>A/B тестирование креативов</li>
              <li>Сквозная аналитика</li>
              <li>Еженедельная оптимизация</li>
              <li>Подробный отчёт по KPI</li>
            </ul>
            <Button className="w-full">Оставить заявку</Button>
          </article>
          <article className="article-content flex h-120 flex-col justify-between p-8">
            <div>
              <p className="text-2xl font-black">Start</p>
              <h3 className="mb-1 text-4xl font-black">
                от 30 000{" "}
                <span className="text-[16px] text-(--text-gray)">₽/мес</span>
              </h3>
              <p className="mb-6 text-sm text-(--text-gray)">
                Подходит для малого бизнеса и тестового запуска рекламы
              </p>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              <li>Анализ ниши</li>
              <li>Настройка рекламного кабинета</li>
              <li>Запуск одной рекламной компании</li>
              <li>Базовая Аналитика</li>
              <li>Ежемесячный отчет</li>
            </ul>
            <Button bgStyle={"secondary"} className="w-full">
              Оставить заявку
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
