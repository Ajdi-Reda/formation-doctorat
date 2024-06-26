import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchInput = ({ handleSearchInput }) => {
    return (
        <div className="flex flex-1 items-center justify-start px-2 lg:ml-6 ">
            <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        onChange={handleSearchInput}
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
