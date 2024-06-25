export const getCart = async () => {
  let res = await fetch("/api/cart");
  let body = await res.json();
  return body;
};

export const addToCart = async (productId) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ productId: productId }),
  };
  let res = await fetch("/api/add-to-cart", options);
  let body = await res.json();
  return body;
};

export const checkoutCart = async () => {
  let res = await fetch("/api/checkout", { method: "POST" });
  return res;
};
