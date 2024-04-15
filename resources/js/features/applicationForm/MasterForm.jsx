import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";
import React from "react";

const MasterForm = ({data, errors, setData, completed}) => {
    return <>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl mt-4">Master</h1>

            <label htmlFor="mBranch">Branch/Major</label>
            <input
                required
                type="text"
                id="mBranch"
                value={data.mBranch}
                onChange={(e) => setData("mBranch", e.target.value)}
            />
            {errors.mBranch && (
                <p className="text-red-500 text-sm">{errors.mBranch}</p>
            )}
        </div>

        {/* Additional MasterDetails's Degree fields... */}
        <div className="mt-4 grid grid-cols-2 gap-2">
            <label htmlFor="mYear">Year of master graduation</label>
            <input required type="text" id="mYear" value={data.mYear}
                   onChange={(e) => setData("mYear", e.target.value)}
            />
            {errors.mYear && (
                <p className="text-red-500 text-sm">{errors.mYear}</p>
            )}
            <label htmlFor="mEstablishment">Establishment</label>
            <input required type="text" id="mEstablishment" value={data.mEstablishment}
                   onChange={(e) => setData("mEstablishment", e.target.value)}
            />
            {errors.mEstablishment && (
                <p className="text-red-500 text-sm">{errors.mEstablishment}</p>
            )}
            <label htmlFor="semester7">Semester 7 average</label>
            <input required type="text" id="semster7" value={data.semester7}
                   onChange={(e) => setData("semester7", e.target.value)}
            />
            {errors.semester7 && (
                <p className="text-red-500 text-sm">{errors.semester7}</p>
            )}
            <label htmlFor="semester8">Semester 8 average</label>
            <input required type="text" id="semster8" value={data.semester8}
                   onChange={(e) => setData("semester8", e.target.value)}
            />
            {errors.semester8 && (
                <p className="text-red-500 text-sm">{errors.semester8}</p>
            )}
            <label htmlFor="semester9">Semester 9 average</label>
            <input required type="text" id="semster9" value={data.semester9}
                   onChange={(e) => setData("semester9", e.target.value)}
            />
            {errors.semester9 && (
                <p className="text-red-500 text-sm">{errors.semester9}</p>
            )}
            <label htmlFor="semester10">Semester 10 average</label>
            <input required type="text" id="semster10" value={data.semester10}
                   onChange={(e) => setData("semester10", e.target.value)}
            />
            {errors.semester10 && (
                <p className="text-red-500 text-sm">{errors.semester10}</p>
            )}
        </div>
        <div className="flex flex-col gap-2">
            <InputLabel htmlFor="masterDiploma">Upload Master Diploma</InputLabel>
            <FileInput
                required={!completed}
                type="file"
                id="masterDiploma"
                name="masterDiploma"
                setData={setData}
                errors={errors.masterDiploma}
            />
        </div>
    </>
}

export default MasterForm
