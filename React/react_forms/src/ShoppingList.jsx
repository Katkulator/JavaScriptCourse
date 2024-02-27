import { useState, useEffect } from "react"
import { v4 as uuid } from 'uuid'
import ShoppingListForm from "./ShoppingListForm"
import "./ShoppingList.css"


function ShoppingList() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(currItems => {
      return [
        ...currItems, { ...item, id: uuid(), product: item.product.trim() }]
    })
  }

  const handleEsc = (evt) => {
    if (evt.key === "Escape") {
      setItems(oldItems => {
        const updatedItems = [...oldItems]
        updatedItems.pop()
        return updatedItems
      })
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter(e => e.id !== id)
    })
  }


  return (
    <>
      <div>
        <h1>Shopping List</h1>
        <ul>
          {items.map(item =>
            <li
              className="list"
              key={item.id}>
              {item.product} - {item.quantity}
              <button
                className="delete"
                onClick={() => deleteItem(item.id)}>
                x
              </button>
            </li>)}
        </ul>
      </div>
      <ShoppingListForm onSubmit={addItem} />
    </>
  );
}

export default ShoppingList