import Button from "./Ui/Button";
export default function HeroSection() {
  return (
    <section className="relative bg-linear-[135deg,#050b18f2_40%,#050b18f2_100%]">
      <img
        className="absolute top-0 z-0 h-[-webkit-fill-available] w-full content-stretch object-cover opacity-5"
        src="/images/bg_hero.jpg"
        alt=""
      />

      <div className="relative z-10 m-auto max-w-4xl pt-24 pb-16">
        <span className="mb-8 inline-block rounded-full border px-4 py-2 text-xs text-(--text-orange)">
          Digital-маркетинг полного цикла
        </span>
        <h1 className="mb-6 text-7xl font-bold">
          Приводим <br /> клиентов <br /> и увеличиваем{" "}
          <span className="gradient-orange">продажи</span> через рекламу
        </h1>
        <span className="mb-10 inline-block text-(--text-gray)">
          Комплексный digital-маркетинг для бизнеса любого масштаба
        </span>
        <div className="[&>button]:px-8 [&>button]:py-4">
          <Button className="mr-4">Получить консультацию</Button>
          <Button bgStyle={"secondary"}>Смотреть кейсы</Button>
        </div>
        <div className="mt-16 flex gap-8 border-t border-[#ffffff14] pt-8">
          <div className="">
            <p className="text-3xl font-bold text-(--text-orange)">5+</p>
            <span className="font-light text-(--text-gray)">лет опыта</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-(--text-orange)">120+</p>
            <span className="text-(--text-gray)">проектов</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-(--text-orange)">35%</p>
            <span className="text-(--text-gray)">рост продаж</span>
          </div>
        </div>
      </div>
    </section>
  );
}
