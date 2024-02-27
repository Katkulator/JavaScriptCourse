import { useState, useEffect } from "react";
import "./ShoppingListForm.css"

function ShoppingListForm({ onSubmit }) {

  const [formData, setFormData] = useState({
    product: "",
    quantity: 0
  });

  const [isButonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (!formData.product || !formData.product.trim() || !formData.quantity) setIsButtonDisabled(true)
    else setIsButtonDisabled(false)
  }, [formData.product, formData.quantity])

  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value
      }
    })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
    setFormData({ product: "", quantity: 0 })
  };

  return (
    <form className="ShoppingListForm" onSubmit={handleSubmit}>
      <label htmlFor="product">Enter Product Name</label>
      <input type="text"
        name="product"
        value={formData.product}
        placeholder="Product"
        id="product"
        onChange={handleChange}
      />
      <label htmlFor="quantity">Quantity</label>
      <input type="number"
        name="quantity"
        value={formData.quantity}
        placeholder="Quantity"
        id="quantity"
        onChange={handleChange}
      />
      <button
        className="add"
        disabled={isButonDisabled}
        onClick={handleSubmit}>
        Add Product
      </button>
    </form>
  );
}

export default ShoppingListForm;