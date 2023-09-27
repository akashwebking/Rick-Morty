import React from 'react';

const InputGroup = ({ total, setID, name }) => {
  const handleChange = (e) => {
    setID(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <select className="form-select" id={name} onChange={handleChange}>
        <option defaultValue value={1}>Choose...</option>
        {[...Array(total).keys()].map((val, index) => {
          return (
            <option key={val} value={val + 1}>
              {`${name} ${val + 1}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
