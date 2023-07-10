import "./Form.css";

import Icon from "../../assets/search.svg";

const Form = () => {
  return (
    <div className="container">
      <div className="wrapper py-5 flex-column flex-md-row d-flex align-items-center justify-content-between">
        <form className="form ">
          <label for="img">
            <img className="search__logo" src={Icon} alt="seacrh icon" />
          </label>
          <input
            id="img"
            className="search__input border-0 bg-transparent ps-5"
            placeholder="Search for a country…"
          />
        </form>

        <select className="search__select ">
          <option selected hidden>
            Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
