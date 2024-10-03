import { CgProfile } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        icon={CgProfile}
        label="Profile"
        address="/dashboard/user-profile"
      />
      <MenuItem
        icon={IoBagCheckOutline}
        label="Checkout"
        address="/dashboard/checkout"
      />
      <MenuItem
        icon={MdOutlineShoppingCart}
        label="My Cart"
        address="/dashboard/cart"
      />
      <MenuItem
        icon={FaRegListAlt}
        label="Order History"
        address="/dashboard/order-history"
      />
    </>
  );
};

export default UserMenu;
