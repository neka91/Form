import { useState } from "react";
import SubmitPage from "./components/SubmitPage";
import CheckoutPage from "./components/CheckoutPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  const initialForm = {
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    size: "",
    logo: false,
    pocket: false,
    remark: "Type your remark here...",
  };

  const [page, setPage] = useState(1);
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? setForm((prev) => ({ ...prev, [name]: checked }))
      : setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickSubmitPage = (event) => {
    event.preventDefault();
    for (let formField in form) {
      if (
        (formField !== "logo" ||
          formField !== "pocket" ||
          formField !== "remark") &&
        form[formField] === ""
      ) {
        alert("Please fill in all fields in the form!");
        return;
      }
    }
    setPage(2);
  };

  const handleClickCheckoutPage = (event) => {
    event.target.name === "back" ? setPage(1) : setPage(3);
  };

  const handleFocus = (event) => {
    if (event.target.value === "Type your remark here...") {
      setForm((prev) => ({ ...prev, remark: "" }));
    }
  };

  return (
    <div className="App">
      {page === 1 && (
        <SubmitPage
          form={form}
          onChange={handleChange}
          onClick={handleClickSubmitPage}
          onFocus={handleFocus}
        />
      )}
      {page === 2 && (
        <CheckoutPage
          form={form}
          onChange={handleChange}
          onClick={handleClickCheckoutPage}
          onFocus={handleFocus}
        />
      )}
      {page === 3 && <SuccessPage />}
    </div>
  );
}

export default App;
