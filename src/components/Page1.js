import Form from "./Form";

function Page1(props) {
  return (
    <div className="page1">
      <h1 className="page1__title">T-Shirt order</h1>
      <p className="page1__paragraph">
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

export default Page1;
