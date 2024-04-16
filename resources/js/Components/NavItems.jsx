import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const navItems = [
    {
        name: "Dashboard",
        icon: <MdDashboard />,
        route: "admin/dashboard",
    },
    {
        name: "Programs",
        icon: <FaBookOpen />,
        route: "admin/programs",
    },
    {
        name: "Fields",
        icon: <FaBookReader />,
        route: "admin/fields",
    },
    {
        name: "Professors",
        icon: <PiChalkboardTeacherFill />,
        route: "admin/professors",
    },
];
