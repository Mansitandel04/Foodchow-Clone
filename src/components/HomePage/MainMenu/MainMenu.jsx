import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainMenu.css";
import Deal from "../Deals/Deal";
import Searchbar from "../Searchbar/Searchbar";
import Categories from "../Categories/Categories";
import ItemPopup from "../../ItemPopup/ItemPopup";


const MainMenu = () => {
  const [deals, setDeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const[selectedItem , setSelectedItem]=useState(null);
  const [showPopup , setShowPopup] =useState(false);
   const[selectedCategory ,  setSelectedCategory]=useState(null);
 

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.foodchow.com/api/FoodChowWD/GetRestaurantMenuWDWidget_multi?ShopId=3161&locale_id=null"
      );
      const parsedData = JSON.parse(response.data.data);
      setDeals(parsedData.DealList || []);
      setCategories(parsedData.CategoryList || []);
    } catch (err) {
      console.error("Error fetching menu:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getItemImageUrl = (name) => `https://www.foodchow.com/DealImage/${name}`;
  console.log('image got');
  const getDealImageUrl = (name) => `https://www.foodchow.com/DealImage/${name}`;

  

const handleAddClick =(item ,cat)=>{
  setSelectedItem(item);
  setSelectedCategory(cat)
  setShowPopup(true);
};
 const handleAddCart =()=>{
  console.log("added to cart :" , item)
 };
if (loading) return <div className="main-menu">Loading...</div>;
  return (
    <div className="menu-container">
     {showPopup && (<ItemPopup 
     item={selectedItem}
     cat={selectedCategory}
     onClose={()=>setShowPopup(false)}
     onAddToCart={handleAddCart}
     />)

     }

      <div className="main-menu">
        <Searchbar />

        {/* Deals Section */}
        {deals.length > 0 && (
          <div className="deal" id="deals-section">
            <h5 className="card-header">Deals</h5>
            <p className="text-muted">{deals.length} items</p>
            <div className="alldeals">
              {deals.map((deal) => (
                <Deal
                  key={deal.DealId}
                  imgurl={getDealImageUrl(deal.DealImage)}
                  alt={deal.DealName}
                  title={deal.DealName}
                  subtitle={deal.DealDesc}
                  price={deal.DealPrice}
                />
              ))}
            </div>
          </div>
        )}

        {/* Categories Sections */}
        <div className="categories-menus">
          {categories.map((cat) => (
            <div
              key={cat.CategryId}
              id={`category-${cat.CategryId}`}
              className="category-section"
            >
              <div className="category-box m-2 shadow ">
                <div className="category-header p-3">
                  <h4>{cat.CategryName}</h4>
                  <span className="item-count">{cat.ItemListWidget?.length || 0} items</span>
                </div>

                <div className="menu-items">
                  {cat.ItemListWidget?.map((item) => {
                    const imageUrl = item.ItemImage ? getItemImageUrl(item.ItemImage) : null;

                    return (
                      <div className="menu-item-card " key={item.ItemId}>
                        <div className="menu-item-content">
                          <div className="menu-item-text">
                            <h5 >{item.ItemName}</h5>
                            {item.Description && (
                              <p className="item-description">{item.Description}</p>
                            )}
                            <div className="price-container">
                              <span className="price">Rs. {item.basePrice}</span>
                              {item.isSoldOut && <span className="sold-out">Sold Out</span>}
                            </div>
                            <button className="additem" onClick={()=>handleAddClick(item , cat)}>Add +</button>
                          </div>

                          {imageUrl && (
                            <div className="menu-item-image">
                              <img src={imageUrl} alt={item.ItemName} />
                            </div>
                          )}
                        </div>
                        <div className="divider"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;