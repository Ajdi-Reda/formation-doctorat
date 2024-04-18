export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block uppercase tracking-wide text-gray-700 text-xs font-bold ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
