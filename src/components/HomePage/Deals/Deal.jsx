import React from 'react';
import './Deal.css';
const Deal = ({ imgurl , alt , title , subtitle , price  }) => {
  return (
    <>
    <div className="deal-cards">
    
            <div className="upperpart">
              <img
                src={imgurl}
                alt={alt}
              />
              <div className="row p-3 pb-0">
                <h5 className="col-8">{title}</h5>
                <p className="col-8 ">{subtitle}</p>
                <p className=" col-4"> Rs.{price}</p>
             
            </div>
     
          </div> <hr />
           <div className="lowerpart pb-3">
            <ul><li>
           Take away</li>
           <li>
           Dine in</li>
           <li>
           Delivert</li></ul>
           <button>Add  +</button>
           </div>
        </div>
    </>
  );
}

export default Deal;
