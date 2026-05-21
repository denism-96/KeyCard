export default function ServicesSection() {
  return (
    <section className="p-24">
      <div className="m-auto max-w-7xl text-center">
        <span className="mb-5 inline-block rounded-full border border-[#f5790518] bg-[#ff7a0018] px-3 text-(--text-orange)">
          Услуги
        </span>
        <h2 className="mb-16 text-5xl font-black text-balance">
          Комплексные digital-услуги для роста вашего{" "}
          <span className="gradient-orange">бизнеса</span>
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7a0018]">
              <img className="" src="/images/circle.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Таргетированная реклама</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Запускаем рекламу в социальных сетях, привлекаем целевую аудиторию
              и увеличиваем поток заявок.
            </p>
          </article>
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00d8ff18]">
              <img className="" src="/images/search.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Контекстная реклама</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Настраиваем рекламные кампании в поисковых системах и приводим
              горячих клиентов.
            </p>
          </article>
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7a0018]">
              <img className="" src="/images/people.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">SMM продвижение</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Развиваем социальные сети, повышаем узнаваемость бренда и
              вовлеченность аудитории.
            </p>
          </article>
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00d8ff18]">
              <img className="" src="/images/pc.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Создание сайтов</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Разрабатываем современные сайты, лендинги и корпоративные
              платформы, которые конвертируют посетителей в клиентов.
            </p>
          </article>
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff7a0018]">
              <img className="" src="/images/arrow.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">SEO продвижение</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Повышаем позиции сайта в поиске и привлекаем стабильный
              органический трафик.
            </p>
          </article>
          <article className="article-content p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00d8ff18]">
              <img className="" src="/images/paint.svg" alt="" />
            </div>
            <h3 className="mb-3 text-lg font-bold">Branding & Design</h3>
            <p className="mb-5 text-sm text-(--text-gray)">
              Создаем фирменный стиль, визуальные концепции и дизайн, который
              усиливает бренд.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
