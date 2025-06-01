import { useState } from 'react';
import { Heart } from 'lucide-react';

const NewArrivals = () => {
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
      background: "bg-danger"
    },
    {
      id: 2,
      title: "MULTIGRAIN DHOKLA DHOKLA MIX",
      price: 299,
      size: "200gm",
      image: "/assets/multigrain_dhokla_calcium_one.png",
      background: "bg-warning"
    },
    {
      id: 3,
      title: "MULTI GRAIN DHOKLA MIX",
      price: 299,
      
      additionalInfo: "Bestsellers",
      image: "/assets/multigrain_dhokla_protien_one.png",
      background: "bg-primary"
    },
    {
      id: 4,
      title: "OATS IDLI MIX",
      price: 199,
      originalPrice: 299,
      discount: "16% OFF",
      size: "200gm",
      additionalInfo: "",
      image: "/assets/oats_idli_mix_one.png",
      background: "bg-success"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="font-weight-bold mb-2" style={{fontSize : '2.8rem'}} > NEW ARRIVALS </h2>
          <div className="mx-auto mb-3" style={{ width: "100px", height: "4px", background: "#ccc" }}></div>
        </div>
        {/* Products Grid */}
        <div className="row">
          {products.map(product => (
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
                    <span className="badge badge-warning position-absolute" style={{ left: 12, top: 12, zIndex: 3 }}>{product.discount}</span>
                  }
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
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark btn-lg px-5">VIEW ALL NEW ARRIVALS</button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;