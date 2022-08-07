import React, { useReducer } from "react";
import "./Menu.css";
// import Total from "./Total";

export const data = [{ food: "Biryani", amount: 240, count: 1 }];

const Menu = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Biryani":
        return [...state, { food: "Biryani", amount: 240, count: 1 }];
      case "Kadhai Veg":
        return [...state, { food: "Kadhai Veg", amount: 180, count: 1 }];
      case "Butter Paneer":
        return [...state, { food: "Butter Paneer", amount: 210, count: 1 }];
      case "Punjabi Chole":
        return [...state, { food: "Punjabi Chole", amount: 150, count: 1 }];
      case "Veg Dum Biryani":
        return [...state, { food: "Veg Dum Biryani", amount: 220, count: 1 }];
      case "Daal e Dum":
        return [...state, { food: "Daal e Dum", amount: 160, count: 1 }];
      case "Steamed Rice":
        return [...state, { food: "Steamed Rice", amount: 80, count: 1 }];
      case "Garlic Naan":
        return [...state, { food: "Garlic Naan", amount: 30, count: 1 }];
      case "Tandoori Roti":
        return [...state, { food: "Tandoori Roti", amount: 6, count: 1 }];
      case "Leaf Salad":
        return [...state, { food: "Leaf Salad", amount: 60, count: 1 }];
      case "Chocolate Brownie":
        return [...state, { food: "Chocolate Brownie", amount: 90, count: 1 }];
      default:
        return;
    }
  };
  const [foodlist, dispatch] = useReducer(reducer, data);
  let biryanicount = () => {
    return foodlist.filter((x) => {
      return x.food === "Biryani";
    }).length;
  };

  let kadhaivegcount = () => {
    return foodlist.filter((x) => {
      return x.food === "Kadhai Veg";
    }).length;
  };

  let butterpaneercount = () => {
    return foodlist.filter((x) => {
      return x.food === "Butter Paneer";
    }).length;
  };

  let punjabicholecount = () => {
    return foodlist.filter((x) => {
      return x.food === "Punjabi Chole";
    }).length;
  };

  let vegdumbiryanicount = () => {
    return foodlist.filter((x) => {
      return x.food === "Veg Dum Biryani";
    }).length;
  };

  let daaledumcount = () => {
    return foodlist.filter((x) => {
      return x.food === "Daal e Dum";
    }).length;
  };

  let steamedricecount = () => {
    return foodlist.filter((x) => {
      return x.food === "Steamed Rice";
    }).length;
  };

  let garlicnaamcount = () => {
    return foodlist.filter((x) => {
      return x.food === "Garlic Naan";
    }).length;
  };

  let tandooriroticount = () => {
    return foodlist.filter((x) => {
      return x.food === "Tandoori Roti";
    }).length;
  };

  let leafsaladcount = () => {
    return foodlist.filter((x) => {
      return x.food === "Leaf Salad";
    }).length;
  };

  let chocolatebrowniecount = () => {
    return foodlist.filter((x) => {
      return x.food === "Chocolate Brownie";
    }).length;
  };

  return (
    <div className="main-box">
      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Chicken Biryani</div>
          <div className="font-sub">
            Hyderabadi style biryani, used basmati rice with fortune oil.
          </div>
          <div className="font-sub">Price: 240 INR</div>
        </div>
        <div className="main-content-addon">
          <div className="font">Total:-{biryanicount()}</div>
          {/* <Total foodarray={foodlist} fooddefault="Biryani" /> */}
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Biryani" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Kadhai Veg</div>
          <div className="font-sub">Northern style khadhai veg. Mixed veg.</div>
          <div className="font-sub">Price: 180 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{kadhaivegcount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Kadhai Veg" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Butter Paneer</div>
          <div className="font-sub">
            Punjabi style butter paneer with heavy butter richness.
          </div>
          <div className="font-sub">Price: 210 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{butterpaneercount()}</div>

          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Butter Paneer" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Punjabi Chole</div>
          <div className="font-sub">
            Larged sized chole with masala heaviness.
          </div>
          <div className="font-sub">Price: 150 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{punjabicholecount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Punjabi Chole" })}
          >
            + Add
          </button>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Veg Dum Biryani</div>
          <div className="font-sub">
            Hyderabadi style veg biryani, used basmati rice with fortune oil.
          </div>
          <div className="font-sub">Price: 220 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{vegdumbiryanicount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Veg Dum Biryani" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Daal e Dum</div>
          <div className="font-sub">
            Fried mixed daal with butter richness and small pinch of garam
            masala addon .
          </div>
          <div className="font-sub">Price: 160 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{daaledumcount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Daal e Dum" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Steamed Rice</div>
          <div className="font-sub">Basmati steamed rice.</div>
          <div className="font-sub">Price: 80 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{steamedricecount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Steamed Rice" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Garlic Naan</div>
          <div className="font-sub">
            Garlic Naan with garlic and organo richness.
          </div>
          <div className="font-sub">Price: 30 INR/Piece</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{garlicnaamcount()}</div>
          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Garlic Naan" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Tandoori Roti</div>
          <div className="font-sub">Multigrain floor aata roti.</div>
          <div className="font-sub">Price: 6 INR/Piece</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{tandooriroticount()}</div>

          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Tandoori Roti" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Salad</div>
          <div className="font-sub">Leaf salad.</div>
          <div className="font-sub">Price: 60 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{leafsaladcount()}</div>

          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Leaf Salad" })}
          >
            + Add
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content-details">
          <div className="font">Chocolate Brownie</div>
          <div className="font-sub">Dark Chocolate with cake.</div>
          <div className="font-sub">Price: 90 INR</div>
        </div>
        <div className="main-content-addon">
          {/* <Total /> */}
          <div className="font">Total:-{chocolatebrowniecount()}</div>

          <button
            type="button"
            class="btn btn-dark btn-lg m-2"
            onClick={() => dispatch({ type: "Chocolate Brownie" })}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
