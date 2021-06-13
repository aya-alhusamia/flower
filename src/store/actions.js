export const DELETE_PRODUCT = " DELETE_PRODUCT";

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      productId: productId,
    },
  };
};

export const CREATE_PRODUCT = " CREATE_PRODUCT";

export const createProduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      newProduct: newProduct,
    },
  };
};
