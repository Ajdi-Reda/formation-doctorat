import React from "react";
import { useTranslation } from "react-i18next";

const PersonalInfoLayout = ({ personalData }) => {
    const { t } = useTranslation("form");

    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">
                {t("personalInfo.title")}
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.lastName")}:
                        </div>
                        <div className="flex-grow capitalize text-left">
                            {personalData.lastName}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.firstName")}:
                        </div>
                        <div className="flex-grow">
                            {personalData.firstName}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.dateOfBirth")}:
                        </div>
                        <div className="flex-grow">
                            {personalData.dateOfBirth}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.cityCountry")}:
                        </div>
                        <div className="flex-grow">
                            {personalData.city}, {personalData.country}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.cin")}:
                        </div>
                        <div className="flex-grow">{personalData.cin}</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.address")}:
                        </div>
                        <div className="flex-grow">{personalData.address}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            {t("personalInfo.labels.phoneNumber")}:
                        </div>
                        <div className="flex-grow">
                            {personalData.phone_number}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoLayout;
