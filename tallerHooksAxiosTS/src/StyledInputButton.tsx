import React from "react";

const StyledInputButton: React.FC = () => {
  return (
    <style>
      {`
        .input-text {
          padding: 10px;
          border: 2px solid #888;
          border-radius: 8px;
          margin-bottom: 10px;
          font-size: 16px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: border-color 0.3s, box-shadow 0.3satisfies;
        }
        .input-text:focus {
            border-color: #0056b3;
            box-shadow: 0 0 10px rgba(0, 86, 179, 0.5);
        }
        .btn {
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s, traform 0.1s;
        }
        .btn:active {
            background-color: #218838;
            transform: scale(0.95);
        }

`}
    </style>
  );
};

export default StyledInputButton;
