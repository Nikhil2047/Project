import { Fragment } from "react";
import { Navbar, OrderSummaryComp } from "../../components";
import "./OrderSummary.css";
export const OrderSummary = () => {

  return (
    <Fragment>
      <Navbar/>
        <main className="order-summary-main">
          
          <div className="order-summary">
            <OrderSummaryComp />
          </div>
          
        </main>
    </Fragment>
    
  );
};