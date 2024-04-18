import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";

const PrevNextBtn = ({ handleDecrementStep }) => {
    return (
        <div className="flex gap-2 md:gap-4 mt-4">
            <SecondaryButton onClick={handleDecrementStep}>
                Previous
            </SecondaryButton>
            <PrimaryButton type="submit">Next</PrimaryButton>
        </div>
    );
};

export default PrevNextBtn;
