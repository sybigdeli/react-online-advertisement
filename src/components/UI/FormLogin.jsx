import { useId } from "react";

const FormLogin = ({ inputName, inputType, label, placeHolder, onChange }) => {
  const _id = useId;
  const localId = inputName || _id;
  return (
    <div className="w-full flex flex-col gap-2 border-neutral-200 items-start">
      {label && (
        <label htmlFor={localId} className="text-slate-500 text-sm font-normal">
          {label}
        </label>
      )}
      <input
        type={inputType}
        id={localId}
        placeholder={placeHolder}
        className="w-full rounded-3xl border p-2 placeholder:text-zinc-200 text-lg font-normal transition focus:outline-primary-500"
        onChange={onChange}
      />
    </div>
  );
};

export default FormLogin;
