import React from "react";
import ThesisRow from "./ThesisRow";
import { formatDuration } from "@/Components/utils/HelperFunctions";

const FieldCard = ({ field, setData, data }) => {
    const duration = formatDuration(field);
    return (
        <section className="py-1 bg-blueGray-50">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-b">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-blueGray-700">
                                {field.name}
                            </h3>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Theses
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Duration
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {field.theses.map((thesis) => (
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
        </section>
    );
};

export default FieldCard;
