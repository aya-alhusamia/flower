import axios from "axios";

export const DELETE_PRODUCT = " DELETE_PRODUCT";
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/products${productId}`);
    dispatch({
      type: DELETE_PRODUCT,
      // payload: res.data,
      payload: { productId: productId },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const CREATE_PRODUCT = " CREATE_PRODUCT";

export const createProduct = (newProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newProduct) formData.append(key, newProduct[key]);
    const res = await axios.post("http://127.0.0.1:8000/products$", formData);
    this.cookies.push(res.data);

    dispatch({
      type: CREATE_PRODUCT,
      payload: { newProduct: res.data },
      // payload:newProduct
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const UPDATE_PRODUCT = " UPDATE_PRODUCT";

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
    const res = await axios.put(
      ` http://127.0.0.1:8000/products/${updatedProduct.id}`,
      formData
    );
    dispatch({
      type: UPDATE_PRODUCT,
      // payload: res.data,
      payload: { updatedProduct: res.data },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/products");
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
