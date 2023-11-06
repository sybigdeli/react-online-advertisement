import Eye from "@/assets/icons/eye.svg";
import EyeSlash from "@/assets/icons/eye-slash.svg";
import { useId, useState } from "react";
import propTypes from "prop-types";

const FormLogin = ({
  inputName,
  inputType = "text",
  label,
  placeHolder,
  onChange,
  error,
  value,
}) => {
  const _id = useId();
  const localId = inputName || _id;
  const [localType, setLocalType] = useState(inputType);
  return (
    <div className="w-full flex flex-col gap-2 border-neutral-200 items-start">
      {label && (
        <label htmlFor={localId} className="text-slate-500 text-xs md:text-sm font-normal">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={localType}
          id={localId}
          placeholder={placeHolder}
          value={value}
          className={`w-full rounded-3xl border p-2 placeholder:text-zinc-300 placeholder:text-sm placeholder:text-center text-lg font-normal transition border-primary-500 focus:outline-primary-700 ${
            error && "border-red-600"
          } custom-file-button`}
          onChange={onChange}
        />
        {inputType === "password" && (
          <button
            type="button"
            className="bg-none outline-none absolute h-full w-12 left-0 top-0 flex items-center justify-center"
            onClick={() => {
              setLocalType((prev) =>
                prev === "password" ? "text" : "password"
              );
            }}
          >
            <img
              src={localType !== "password" ? EyeSlash : Eye}
              className="opacity-60"
            />
          </button>
        )}
      </div>

      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
};

FormLogin.propTypes = {
  inputName: propTypes.string,
  inputType: propTypes.string,
  label: propTypes.string,
  placeHolder: propTypes.string,
  onChange: propTypes.func,
  error: propTypes.string,
  value: propTypes.string,
};

export default FormLogin;
