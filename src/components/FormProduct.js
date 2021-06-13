import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createProduct, updateProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FormProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);
  const updatedProduct = products.find((e) => e.slug === productSlug);

  const [product, setProduct] = useState(
    updatedProduct ?? {
      name: "",
      description: "",
      image: "",
      price: 0,
    }
  );
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
    if (updatedProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(createProduct(product));
      history.push("/products");
    }

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
      <Button type="submit">{updatedProduct ? "Update" : "Submit"}</Button>
    </Form>
  );
};
export default FormProduct;
