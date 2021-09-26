import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

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

  const handleClickPage1 = (event) => {
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

  const handleClickPage2 = (event) => {
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
        <Page1
          form={form}
          onChange={handleChange}
          onClick={handleClickPage1}
          onFocus={handleFocus}
        />
      )}
      {page === 2 && (
        <Page2
          form={form}
          onChange={handleChange}
          onClick={handleClickPage2}
          onFocus={handleFocus}
        />
      )}
      {page === 3 && <Page3 />}
    </div>
  );
}

export default App;
