import { CgProfile } from "react-icons/cg";
import { MdPostAdd } from "react-icons/md";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={CgProfile} label="Profile" address="/user-profile" />
      <MenuItem icon={MdPostAdd} label="My Stories" address="/my-stories" />
    </>
  );
};

export default UserMenu;
