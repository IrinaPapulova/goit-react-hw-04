import { FallingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (

      <FallingLines
        color="blueviolet"
        width={200}
        visible={true}
        ariaLabel="falling-circles-loading"
      />
  );
}