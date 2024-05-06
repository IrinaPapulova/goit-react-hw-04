
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <b className={css.error}>
    It's an error! Please reload!</b>;
}

