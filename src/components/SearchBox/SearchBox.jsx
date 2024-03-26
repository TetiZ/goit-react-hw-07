import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBox() {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filters}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
}
