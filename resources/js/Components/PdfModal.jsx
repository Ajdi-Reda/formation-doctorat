const PdfModal = ({ children, shown, close }) => {
    return shown ? (
        <div
            className="fixed top-0 right-0 left-0 bottom-0 bg-gray-400 flex flex-col justify-center items-center w-full h-full z-2"
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            <div
                className="w-[60%] min-h-[400px] bg-white rounded-md"
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    ) : null;}

export default PdfModal
