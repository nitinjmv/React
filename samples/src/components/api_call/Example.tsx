import axios from "axios";

export const Example = () => {
  console.log(axios.isCancel("something"));

  axios
    .get("https://fakestoreapi.com/products/1")
    .then((p) => console.log(p.data));
  return <></>;
};
