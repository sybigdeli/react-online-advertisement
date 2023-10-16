const Button = ({ children, variant, ...props }) => {
  const variants = {
    fill: "w-[150px] h-[42px] rounded-[20px] bg-primary-500 text-white text-[16px] font-semibold leading-4",
    outline: "w-[120px] h-[42px] rounded-[30px] border border-primary-500 text-primary-500 text-[16px] font-semibold leading-4 hover:bg-primary-500 ",
  };

  return (
    <button className={`${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
