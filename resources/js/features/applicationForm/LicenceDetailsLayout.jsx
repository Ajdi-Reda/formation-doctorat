import { useState } from "react";
import PdfModal from "@/Components/PdfModal.jsx";

const LicenseDetailsLayout = ({ licence }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">License Details</h2>
            {/* Grid layout with two columns */}
            <div className="grid grid-cols-2 gap-4">
                {/* Left column */}
                <div>
                    {/* Individual information fields */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Branch:</div>
                        <div className="flex-grow">{licence.lBranch}</div>
                    </div>
                    {/* Other fields follow the same pattern */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Year:</div>
                        <div className="flex-grow">{licence.lYear}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Establishment:</div>
                        <div className="flex-grow">{licence.lEstablishment}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 1:</div>
                        <div className="flex-grow">{licence.semester1}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 2:</div>
                        <div className="flex-grow">{licence.semester2}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 3:</div>
                        <div className="flex-grow">{licence.semester3}</div>
                    </div>
                </div>
                {/* Right column */}
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 4:</div>
                        <div className="flex-grow">{licence.semester4}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 5:</div>
                        <div className="flex-grow">{licence.semester5}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 6:</div>
                        <div className="flex-grow">{licence.semester6}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Licence Diploma</div>
                        <div className="flex-grow">
                            <button className="px-2 py-1 rounded-sm bg-indigo-600 text-white"
                                    type="button"
                                    onClick={() => setOpenModal(!openModal)}>Open file
                            </button>
                            <PdfModal shown={openModal} close={() => setOpenModal(false)}>
                                <iframe src={licence.licenceDiploma} className="border-none w-full h-full"></iframe>
                            </PdfModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenseDetailsLayout;
