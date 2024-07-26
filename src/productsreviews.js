import React, { useState } from 'react';

const ProductCardWithReviews = () => {
  const [cartCount, setCartCount] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([
    { name: 'Durga Bhavani', comment: 'The product is good.' },
    { name: 'Naga Lakshmi', comment: 'This product is not great.' }
  ]);

  const productImage = 'https://www.essentials.lk/cdn/shop/products/TRESemme_Keratin_Smooth_Shampoo___Conditioner_700ml_Limited_Offer_Sri_Lanka.png'; // Replace with your image URL
  const productName = 'Product Name';
  const productDescription = 'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description';
  const productPrice = '₹500.00';

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    if (reviewText.trim()) {
      setReviews([...reviews, { name: 'Anonymous', comment: reviewText }]);
      setReviewText('');
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="Logo" style={{ width: '50px' }} />
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <button style={styles.searchButton}>Search</button>
        </div>
        <div style={styles.cartContainer}>
          <span style={styles.cartIcon}>🛒</span>
          <span style={styles.cartCount}>{cartCount}</span>
        </div>
        <div style={styles.userContainer}>
          <span style={styles.userIcon}>👤</span>
          <span style={styles.username}>Hello, Username</span>
          <select style={styles.dropdown}>
            <option>Profile</option>
            <option>Settings</option>
            <option>Logout</option>
          </select>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <button style={styles.cancelButton} onClick={handleCancel}>×</button>
          <div style={styles.content}>
            <img src={productImage} alt={productName} style={styles.image} />
            <div style={styles.info}>
              <h2 style={styles.title}>{productName}</h2>
              <p style={styles.price}>{productPrice}</p>
              <p style={styles.description}>{productDescription}</p>
              <button style={styles.button} onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
          <div style={styles.specifications}>
            <h3 style={styles.specificationsTitle}>Product Specifications</h3>
            <p style={styles.specificationsDescription}>{productDescription}</p>
          </div>

          <section style={styles.reviewSection}>
            <h2 style={styles.reviewHeading}>Review</h2>
            <textarea
              value={reviewText}
              onChange={handleReviewChange}
              style={styles.textarea}
              placeholder="Write your review here..."
            />
            <button style={styles.submitButton} onClick={handleSubmitReview}>Add Review</button>
            <div style={styles.reviewsContainer}>
              <h3 style={styles.reviewsHeading}>Reviews</h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <article key={index} style={styles.reviewItem}>
                    <div style={styles.reviewerName}>{review.name}</div>
                    <p style={styles.reviewText}>{review.comment}</p>
                    <div style={styles.spacing} />
                  </article>
                ))
              ) : (
                <p style={styles.noReviews}>No reviews yet.</p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',  
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    width: '100%',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
    marginRight: '5px',
  },
  searchButton: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0056b3',
    color: 'white',
    cursor: 'pointer',
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: '24px',
  },
  cartCount: {
    marginLeft: '5px',
    fontSize: '18px',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  userIcon: {
    fontSize: '24px',
  },
  username: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  dropdown: {
    padding: '5px',
    borderRadius: '4px',
    border: 'none',
  },
  mainContent: {
    flex: 1,  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  card: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: '20px',
  },
  cancelButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
  },
  content: {
    display: 'flex',
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
  },
  info: {
    padding: '20px',
    flex: 1,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  price: {
    fontSize: '20px',
    color: '#333',
    margin: '0 0 10px',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  specifications: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  specificationsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  specificationsDescription: {
    fontSize: '16px',
    color: '#666',
  },
  reviewSection: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  reviewHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  reviewsContainer: {
    marginTop: '20px',
  },
  reviewsHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  reviewsList: {
    listStyleType: 'none',
    padding: '0',
  },
  reviewItem: {
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  reviewerName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: '16px',
    color: '#666',
  },
  spacing: {
    margin: '10px 0',
  },
  noReviews: {
    fontSize: '16px',
    color: '#666',
  },
};

export default ProductCardWithReviews;