import React from "react";
import "./index.scss";

const Input = ({
  typeInput = "text",
  name,
  handleChange,
  handleBlur,
  value,
  error,
  placeholder,
  label,
  duplicateError = false,
}) => {
  const onChange = (e) => {
    handleChange(e.target.value, name);
  };

  return (
    <div className={`Input ${error ? "input-error" : ""}`}>
      <label>
        {label && <span className='label-text'>{label}</span>}
        <input
          type={typeInput}
          name={name}
          onBlur={handleBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        {error && <span className='error-t'>{error}</span>}
        {duplicateError && <span className='error-t'>{duplicateError}</span>}
      </label>
    </div>
  );
};

export default Input;

// const prova = () => {
//   const [text, setText] = useState("");

//   return (
//     <>
//       <Input
//         name={"name"}
//         handleChange={(e, name) => setText(e)}
//         value={text}
//       />
//     </>
//   );
// };