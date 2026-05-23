import Button from "./Ui/Button";

export default function Audit() {
  return (
    <section className="bg-[linear-gradient(135deg,rgba(255,122,0,0.08),rgba(0,216,255,0.05))] py-20">
      <div className="m-auto flex max-w-7xl flex-col items-center">
        <h2 className="mb-6 text-center text-5xl font-black">
          Готовы увеличить <br />{" "}
          <span className="gradient-orange">продажи?</span>
        </h2>
        <p className="mb-10 text-[16px] text-(--text-gray)">
          Оставьте заявку — проведём бесплатный аудит текущей рекламы и покажем
          точки роста
        </p>
        <Button>Получить аудит рекламы</Button>
      </div>
    </section>
  );
}
