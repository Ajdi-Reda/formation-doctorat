const ModalMessage = ({header, message, onClose, onConfirm}) => {
    return (
        <div className=" max-w-md space-y-3">
            <h2 className="text-2xl font-bold">{header}</h2>
            <p className="text-md">{message}</p>
            <div className="space-x-2">
            <button type="button"
                    onClick={onClose}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel
            </button>
            <button type="button"
                    onClick={() => onConfirm()}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Confirm
            </button>
            </div>
        </div>
    )
}

export default ModalMessage
