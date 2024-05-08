import { useState } from "react";
import PdfModal from "@/Components/PdfModal.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const BacDetailsLayout = ({ bac }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">Student Information</h2>
            {/* Grid layout with two columns */}
            <div className="grid grid-cols-2 gap-4">
                {/* Left column */}
                <div>
                    {/* Individual information fields */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Birth Year:</div>
                        <div className="flex-grow">{bac.bYear}</div>
                    </div>
                    {/* Other fields follow the same pattern */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">City:</div>
                        <div className="flex-grow">{bac.city}</div>
                    </div>
                    {/* Baccalaureate Establishment */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            Baccalaureate Establishment:
                        </div>
                        <div className="flex-grow">{bac.bEstablishment}</div>
                    </div>
                    {/* Massar Code */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Massar Code:</div>
                        <div className="flex-grow">{bac.massarCode}</div>
                    </div>
                    {/* Option */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Option:</div>
                        <div className="flex-grow">{bac.option}</div>
                    </div>
                    {/* Mention */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Mention:</div>
                        <div className="flex-grow">{bac.mention}</div>
                    </div>
                </div>
                {/* Right column */}
                <div>
                    {/* Baccalaureate Average */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            Baccalaureate Average:
                        </div>
                        <div className="flex-grow">{bac.bacAverage}</div>
                    </div>
                    {/* National Baccalaureate Average */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            National Baccalaureate Average:
                        </div>
                        <div className="flex-grow">
                            {bac.nationalBacAverage}
                        </div>
                    </div>
                    {/* Regional Exam Average */}
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">
                            Regional Exam Average:
                        </div>
                        <div className="flex-grow">
                            {bac.regionalExamAverage}
                        </div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Bac Diploma</div>
                        <div className="flex-grow">
                            <PrimaryButton
                                type="button"
                                onClick={() => setOpenModal(!openModal)}
                            >
                                Open file
                            </PrimaryButton>
                            <PdfModal
                                shown={openModal}
                                close={() => setOpenModal(false)}
                            >
                                <iframe
                                    src={bac.bacDiploma}
                                    className="border-none w-full h-full"
                                ></iframe>
                            </PdfModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BacDetailsLayout;
