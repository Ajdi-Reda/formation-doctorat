import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

export const navItems = [
    {
        name: 'Dashboard',
        icon: <MdDashboard />,
        route: 'admin/dashboard',
    },
    {
        name: 'Programs',
        icon: <FaBookOpen/>,
        route: 'admin/programs',
    }
]
