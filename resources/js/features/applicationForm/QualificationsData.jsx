import { useTranslation } from "react-i18next";

const QualificationsData = ({ bac, licence, master }) => {
    const { t } = useTranslation("form");

    return (
        <table className="mt-6 min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
                <tr>
                    <th className="py-2 px-4">
                        {t("qualificationsTable.obtainedDiploma")}
                    </th>
                    <th className="py-2 px-4">
                        {t("qualificationsTable.year")}
                    </th>
                    <th className="py-2 px-4">
                        {t("qualificationsTable.specialty")}
                    </th>
                    <th className="py-2 px-4">
                        {t("qualificationsTable.establishment")}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {t("qualificationsTable.baccalaureate")}
                    </td>
                    <td className="py-2 border-b capitalize whitespace-nowrap">
                        {bac.bYear}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {bac.option}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {bac.bEstablishment}
                    </td>
                </tr>
                <tr>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {t("qualificationsTable.licence")}
                    </td>
                    <td className="py-2 border-b capitalize whitespace-nowrap">
                        {licence.lYear}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {licence.lBranch}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {licence.lEstablishment}
                    </td>
                </tr>
                <tr>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {t("qualificationsTable.master")}
                    </td>
                    <td className="py-2 border-b capitalize whitespace-nowrap">
                        {master.mYear}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {master.mBranch}
                    </td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                        {master.mEstablishment}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default QualificationsData;
