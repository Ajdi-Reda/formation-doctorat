import React from "react";
import ThesisRow from "./ThesisRow";
import { formatDuration } from "@/Components/utils/HelperFunctions";

const FieldCard = ({ field, setData, data }) => {
    const duration = formatDuration(field);

    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full text-center text-xl px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">
                                    {field.name}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-md text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Theses
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {field.theses.map((thesis, idx) => (
                                        <ThesisRow
                                            key={thesis.id}
                                            thesis={thesis}
                                            setData={setData}
                                            duration={duration}
                                            data={data}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FieldCard;
