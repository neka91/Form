function UserInfo(props) {
  return (
    <div className="userinfo">
      <p className="userinfo__item">
        <span className="userinfo__item_span">Name:</span>{" "}
        {props.form.firstName} {props.form.lastName}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">Address:</span>{" "}
        {props.form.address}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">Gender:</span> {props.form.gender}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">T-Shirt size:</span>{" "}
        {props.form.size.toUpperCase()}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">With logo?</span>{" "}
        {props.form.logo ? "Yes" : "No"}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">With pocket?</span>{" "}
        {props.form.pocket ? "Yes" : "No"}
      </p>
      <p className="userinfo__item">
        <span className="userinfo__item_span">Remark:</span> {props.form.remark}
      </p>
    </div>
  );
}

export default UserInfo;
