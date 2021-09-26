function Form(props) {
  return (
    <form className="form">
      <input
        className="form__item form__item_type_text"
        type="text"
        placeholder="First name"
        name="firstName"
        value={props.form.firstName}
        onChange={props.onChange}
      />
      <br />
      <input
        className="form__item form__item_type_text"
        type="text"
        placeholder="Last name"
        name="lastName"
        value={props.form.lastName}
        onChange={props.onChange}
      />
      <br />
      <input
        className="form__item form__item_type_text"
        type="text"
        placeholder="Address"
        name="address"
        value={props.form.address}
        onChange={props.onChange}
      />
      <br />
      <label>
        <input
          className="form__item"
          type="radio"
          name="gender"
          value="Male"
          checked={props.form.gender === "Male"}
          onChange={props.onChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          className="form__item"
          type="radio"
          name="gender"
          value="Female"
          checked={props.form.gender === "Female"}
          onChange={props.onChange}
        />{" "}
        Female
      </label>
      <br />
      <select
        className="form__item"
        value={props.form.size}
        onChange={props.onChange}
        name="size"
      >
        <option value="size">--Select your size--</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
      <br />
      <label>
        <input
          className="form__item"
          type="checkbox"
          name="logo"
          checked={props.form.logo}
          onChange={props.onChange}
        />{" "}
        With logo
      </label>
      <br />
      <label>
        <input
          className="form__item"
          type="checkbox"
          name="pocket"
          checked={props.form.pocket}
          onChange={props.onChange}
        />{" "}
        With pocket
      </label>
      <br />
      <br />
      <textarea
        className="form__item form__item_textarea"
        name="remark"
        value={props.form.remark}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
      <br />
      <button className="form__button" onClick={props.onClick}>
        Submit
      </button>
    </form>
  );
}

export default Form;
