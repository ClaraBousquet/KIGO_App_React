import React from "react";

const CustomInput = ({ state, label, type, callable }) => {
  return (
    <div className="mb-4 mt-4 ml-4 mr-4">
      <label htmlFor={state} className="block text-purple-700 font-bold mb-2 ">
        {label}
      </label>
      <input
        type={type}
        className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        value={state}
        placeholder=""
        onChange={callable}
        style={{ color: "purple" }}
      />
    </div>
  );
};

export default CustomInput;
