import { AiOutlineOrderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUsersGear } from "react-icons/fa6";
import { MdAddCircle, MdOutlineManageHistory } from "react-icons/md";
import MenuItem from "./MenuItem";

const SuperAdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={CgProfile}
        label="Profile"
        address="/dashboard/user-profile"
      />
      <MenuItem
        icon={MdAddCircle}
        label="Add Product"
        address="/dashboard/addproduct"
      />
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="/dashboard/manage-users"
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
      {/* <MenuItem
        icon={IoIosSettings}
        label="Settings"
        address="/dashboard/settings"
      />
      <MenuItem icon={MdReport} label="Reports" address="/dashboard/reports" /> */}
    </>
  );
};

export default SuperAdminMenu;
