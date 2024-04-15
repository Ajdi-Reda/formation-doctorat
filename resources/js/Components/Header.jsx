import { Link } from "@inertiajs/react";

const Header = () => {
    return (
        <div className="bg-gray-700 h-16 flex items-center justify-between px-4">
            <h1 className="text-white text-xl font-bold">Header</h1>
            <Link href={route("logout")} method="post" as="button">
                Log Out
            </Link>
        </div>
    );
};

export default Header;
