import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer';
import { calculateTotal, getCartItems } from './feature/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import { useEffect } from 'react';

function App() {

  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
