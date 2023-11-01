import propTypes from "prop-types";
const Button = ({
  children,
  type = "button",
  variant,
  loading = false,
  disabled = false,
  ...props
}) => {
  const variants = {
    fill: "px-5 py-3 rounded-xl bg-primary-500 text-white text-md leading-4",
    outline:
      "px-5 py-3 rounded-2xl border border-primary-500 text-primary-500 text-md leading-4 transition hover:bg-primary-500 hover:text-white",
  };

  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full ${variants[variant]} disabled:opacity-50`}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
Button.propTypes = {
  children: propTypes.node,
  type: propTypes.string,
  variant: propTypes.oneOf(["fill", "outline"]),
  loading: propTypes.bool,
  disabled: propTypes.bool,
};
export default Button;
