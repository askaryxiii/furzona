const InputField = ({ name, label, error, type = "text", ref, ...rest }) => {
  return (
    <div>
      {error && <span className="text-[#b00] text-sm ">{error.message}</span>}
      <input
        name={name}
        type={type}
        ref={ref}
        {...rest}
        placeholder={name}
        className="w-full border px-5 py-2 rounded"
      />
    </div>
  );
};

export default InputField;
