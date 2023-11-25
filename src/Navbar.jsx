
import CartItem from './CartItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you have Bootstrap styles included
import React from 'react';


function Navbar({Cart, Total,handleRemoveItem,handleAddToCart}) {
  


  return <>

    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#!">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">All Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Popular Items</a></li>
              <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">

          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
             
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{Cart.length}</span>

            </button>
            <ul className="dropdown-menu">
              {Cart.length > 0 ? (
                Cart.map((item, index) => (
                  <CartItem key={index} item={item} handleRemoveItem={handleRemoveItem} handleAddToCart={handleAddToCart} />
                ))
              ) : (
                <li>
                  <span className="dropdown-item">No items in Cart</span>
                </li>
              )}
              <li>
              <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  View Cart
                </a>
              </li>
              <li> <h2>Total:${Total.toFixed(2)}</h2>     </li>
            </ul>

          </div>



        </form>
      </div>
    </div>


  </>


}
export default Navbar;