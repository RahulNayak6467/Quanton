import { NavLink } from "react-router-dom";

function NavMenu({ features, route, Icon }) {
  const inActive = "cursor-pointer hover:text-accent hover:underline ";
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive
          ? "cursor-pointer text-accent text-md  flex items-center gap-2"
          : "cursor-pointer hover:text-accent hover:underline text-md flex items-center  gap-2"
      }
    >
      {Icon}
      {features}
    </NavLink>
  );
}

export default NavMenu;
