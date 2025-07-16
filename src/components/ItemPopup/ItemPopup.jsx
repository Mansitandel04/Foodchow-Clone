import React from 'react';
import "./ItemPopup.css";



const ItemPopup = ({item ,cat ,onClose , onAddToCart}) => {
 if(!item ) return null;
  return (
    <div className='popup-overlay'>
      <div className="popup-container">
         <button className="popup-close" onClick={onClose}>
          &times;
        </button>

        <div className="popup-content">
       <h4> {cat.CategoryName}</h4>
           <div className="popup-image">
            {item.ItemImage && (
             <img alt={item.itemName} src={`https://www.foodchow.com/DealImage/${item.ItemImage}`} />
            )}
           </div>
       

        <div className="popup-details">
          <h3>{item.ItemName}</h3>
            <p className="popup-description">{item.Description}</p>
            <div className="popup-price">Rs. {item.basePrice}</div>
          
          <div className="popup-actions">
             <div className="quantity-selector">
                <button className="quantity-btn">-</button>
                <span className="quantity">1</span>
                <button className="quantity-btn">+</button>
              </div>
               <button   className="add-to-cart-btn"
                onClick={() => {
                  onAddToCart(item);
                  onClose();
                }}>Add to cart</button>
               
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default ItemPopup;
