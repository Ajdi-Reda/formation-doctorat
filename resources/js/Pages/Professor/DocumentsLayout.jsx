import { useState } from "react";
import PdfModal from "@/Components/PdfModal.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const DocumentsLayout = ({ documents }) => {
    const [openModalCV, setOpenModalCV] = useState(false);
    const [openModalRecommendation1, setOpenModalRecommendation1] =
        useState(false);
    const [openModalRecommendation2, setOpenModalRecommendation2] =
        useState(false);

    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">Documents</h2>
            {/* Grid layout with three rows */}
            <div className="grid grid-rows-3 gap-4">
                {/* CV Button */}
                <div className="flex items-center mb-2">
                    <div className="w-1/3 font-medium">CV</div>
                    <div className="flex-grow">
                        <PrimaryButton
                            type="button"
                            onClick={() => setOpenModalCV(!openModalCV)}
                        >
                            Open file
                        </PrimaryButton>
                        {/* Render PDF modal for CV */}
                        <PdfModal
                            shown={openModalCV}
                            close={() => setOpenModalCV(false)}
                        >
                            <iframe
                                src={documents.cv}
                                className="border-none w-full h-full"
                            ></iframe>
                        </PdfModal>
                    </div>
                </div>
                {/* Recommendation Letter 1 Button */}
                <div className="flex items-center mb-2">
                    <div className="w-1/3 font-medium">
                        Recommendation Letter 1
                    </div>
                    <div className="flex-grow">
                        <PrimaryButton
                            type="button"
                            onClick={() =>
                                setOpenModalRecommendation1(
                                    !openModalRecommendation1
                                )
                            }
                        >
                            Open file
                        </PrimaryButton>
                        {/* Render PDF modal for Recommendation Letter 1 */}
                        <PdfModal
                            shown={openModalRecommendation1}
                            close={() => setOpenModalRecommendation1(false)}
                        >
                            <iframe
                                src={documents.recommendationLetter1}
                                className="border-none w-full h-full"
                            ></iframe>
                        </PdfModal>
                    </div>
                </div>
                {/* Recommendation Letter 2 Button */}
                <div className="flex items-center mb-2">
                    <div className="w-1/3 font-medium">
                        Recommendation Letter 2
                    </div>
                    <div className="flex-grow">
                        <PrimaryButton
                            type="button"
                            onClick={() =>
                                setOpenModalRecommendation2(
                                    !openModalRecommendation2
                                )
                            }
                        >
                            Open file
                        </PrimaryButton>
                        {/* Render PDF modal for Recommendation Letter 2 */}
                        <PdfModal
                            shown={openModalRecommendation2}
                            close={() => setOpenModalRecommendation2(false)}
                        >
                            <iframe
                                src={documents.recommendationLetter2}
                                className="border-none w-full h-full"
                            ></iframe>
                        </PdfModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentsLayout;
