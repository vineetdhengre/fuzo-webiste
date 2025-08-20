import { useCart } from './CartContext';

export default function CartPage() {
  const { cartItems } = useCart();

  // Single item purchase handler
  const handlePurchase = (item) => {
    alert(`Purchased: ${item.title} for ₹${item.price}!`);
    // Add your individual item purchase logic here
  };

  // Purchase all handler
  const handlePurchaseAll = () => {
    if (cartItems.length === 0) return;
    const productList = cartItems.map(item => item.title).join(', ');
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    alert(`Purchased all products: ${productList}\nTotal: ₹${total}`);
    // Add your overall cart purchase logic here (clear cart, payment handling, etc.)
  };

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, i) => (
              <li className="list-group-item d-flex align-items-center justify-content-between" key={i}>
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.title} style={{ width: '80px', marginRight: '1em' }} />
                  <span style={{ fontWeight: 'bold', marginRight: '1em' }}>{item.title}</span>
                  <span>₹{item.price}</span>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handlePurchase(item)}
                >
                  Purchase
                </button>
              </li>
            ))}
          </ul>
          {/* Purchase All Button */}
          <div className="text-end">
            <button
              className="btn btn-success btn-lg"
              onClick={handlePurchaseAll}
            >
              Purchase All
            </button>
          </div>
        </>
      )}
    </div>
  );
}
