const Button = ({ children, variant, ...props }) => {
  const variants = {
    fill: "px-5 py-3 rounded-xl bg-primary-500 text-white text-md leading-4",
    outline: "px-5 py-3 rounded-2xl border border-primary-500 text-primary-500 text-md leading-4 transition hover:bg-primary-500 hover:text-white",
  };

  return (
    <button className={`${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
