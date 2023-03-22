import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false)
  function handleClick() {
    setAddCart(!addCart)
  }
  const itemClass = addCart? "in-cart": ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addCart? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
