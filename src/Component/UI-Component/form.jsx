const Form = ({ id, type, value, onChange = () => {}, label }) => {
  return (
    <>
      <div className="relative">
        <input
          type={`${type}`}
          id={`${id}`}
          value={value}
          onChange={onChange}
          className="peer px-4 pt-6 pb-2 w-full text-sm border-none bg-brown-100 rounded-2xl placeholder-transparent focus:outline-none font-poppins"
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-2 text-xs text-white font-montserrat transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Form;
