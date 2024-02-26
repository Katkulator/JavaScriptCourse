import { useState } from "react";
import "./ShoppingListForm.css"

function ShoppingListForm({onSubmit}){
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });

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
        setFormData({product: "", quantity: 0})
    };

    return(
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
                step={1}
                onChange={handleChange}
            />
            <button
                className="add"
                disabled={!formData.product || !formData.quantity}
                onClick={handleSubmit}>
                    Add Product
            </button>
        </form>
    );
}

export default ShoppingListForm;