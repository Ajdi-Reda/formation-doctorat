import React, { useState } from "react";
import FieldCard from "../programs/FieldCard";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import SearchInput from "@/Components/SearchInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const FieldSelection = ({ fields, handleIncrementStep, user, formData }) => {
    const [fieldsTheses, setFieldTheses] = useState(fields);
    const { data, setData, get, post } = useForm({
        theses: [],
    });
    function handleSubmit(e) {
        e.preventDefault();
        if (!user) {
            get("/register");
            return;
        }
        if (data.theses.length === 0) {
            toast.error("You must chose at least one thesis");
            return;
        }
        post("/form1");
        handleIncrementStep();
    }

    const handleSearchInput = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredFields = fields.filter((field) => {
            const filteredTheses = field.theses.filter((thesis) =>
                thesis.title.toLowerCase().includes(searchValue)
            );
            return filteredTheses.length > 0;
        });
        const filteredFieldsWithMatchingTheses = filteredFields.map(
            (field) => ({
                ...field,
                theses: field.theses.filter((thesis) =>
                    thesis.title.toLowerCase().includes(searchValue)
                ),
            })
        );
        setFieldTheses(filteredFieldsWithMatchingTheses);
    };
    return (
        <form className="mt-8 di">
            <div className="flex justify-between items-center">
                <SearchInput handleSearchInput={handleSearchInput} />
                <PrimaryButton type="submit" onClick={handleSubmit}>
                    Apply
                </PrimaryButton>
            </div>
            {fieldsTheses.length > 0 ? (
                fieldsTheses.map((field, idx) => (
                    <FieldCard
                        key={idx}
                        field={field}
                        setData={setData}
                        data={data}
                    />
                ))
            ) : (
                <p className="mx-auto mt-6">No Courses found</p>
            )}
        </form>
    );
};

export default FieldSelection;
