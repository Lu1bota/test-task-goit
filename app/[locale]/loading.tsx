import { ScaleLoader } from "react-spinners";
import css from "./loading.module.css";

export default function Loader() {
  return (
    <ScaleLoader
      color="#999999"
      height={25}
      width={3}
      radius={2}
      margin={2}
      className={css.loading}
    />
  );
}
