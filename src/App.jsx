import ShoppingList from "./shoppingList";
import { useRef, useState } from "react";


function App() {
  const [list, setList ]= useState([]);
  const inputAdd = useRef();

  const addItem = () => {
    const newList = [...list];
    const itemInput = inputAdd.current.value;

    // Add item if input is not empty 
    if (itemInput !== "") {
      newList.push (itemInput);
      setList(newList);

      inputAdd.current.value = "";
    }
  };

  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-4">
      <h1 className="text-3xl text-bold">Shopping List</h1>

      <div className="flex w-full gap-2">
        <input className="w-full border border-purple-300 rounded-md px-2"
        type="text" 
        placeholder="write item" 
        ref={inputAdd} />
      
        <button className="rounded-md bg-purple-500 
        text-white px-2 cursor-pointer 
        hover:bg-purple-400 transition"
        onClick={() => addItem()}>Insert</button>
      </div>
      {/** Show the items if the list is not empty */}
      {list.length > 0 ? (
        <ul className="flex w-full flex-col gap-2">
          {list.map((shoppingList, index) => (
            <ShoppingList 
            key={index} 
            shoppingList={shoppingList} 
            list={list}
            setList= {setList}/>
          ))}
          </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
}

export default App
