import { useState, useEffect } from "react";
import Header from "./Header";
import ProductListing from "./ProductListing";
import AddProduct from "./AddProduct";
import {
  addToProducts,
  getProducts,
  removeFromProducts,
  editProduct,
} from "../services/products";
import { getCart, addToCart, checkoutCart } from "../services/cart";

const App = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const fetchCart = async () => {
        let res = await getCart();
        setCart(res);
      };
      fetchCart();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        let response = await getProducts();
        setProducts(response);
      };
      fetchProducts();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleNewProduct = async (product, callback) => {
    try {
      let res = await addToProducts(product);
      if (callback) {
        callback();
      }
      let updatedProducts = [...products, res];
      setProducts(updatedProducts);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await removeFromProducts(id);
      let updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditProduct = async (id, product, callback) => {
    try {
      let res = await editProduct(id, product);
      let updatedProducts = products.map((p) => {
        if (p._id === id) {
          return res;
        }
        return p;
      });
      setProducts(updatedProducts);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      let res = await addToCart(productId);
      let itemInd = cart.findIndex((item) => item.productId === productId);
      if (itemInd !== -1) {
        let updatedCart = [...cart];
        updatedCart[itemInd] = res.item;
        setCart(updatedCart);
      } else {
        setCart([...cart, res.item]);
      }

      let updatedProducts = products.map((p) => {
        if (p._id === productId) {
          return res.product;
        }
        return p;
      });

      setProducts(updatedProducts);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
      setCart([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header cart={cart} onCheckout={handleCheckout} />
      <main>
        <ProductListing
          data={products}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
          onAddToCart={handleAddToCart}
        />
        <AddProduct onNewProduct={handleNewProduct} />
      </main>
    </div>
  );
};

export default App;
