import Form from "react-bootstrap/Form";

export const ProdcutForm: React.FC = () => {
  const handleAdd = (e: React.MouseEventHandler<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <>
      <h3>Add New Product</h3>
      Title: <input type="text" />
      <br />
      Price: <input type="number" />
      <br />
      Expire Date:
      <input type="date" />
      <br />
      Photo: <input type="file" />
      <br />
      <input type="button" value="Add" onClick={() => handleAdd} />
    </>
  );
};
