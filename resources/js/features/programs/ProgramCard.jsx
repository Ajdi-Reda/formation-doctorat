import { Link } from "@inertiajs/react";
import React from "react";

const ProgramCard = ({ id, title, icon }) => {
    return (
        <Link
            href={`
            /programs/${id}`}
            key={id}
            className="border rounded-md bg-gray-100 p-2 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-4 text-center"
        >
            <div className="w-8 h-8">
                <img
                    src={
                        icon
                            ? `/storage/programsIcons/${icon}`
                            : `/storage/programsIcons/idea.png`
                    }
                />
            </div>
            <p>{title}</p>
        </Link>
    );
};

export default ProgramCard;
