import React from "react";

const CategoryCard = ({ id, name, icon }) => {
    return (
        <div
            key={id}
            className="border rounded-md bg-gray-100 p-2 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-4 text-center"
        >
            <div className="text-xl">{icon}</div>
            <p>{name}</p>
        </div>
    );
};

export default CategoryCard;
