import { Outlet } from "react-router";

function Sales() {
  return (
    <div>
      <h2>Sales</h2>
      {/* Todo: skapa länkar */}
      <Outlet />
    </div>
  )
}

export default Sales;