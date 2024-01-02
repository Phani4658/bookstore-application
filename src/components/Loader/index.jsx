import { ProgressBar } from "react-loader-spinner";
import "./index.css";

const Loader = () => (
  <div className="loader-container">
    <ProgressBar barColor="#e4b976" borderColor="#e5e6e1" />
  </div>
);

export default Loader;
