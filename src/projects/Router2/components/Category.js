import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  
  const sendDataToProduct = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue !== "default") {
      navigate(`/Router2/product/${selectedValue}`);
    }
  };

  return (
    <>
      <h2>Select a Category:</h2>
      <select defaultValue="default" onChange={sendDataToProduct}>
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </>
  );
}

export default Category;