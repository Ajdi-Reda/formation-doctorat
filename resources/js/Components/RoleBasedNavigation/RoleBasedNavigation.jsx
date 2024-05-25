import { GoHome } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

export const useNavLinks = (role) => {
    const { t } = useTranslation("dashboard");

    const professorNavLinks = [
        {
            name: t("dashboardItems.Dashboard"),
            route: "professor/dashboard",
            icon: GoHome,
        },
        {
            name: t("dashboardItems.Approved applicants"),
            route: "professor/approved-applicants",
            icon: PiStudent,
        },
        {
            name: t("dashboardItems.Theses"),
            route: "professor/theses",
            icon: CiViewList,
        },
        {
            name: t("dashboardItems.Accepted applicants"),
            route: "professor/accepted-applicants",
            icon: PiStudent,
        },
    ];

    const adminNavLinks = [
        {
            name: t("dashboardItems.Dashboard"),
            icon: MdDashboard,
            route: "admin/dashboard",
        },
        {
            name: t("dashboardItems.Programs"),
            icon: FaBookOpen,
            route: "admin/programs",
        },
        {
            name: t("dashboardItems.Fields"),
            icon: FaBookReader,
            route: "admin/fields",
        },
        {
            name: t("dashboardItems.Professors"),
            icon: PiChalkboardTeacherFill,
            route: "admin/professors",
        },
        {
            name: t("dashboardItems.Universities"),
            icon: LiaUniversitySolid,
            route: "admin/universities",
        },
    ];

    const candidateNavLinks = [
        {
            name: t("dashboardItems.Dashboard"),
            route: "candidate/dashboard",
            icon: GoHome,
        },
    ];

    if (role === "professor") {
        return professorNavLinks;
    } else if (role === "candidate") {
        return candidateNavLinks;
    } else if (role === "super-admin") {
        return adminNavLinks;
    } else {
        return [];
    }
};
