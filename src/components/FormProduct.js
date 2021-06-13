import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const FormProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
  });
  //   const productsSlug = useParams().productsSlug;
  //   if (product.slug) {
  //     product.find((product) => product.slug === productsSlug);
  //   }
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  //   const resetForm = () => {
  //     setProduct = {
  //       name: "",
  //       description: "",
  //       image: "",
  //       price: 0,
  //     };
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    history.push("/products");
    // resetForm();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter the name of Flower:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter the name of Flower"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the of description:</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter the description of Flower"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the name of image:</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Enter the image of Flower"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter a price:</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter a price"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Click here to submit form
      </Button>
    </Form>
  );
};
export default FormProduct;
