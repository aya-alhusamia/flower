import React, { useState } from "react";

import { AddProductDiv, Button } from "../style";
import { createProduct, updateProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function AddProduct() {
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);

  const updatedProduct = products.find((b) => b.slug === productSlug);

  const [product, setProduct] = useState(
    updatedProduct ?? {
      name: "",
      price: "",
      description: "",
      image: "",
    }
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedProduct) dispatch(updateProduct(product));
    else dispatch(createProduct(product));
    history.push("/products");
  };
  const handleImage = (event) =>
    setProduct({ ...product, image: event.target.files[0] });
  return (
    <form onSubmit={handleSubmit}>
      <AddProductDiv>
        <input
          value={product.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter flower name"
        />
        <input
          value={product.price}
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="enter flower price"
        />
        <input
          value={product.description}
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="enter flower description"
        />
        <input onChange={handleImage} type="file" name="image" />

        <Button type="submit">{updatedProduct ? "Update" : "Submit"}</Button>
      </AddProductDiv>
    </form>
  );
}

export default AddProduct;
