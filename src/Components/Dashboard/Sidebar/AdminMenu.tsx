import { CgProfile } from "react-icons/cg";
import { FaUsersGear } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="/user-profile" />
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="/manage-users"
      />
    </>
  );
};

export default AdminMenu;
