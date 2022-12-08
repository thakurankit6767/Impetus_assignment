import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import {
  FaStoreAlt,
  FaRegCalendarMinus,
  FaRegCalendarCheck,
  FaRegSun,
  FaRegUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {}}
        items={[
          {
            title: "KMK",
          },
          {
            title: "Ashish Kumar",
            itemId: "/profile",
            elemBefore: () => <FaRegUser />,
          },
          {
            title: "Dashboard",
            itemId: "/dashboard",
            color: "white",
          },
          {
            title: "Leads",
            itemId: "/leads",
            elemBefore: () => <FaStoreAlt />,
          },
          {
            title: "Completed Projects",
            itemId: "/completedprojects",
            elemBefore: () => <FaRegCalendarCheck />,
          },
          {
            title: "Schedule Meeting",
            itemId: "/schedulemeeting",
            elemBefore: () => <FaRegCalendarMinus />,
          },
          {
            title: "Setting",
            itemId: "/setting",
            elemBefore: () => <FaRegSun />,
          },
        ]}
      />
    </>
  );
}
export default Sidebar;
