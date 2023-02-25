import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function Sales() {
  return (
    <div>
      <h2>Sales</h2>
      <nav>
        <ul>
          <li>
            <NavLink to=".">Overview</NavLink>
          </li>
          <li>
            <NavLink to="subscriptions">Subscriptions</NavLink>
          </li>
          <li>
            <NavLink to="invoices">Invoices</NavLink>
          </li>
          <li>
            <NavLink to="customers">Customers</NavLink>
          </li>
          <li>
            <NavLink to="deposits">Deposits</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Sales;