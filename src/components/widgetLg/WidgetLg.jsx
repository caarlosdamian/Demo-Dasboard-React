import { useEffect, useState } from "react";
import { userRequest } from "../../api/requestMethods";
import { format } from "timeago.js";
import "../../styles/widgetLg.css";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order, key) => (
            <tr key={key} className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgData">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">$ {order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
