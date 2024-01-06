import React from "react";
import FieldCard from "../programs/FieldCard";

const FieldSelection = ({ fields, handleIncrementStep }) => {
    return (
        <div className="mt-8 space-y-6">
            {fields ? (
                fields.map((field, idx) => (
                    <FieldCard
                        key={idx}
                        field={field}
                        handleIncrementStep={handleIncrementStep}
                    />
                ))
            ) : (
                <p>No Courses found</p>
            )}
        </div>
    );
};

export default FieldSelection;
