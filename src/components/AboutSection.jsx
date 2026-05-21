export default function AboutSection() {
  return (
    <section>
      <div className="m-auto grid max-w-7xl grid-cols-2 items-center">
        <div>
          <span className="mb-5 inline-block rounded-full border border-[#397b86] px-2 text-sm text-[#00d8ff]">
            О нас
          </span>
          <h2 className="mb-6 text-5xl font-black">
            Создаем digital-системы, которые{" "}
            <span className="gradient-blue">приносят заявки</span>
          </h2>
          <p className="mb-6 text-base text-balance text-(--text-gray)">
            Мы — digital-агентство полного цикла. Помогаем бизнесу привлекать
            клиентов, увеличивать продажи и масштабировать рекламу за счёт
            точной аналитики, сильных креативов и комплексной маркетинговой
            стратегии.
          </p>
          <div className="grid grid-cols-2 items-center justify-between gap-4">
            <div className="rounded-2xl border border-[#ffffff14] bg-(--bg-article) p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff7a001a]">
                <img className="" src="/images/icon1.svg" alt="" />
              </div>
              <p className="mb-1 text-sm">Увеличение продаж</p>
              <p className="text-xs text-(--text-gray)">
                Стратегии,направленные на рост выручки
              </p>
            </div>
            <div className="rounded-2xl border border-[#ffffff14] bg-(--bg-article) p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff7a001a]">
                <img className="" src="/images/icon2.svg" alt="" />
              </div>
              <p className="mb-1 text-sm">Настройка рекламы</p>
              <p className="text-xs text-(--text-gray)">
                Точный таргетинг и контекст
              </p>
            </div>
            <div className="rounded-2xl border border-[#ffffff14] bg-(--bg-article) p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff7a001a]">
                <img className="" src="/images/icon3.svg" alt="" />
              </div>
              <p className="mb-1 text-sm">Аналитика</p>
              <p className="text-xs text-(--text-gray)">
                Контроль эффективности каждой компании
              </p>
            </div>
            <div className="rounded-2xl border border-[#ffffff14] bg-(--bg-article) p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff7a001a]">
                <img className="" src="/images/icon4.svg" alt="" />
              </div>
              <p className="mb-1 text-sm">Креативные решения</p>
              <p className="text-xs text-(--text-gray)">
                Визуалы,офферы,рекламные связки
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-end">
          <img
            className="max-h-105 w-full max-w-146 rounded-2xl object-cover"
            src="/images/digital_systems.jpg"
            alt=""
          />
          <div className="absolute bottom-6 left-5 rounded-2xl border border-[#ffffff14] bg-(--bg-article) p-4">
            <p className="mb-1 text-3xl font-black text-(--text-orange)">
              8.2x
            </p>
            <span className="text-xs text-(--text-gray)">
              средний ROAS клиентов
            </span>
          </div>
        </div>
      </div>
      <div className="m-auto mt-20 grid max-w-7xl grid-cols-4 gap-4">
        <div className="rounded-2xl bg-(--bg-article) p-6 text-center">
          <p className="text-5xl font-black text-(--text-orange)">5+</p>
          <span className="text-sm text-(--text-gray)">лет на рынке</span>
        </div>
        <div className="rounded-2xl bg-(--bg-article) p-6 text-center">
          <p className="text-5xl font-black text-(--text-orange)">120+</p>
          <span className="text-sm text-(--text-gray)">
            реализованных проектов
          </span>
        </div>
        <div className="rounded-2xl bg-(--bg-article) p-6 text-center">
          <p className="text-5xl font-black text-(--text-orange)">35%</p>
          <span className="text-sm text-(--text-gray)">
            средний рост продаж
          </span>
        </div>
        <div className="rounded-2xl bg-(--bg-article) p-6 text-center">
          <p className="text-5xl font-black text-(--text-orange)">3x</p>
          <span className="text-sm text-(--text-gray)">
            рост количества лидов
          </span>
        </div>
      </div>
    </section>
  );
}
