import UserInfo from "./UserInfo";

function Page2(props) {
  return (
    <div className="page2">
      <h2 className="page2__title">Please check your data:</h2>
      <UserInfo
        form={props.form}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      <p className="page2__paragraph">
        If you would like to make any corrections to your data, please go back.
      </p>
      <button className="page2__button" name="back" onClick={props.onClick}>
        Back
      </button>
      <button className="page2__button" name="next" onClick={props.onClick}>
        Next
      </button>
    </div>
  );
}

export default Page2;
