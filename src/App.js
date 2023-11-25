
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const productDetails = [
    {
      name: "Fancy Product",
      img: "https://cdn.shopify.com/s/files/1/0075/0374/0992/products/69_e78fbc12-3f8e-40b9-b712-b438eb5633fe_1024x1024.jpg?v=1546859016",
      price: "12.00",
      viewoption: "Add to Cart"
    },
    {
      name: "Special Item",
      img: "https://th.bing.com/th?id=OIP.dJ2upgDq9V68lzQ6j-QEvwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
      price: "40.00",
      salebadge: "Sale",
      review: "bi-star-fill",
      viewoption: "Add to cart"
    },
    {
      name: "Sale Item",
      img: " https://th.bing.com/th?id=OIP.GBir0havwzl3VjMV_6nJKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
      price: "50.00",
      salebadge: "Sale",
      viewoption: "Add to Cart"
    },
    {
      name: "Popular Item",
      img: " https://th.bing.com/th?id=OIP.AmVNUJt2jFRjuyZbvFy30AHaJb&w=221&h=282&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
      price: "30.00",
      review: "bi-star-fill",
      viewoption: "Add to Cart"
    },
    {
      name: "Sale Item",
      img: " https://th.bing.com/th/id/OIP.atRU7cP222v_0nM42sSU3gHaHb?rs=1&pid=ImgDetMain",
      price: "39.00",
      salebadge: "Sale",
      viewoption: "Add to Cart"
    },
    {
      name: "Fancy Product",
      img: " https://cdn.shopify.com/s/files/1/2300/9895/products/11._grande.jpg?v=1505733994",
      price: "20.00",
      viewoption: "Add to Cart"
    },
    {
      name: "Special Item",
      img: " https://cdn.shopify.com/s/files/1/2177/6655/products/16_1024x1024.jpg?v=1500805920",
      price: "60.00",
      salebadge: "Sale",
      review: "bi-star-fill",
      viewoption: "Add to Cart"
    },
    {
      name: "Popular Item",
      img: " https://th.bing.com/th/id/OIP.i2HgyzRy_WNjZcep8XdP4gHaHa?w=490&h=490&rs=1&pid=ImgDetMain",
      price: "50.00",
      review: "bi-star-fill",
      viewoption: "Add to Cart"
    }
  ]
  const [Cart, setCart] = useState([]);
  const [Total,setTotal] = useState(0);
  let handleAddToCart = (productDetails) => {
    setCart([...Cart, productDetails]);
    setTotal(Total + parseFloat(productDetails.price));
  };
  let handleRemoveItem = (item) => {
    alert(`Item ${item.name} is removed`);
    let itemIndex = Cart.findIndex((obj) => obj.name === item.name);
    Cart.splice(itemIndex, 1);
    setCart([...Cart]);
    setTotal(Total - parseFloat(item.price)); // Convert price to float
  };


  return (
    <div className='container' >
      <div className='row'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          
          <Navbar Cart={Cart}  Total={Total} handleRemoveItem={handleRemoveItem} handleAddToCart={handleAddToCart}></Navbar>
         
        </nav>
        <header className="bg-dark py-5">

          <Header></Header>
        </header>
        <section class="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                productDetails.map((detail, index) => {
                  return (<Products key={index} Details={detail} handleAddToCart={handleAddToCart}></Products>)
                })
              }


            </div>
          </div>
        </section>
        <footer className="py-5 bg-dark">
          <Footer></Footer>
        </footer>



      </div>
    </div>
  );
}

export default App;
