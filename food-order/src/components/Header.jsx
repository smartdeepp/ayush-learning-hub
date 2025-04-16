import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import CartContext from '../store/CartContext';

export default function Header() {
  const userProgessCtx = useContext(UserProgressContext);

  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgessCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo image" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
