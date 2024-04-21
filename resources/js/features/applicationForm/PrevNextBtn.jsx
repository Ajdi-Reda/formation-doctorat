import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import { useTranslation } from "react-i18next";

const PrevNextBtn = ({ handleDecrementStep }) => {
    const { t } = useTranslation("common"); // 'common' is the namespace for common translations

    return (
        <div className="flex gap-2 md:gap-4 mt-4">
            <SecondaryButton onClick={handleDecrementStep}>
                {t("buttons.previous")}
            </SecondaryButton>
            <PrimaryButton type="submit">{t("buttons.next")}</PrimaryButton>
        </div>
    );
};

export default PrevNextBtn;
