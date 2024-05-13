import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../action';
import axios from 'axios';
import './productstyle.css'; // Import CSS styles


import { createBrowserHistory } from 'history';

const ProductListing = ({ products, loading, error, fetchProducts }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);
  const history = createBrowserHistory(); // Initialize useHistory hook

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Function to toggle the expanded state of a description
  const toggleDescription = (productId) => {
    setExpandedDescriptions((prevState) => {
      if (prevState.includes(productId)) {
        return prevState.filter((id) => id !== productId);
      } else {
        return [...prevState, productId];
      }
    });
  };
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    history.push('/login');
 
 
};

  return (
    <div className="container">
         <button variant="danger" onClick={handleLogout}>Logout</button>
      <h1>Products</h1>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <div key={product.id} className={`col-md-4 ${index % 3 !== 0 ? 'mb-4' : ''}`}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Category: {product.category}</p>
                  {expandedDescriptions.includes(product.id) ? (
                    <p className="card-text">{product.description}</p>
                  ) : (
                    <p className="card-text">{product.description.slice(0, 100)}...</p>
                  )}
                  <button className="btn btn-primary" onClick={() => toggleDescription(product.id)}>
                    {expandedDescriptions.includes(product.id) ? 'View Less' : 'View More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
