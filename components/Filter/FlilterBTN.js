import React from "react";

const FlilterBTN = ({ name, intex, item,task,setPageNumber}) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={()=>{
            setPageNumber(1);
            task(item)
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${intex}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${intex}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FlilterBTN;
