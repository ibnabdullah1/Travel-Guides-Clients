import { AiOutlineOrderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUsersGear } from "react-icons/fa6";
import {
  MdAddCircle,
  MdCategory,
  MdOutlineManageHistory,
} from "react-icons/md";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={CgProfile}
        label="Profile"
        address="/dashboard/user-profile"
      />{" "}
      <MenuItem
        icon={MdAddCircle}
        label="Add Product"
        address="/dashboard/addproduct"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Products"
        address="/dashboard/manage-products"
      />
      <MenuItem
        icon={AiOutlineOrderedList}
        label="Manage Orders"
        address="/dashboard/manage-orders"
      />
      <MenuItem
        icon={MdCategory}
        label="Manage Categories"
        address="/dashboard/manage-categories"
      />
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="/dashboard/manage-users"
      />
    </>
  );
};

export default AdminMenu;
