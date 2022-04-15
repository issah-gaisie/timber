import {
  Menu as MenuInner,
  MenuItem as MenuItemInner,
  SubMenu as SubMenuInner,
  MenuButton,
  MenuDivider,
} from "@szhsin/react-menu";

const menuClassName = ({ state }) =>
  `box-border absolute z-50 text-sm bg-white p-1.5 border rounded-md shadow-lg select-none focus:outline-none min-w-[9rem] ${
    state === "closed" && "hidden"
  } ${state === "opening" && "animate-fadeIn"} ${
    state === "closing" && "animate-fadeOut"
  }`;

const menuItemClassName = ({ hover, disabled, submenu }) =>
  `rounded-md px-3 py-1 focus:outline-none ${
    hover && "text-white bg-blue-400"
  } ${disabled && "text-gray-400"} ${
    submenu && "relative after:content-['❯'] after:absolute after:right-2.5"
  }`;

export const Menu = (props) => (
  <MenuInner {...props} className="relative" menuClassName={menuClassName} />
);

export const MenuItem = (props) => (
  <MenuItemInner {...props} className={menuItemClassName} />
);

export const SubMenu = (props) => (
  <SubMenuInner
    {...props}
    offsetY={-7}
    className="relative"
    menuClassName={menuClassName}
    itemProps={{ className: menuItemClassName }}
  />
);
