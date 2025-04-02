import React, { JSX } from "react";

type DeleteButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="ml-2 text-gray-400 hover:text-red-600 transition-colors"
      aria-label="削除"
    >
      削除する
    </button>
  );
};

export default DeleteButton;
