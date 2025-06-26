import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

const NewArrivals = ({isProductPage = false , limit=4}) => {
  const navigate = useNavigate();
  const [wishlistedItems, setWishlistedItems] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlistedItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const products = [
    {
      id: 1,
      title: "RICE IDLI MIX",
      price: 189,
      originalPrice: 279,
      discount: "6% OFF",
      additionalInfo: "Bestsellers",
      image: "/assets/idli_mix_one.png",
      background: "bg-danger",
      isPopular: true
    },
    {
      id: 2,
      title: "MULTIGRAIN DHOKLA DHOKLA MIX",
      price: 299,
      size: "200gm",
      image: "/assets/multigrain_dhokla_calcium_one.png",
      background: "bg-warning",
      isPopular: false
    },
    {
      id: 3,
      title: "MULTI GRAIN DHOKLA MIX",
      price: 299,
      
      additionalInfo: "Bestsellers",
      image: "/assets/multigrain_dhokla_protien_one.png",
      background: "bg-primary",
      isPopular: false
    },
    {
      id: 4,
      title: "OATS IDLI MIX",
      price: 199,
      originalPrice: 299,
      discount: "16% OFF",
      size: "200gm",
      additionalInfo: "",
      image: "/assets/moong_dal_one.png",
      background: "bg-success",
      isPopular: true
    },
    {
      id: 5,
      title: "MOONG DAL DOSA MIX",
      price: 159,
      discount: "10% OFF",
      size: "250gm",
      image: "/assets/moong_dal_one.png",
      background: "bg-info",
      isPopular: true
    },
    {
      id: 6,
      title: "MULTI MILLET DOSA MIX",
      price: 179,
      additionalInfo: "High Fiber",
      image: "/assets/multi_millet_dosa_one.png",
      background: "bg-secondary",
      isPopular: false
      
    }
  ];
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
  <section className={`py-5 ${isProductPage ? "bg-light" : ""}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="font-weight-bold mb-2" style={{fontSize : '2.8rem'}} > {isProductPage ? "Explore Our Range" : "New Arrivals"} </h2>
          <div className="mx-auto mb-3" style={{ width: "100px", height: "4px", background: "#ccc" }}></div>
        </div>
        {/* Products Grid */}
        <div className="row">
          {displayedProducts.map(product => (
            <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
              <div className="card border-0 shadow-sm h-100 bg-light">
                <div
                  className={`position-relative`}
                  style={{
                    minHeight: 250,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {/* Discount Badge */}
                  {product.discount &&
                    <span className="badge badge-warning position-absolute" style={{ left: 12, top: 12, zIndex: 3 }}>
                      {product.discount}</span>
                  }
                  {/* Extra badge on Product page */}
                  {isProductPage && product.isPopular && (
                    <span className="badge badge-secondary position-absolute" style={{ left: 12, bottom: 12, zIndex: 3 }}>
                      Popular
                    </span>
                  )}
                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className="btn btn-light position-absolute"
                    style={{
                      top: 10,
                      right: 10,
                      borderRadius: '50%',
                      padding: 7,
                      zIndex: 3,
                      border: 'none'
                    }}
                  >
                    <Heart
                      size={20}
                      className={wishlistedItems.includes(product.id) ? 'text-danger' : 'text-secondary'}
                      style={wishlistedItems.includes(product.id) ? { fill: '#dc3545' } : {}}
                    />
                  </button>
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-100"
                    style={{
                        height: '220px',
                      objectFit: 'contain',
                      borderRadius: '12px'
                    }}
                    onError={e => { e.target.src = '/assets/placeholder.jpg'; }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title mb-2" style={{ minHeight: "2.2em", fontWeight: 600 }}>
                      {product.title}
                    </h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        {product.size && <span className="badge badge-light mr-1">{product.size}</span>}
                        {product.additionalInfo && <span className="badge badge-info">{product.additionalInfo}</span>}
                      </div>
                      <div>
                        <span className="mr-1 font-weight-bold">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted" style={{ fontSize: "0.93em", textDecoration: 'line-through' }}>
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-success btn-block mt-3 font-weight-bold">ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        {!isProductPage && (
          <div className="text-center mt-4">
            <button className="btn btn-outline-dark btn-lg px-5" onClick={() => navigate('/product') } >VIEW ALL NEW ARRIVALS</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewArrivals;