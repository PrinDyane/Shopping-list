import React from 'react'

const ShoppingList = ({shoppingList, setList, list}) => {
  const removeItem = () => {
    const newList = [...list];
    const remove = newList.filter(
      (atualItem) => atualItem !== shoppingList
    );
    setList(remove)
  };
  return (
    <li className="flex justify-between gap-2">
      <p>{shoppingList}</p>
      <button className="rounded-md 
      bg-purple-500 
      text-white px-2 cursor-pointer 
      hover:bg-purple-400 transition"
      onClick={() => removeItem ()}>Remove</button>
    </li>
  );
};

export default ShoppingList;