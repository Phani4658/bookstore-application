import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./index.css";

const PriceRange = ({
  // eslint-disable-next-line react/prop-types
  priceRange,
  // eslint-disable-next-line react/prop-types
  updateRange,
  // eslint-disable-next-line react/prop-types
  updateMaxRange,
  // eslint-disable-next-line react/prop-types
  updateMinRange,
}) => {
  const onChangeTooltips = (value) => {
    updateRange(value);
  };

  const onChangeMinInput = (event) => {
    updateMinRange(event.target.value);
  };

  const onChangeMaxInput = (event) => {
    updateMaxRange(event.target.value);
  };
  return (
    <div className="slider-container">
      <h3 className="price-range-title">Price Range</h3>
      <div className="range-inputs-container">
        <div className="input-container">
          <label>Min</label>
          <input
            type="number"
            className="range-input"
            onChange={onChangeMinInput}
            value={priceRange[0]}
          />
        </div>
        <div className="input-container">
          <label className="max-label">Max</label>
          <input
            type="number"
            className="range-input"
            onChange={onChangeMaxInput}
            value={priceRange[1]}
          />
        </div>
      </div>
      <div className="price-range-container">
        <Slider
          range
          onChange={onChangeTooltips}
          defaultValue={[priceRange[0], priceRange[1]]}
          max={70}
          min={0}
        />
      </div>
    </div>
  );
};

export default PriceRange;
