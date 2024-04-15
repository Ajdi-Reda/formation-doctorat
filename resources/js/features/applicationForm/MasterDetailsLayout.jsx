import { useState } from "react";
import PdfModal from "@/Components/PdfModal.jsx";

const MasterDetailsLayout = ({ master }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">Master's Details</h2>
            {/* Grid layout with two columns */}
            <div className="grid grid-cols-2 gap-4">
                {/* Left column */}
                <div>
                    {/* Individual information fields */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Branch:</div>
                        <div className="flex-grow">{master.mBranch}</div>
                    </div>
                    {/* Other fields follow the same pattern */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Year:</div>
                        <div className="flex-grow">{master.mYear}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Establishment:</div>
                        <div className="flex-grow">{master.mEstablishment}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 7:</div>
                        <div className="flex-grow">{master.semester7}</div>
                    </div>
                </div>
                {/* Right column */}
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 8:</div>
                        <div className="flex-grow">{master.semester8}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 9:</div>
                        <div className="flex-grow">{master.semester9}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Semester 10:</div>
                        <div className="flex-grow">{master.semester10}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Master Diploma</div>
                        <div className="flex-grow">
                            <button className="px-2 py-1 rounded-sm bg-indigo-600 text-white"
                                    type="button"
                                    onClick={() => setOpenModal(!openModal)}>Open file
                            </button>
                            <PdfModal shown={openModal} close={() => setOpenModal(false)}>
                                <iframe src={master.masterDiploma} className="border-none w-full h-full"></iframe>
                            </PdfModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterDetailsLayout;
