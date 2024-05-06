import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.query.value.trim() === "") {
      toast.error("Please, enter text to search");
    }
    onSearch(form.elements.query.value.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}