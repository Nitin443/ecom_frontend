import { Link } from "react-router-dom";
import { isAuthenticate } from "../authApi";
const Checkout = ({products}) => {

   const getTotal = () => {
       return products.reduce((currentValue, nextValue) => {
          return currentValue + nextValue.count * nextValue.price;
       }, 0);
   }

   const showCheckoutButton = () => {
           if(isAuthenticate){

            return( <button className="btn btn-success">Checkout</button> );
           }else{
              return( <Link>
                   <button className="btn btn-primary">Log in to Checkout</button>
               </Link> );
           }
   }

  return(
      <div>
          <h2>Total Amount : ₹ {getTotal()}</h2>
           {showCheckoutButton()}
      </div>
  );
}

export default Checkout;