const PersonalInfoLayout = ({personalData}) => {
    return (
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Last Name:</div>
                        <div className="flex-grow capitalize text-left">{personalData.lastName}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">First Name:</div>
                        <div className="flex-grow">{personalData.firstName}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Date of Birth:</div>
                        <div className="flex-grow">{personalData.dateOfBirth}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">City, Country:</div>
                        <div className="flex-grow">{personalData.city}, {personalData.country}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">N CIN:</div>
                        <div className="flex-grow">{personalData.cin}</div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Address Postale:</div>
                        <div className="flex-grow">{personalData.address}</div>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-1/3 font-medium">Telephone:</div>
                        <div className="flex-grow">{personalData.phone_number}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoLayout
