import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((cur) => (
          <CartItem
            item={{
              title: cur.title,
              quantity: cur.quantity,
              total: cur.total,
              price: cur.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
