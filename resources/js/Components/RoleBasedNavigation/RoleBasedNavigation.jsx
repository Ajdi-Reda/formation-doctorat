import { GoHome } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const professorNavLinks = [
    {
        name: "Dashboard",
        route: "professor/dashboard",
        icon: GoHome,
    },
    {
        name: "Approved applicants",
        route: "professor/approved-applicants",
        icon: PiStudent,
    },
    {
        name: "Theses",
        route: "professor/theses",
        icon: CiViewList,
    },
    {
        name: "Accepted applicants",
        route: "professor/accepted-applicants",
        icon: PiStudent,
    },
];
export const adminNavLinks = [
    {
        name: "Dashboard",
        icon: MdDashboard,
        route: "admin/dashboard",
    },
    {
        name: "Programs",
        icon: FaBookOpen,
        route: "admin/programs",
    },
    {
        name: "Fields",
        icon: FaBookReader,
        route: "admin/fields",
    },
    {
        name: "Professors",
        icon: PiChalkboardTeacherFill,
        route: "admin/professors",
    },
];
export const candidateNavLinks = [
    {
        name: "Dashboard",
        route: "candidate/dashboard",
        icon: GoHome,
    },
];
