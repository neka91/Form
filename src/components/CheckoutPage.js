import UserInfo from "./UserInfo";

function CheckoutPage(props) {
  return (
    <div className="checkoutPage">
      <h2 className="checkoutPage__title">Please check your data:</h2>
      <UserInfo
        form={props.form}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      <p className="checkoutPage__paragraph">
        If you would like to make any corrections to your data, please go back.
      </p>
      <button
        className="checkoutPage__button"
        name="back"
        onClick={props.onClick}
      >
        Back
      </button>
      <button
        className="checkoutPage__button"
        name="next"
        onClick={props.onClick}
      >
        Next
      </button>
    </div>
  );
}

export default CheckoutPage;
