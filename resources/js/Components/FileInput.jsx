const FileInput = ({id, name, setData, required, errors}) => {
    return (
        <>
        <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required={required}
            type="file"
            id={id}
            name={name}
            onChange={(e) => setData(name, e.target.files[0])}
        />
        {errors && (
            <p className="text-red-500 text-sm">{errors.bacDiploma}</p>
        )}
        </>)
}

export default FileInput
