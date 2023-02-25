import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={rootStyle}>
      <h1 style={h1Style}>Facebooks</h1>
      <nav>
        <ul style={ulStyle}>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="accounts">Accounts</NavLink></li>
          <li><NavLink to="sales">Sales</NavLink></li>
          <li><NavLink to="expenses">Expenses</NavLink></li>
          <li><NavLink to="reports">Reports</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

const rootStyle: CSSProperties = {
  background: 'lightgreen',
  padding: '1rem',
};

const h1Style: CSSProperties = {
  margin: '0 0 1rem',
};

const ulStyle: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
};

export default Sidebar;