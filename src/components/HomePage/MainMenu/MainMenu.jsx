import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainMenu.css";
import Deal from "../Deals/Deal";
import Searchbar from "../Searchbar/Searchbar";

const MainMenu = ({ setActiveCategoryId }) => {
  const [deals, setDeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        setError("Failed to load menu");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveCategoryId(visible.target.getAttribute("data-id"));
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".category-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories, setActiveCategoryId]);

  const getDealImageUrl = (name) => `https://www.foodchow.com/DealImage/${name}`;
  const getItemImageUrl = (name) => `https://www.foodchow.com/ItemImage/${name}`;

  if (loading) return <div className="main-menu">Loading...</div>;
  if (error) return <div className="main-menu">{error}</div>;

  return (
    <div className="main-menu ">
      <Searchbar />

      {/* Deals */}
      {deals.length > 0 && (
        <div className="deal">
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

      {/* Menu by Categories */}
  <div className="categories-menus">
  {categories.map((cat) => {
    console.log("Category data:", cat); // Debug entire category
    return (
      <div
        key={cat.CategryId}
        id={`category-${cat.CategryId}`}
        data-id={cat.CategryId}
        className="category-section"
      >
    <div className="category-box m-2">
        <div className="category-header p-3  ">
          <h4>{cat.CategryName}</h4>
          <span className="item-count">{cat.ItemListWidget?.length || 0} items</span>
       
       </div> 
      
        <div className="menu-items ">
          {cat.ItemListWidget?.map((item) => {
            const imageUrl = item.ItemImage ? getItemImageUrl(item.ItemImage) : null ;
            console.log("Item image URL:", imageUrl); // Debug image URL
            return (
              <div className="menu-item-card" key={item.ItemId}>
                <div className="menu-item-content">
                  <div className="menu-item-text">
                    <h5>{item.ItemName}</h5>
                    {item.Description && <p className="item-description">{item.Description}</p>}
                    <div className="price-container">
                      <span className="price">Rs. {item.basePrice}</span>
                      {item.isSoldOut && <span className="sold-out">Sold Out</span>}
                    </div>
                  </div>
                  {imageUrl && (
                    <div className="menu-item-image">
                      <img 
                        src={imageUrl} 
                        alt={item.ItemName} 
                      />
                     
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
    );
  })}
</div>
    </div>
  );
};

export default MainMenu;