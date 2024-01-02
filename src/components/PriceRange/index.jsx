import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./index.css";

const PriceRange = () => {
  return (
    <div className="slider-container">
      <h3 className="price-range-title">Price Range</h3>
      <div className="price-range-container">
        <Slider defaultValue={[0, 1500]} />
      </div>
    </div>
  );
};

export default PriceRange;
