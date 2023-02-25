import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={rootStyle}>
      <h1 style={h1Style}>Facebooks</h1>
      <nav>
        <ul style={ulStyle}>
          <li style={linkStyle}><NavLink to="/" style={linkTextStyle}>Dashboard</NavLink></li>
          <li style={linkStyle}><NavLink to="accounts" style={linkTextStyle}>Accounts</NavLink></li>
          <li style={linkStyle}><NavLink to="sales" style={linkTextStyle}>Sales</NavLink></li>
          <li style={linkStyle}><NavLink to="expenses" style={linkTextStyle}>Expenses</NavLink></li>
          <li style={linkStyle}><NavLink to="reports" style={linkTextStyle}>Reports</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

const rootStyle: CSSProperties = {
  background: '#F5F5F5',
  padding: '1rem',
};

const h1Style: CSSProperties = {
  margin: '0 0 1rem',
  color: '#7D7'
};

const ulStyle: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
};

const linkStyle: CSSProperties = {
  padding: '0.5rem',
  borderRadius: '0.5rem',
}

const linkTextStyle: CSSProperties = {
  color: 'black',
  textDecoration: 'none',

}

export default Sidebar;