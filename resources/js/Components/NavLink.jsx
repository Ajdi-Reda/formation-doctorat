import { Link } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={classNames(
                active
                    ? "bg-gray-50 text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-md leading-6 font-semibold"
            )}
        >
            {children}
        </Link>
    );
}
