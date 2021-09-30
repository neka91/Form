import Form from "./Form";

function SubmitPage(props) {
  return (
    <div className="submitPage">
      <h1 className="submitPage__title">T-Shirt order</h1>
      <p className="submitPage__paragraph">
        Please fill in the form below and very soon your order will be on its
        way to you!
      </p>
      <Form
        form={props.form}
        onChange={props.onChange}
        onClick={props.onClick}
        onFocus={props.onFocus}
      />
    </div>
  );
}

export default SubmitPage;
