import Navbar from "./components/Navbar.component";
import CartContainer from "./components/CartContainer.component";
import Modal from "./components/Modal.component";
import Spinner from "./components/spinner/spinner.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmountTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateAmountTotals());
  }, [cartItems]);

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <CartContainer />
          {showModal && <Modal />}
        </>
      )}
    </main>
  );
}
export default App;
