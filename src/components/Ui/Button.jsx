export default function Button({ children, bgStyle, className, ...props }) {
  const styleBtn = bgStyle === "secondary" ? "secondary" : "primary";
  return (
    <button
      className={`${className} btn btn_${styleBtn} py-2 px-5 rounded-lg `}
      {...props}
    >
      {children}
    </button>
  );
}
