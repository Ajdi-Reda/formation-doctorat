import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";
import React, {useEffect} from "react";

const LicenceForm = ({data, errors, setData, completed}) => {
    useEffect(() => {
        if (!data.lType) {
            setData("lType", "licence");
        }
    }, [setData, data.lType]);
    return <>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl mt-4">Licence</h1>
            <label htmlFor="lType">Type Licence</label>
            <select
                name="type"
                id="lType"
                onChange={(e) => setData("lType", e.target.value)}
                value={data.lType}
            >
                <option value="licence">Licence</option>
                <option value="licenceP">Licence Professionel</option>
            </select>
            {errors.lType && (
                <p className="text-red-500 text-sm">{errors.lType}</p>
            )}
            <label htmlFor="lBranch">Branch/Major</label>
            <input
                required
                type="text"
                id="lBranch"
                value={data.lBranch}
                onChange={(e) => setData("lBranch", e.target.value)}
            />
            {errors.lBranch && (
                <p className="text-red-500 text-sm">{errors.lBranch}</p>
            )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
            <label htmlFor="lYear">Year of licence graduation</label>
            <input required type="number" id="lYear" value={data.lYear}
                   onChange={(e) => setData("lYear", e.target.value)}
            />
            {errors.lYear && (
                <p className="text-red-500 text-sm">{errors.lYear}</p>
            )}
            <label htmlFor="lEstablishment">Establishment</label>
            <input required type="text" id="lEstablishment" value={data.lEstablishment}
                   onChange={(e) => setData("lEstablishment", e.target.value)}
            />
            {errors.lEstablishment && (
                <p className="text-red-500 text-sm">{errors.lEstablishment}</p>
            )}
            <label htmlFor="semester1">Semester 1 average</label>
            <input required type="number" id="semster1" value={data.semester1}
                   onChange={(e) => setData("semester1", e.target.value)}
            />
            {errors.semester2 && (
                <p className="text-red-500 text-sm">{errors.semester1}</p>
            )}
            <label htmlFor="semester2">Semester 2 average</label>
            <input required type="number" id="semster1" value={data.semester2}
                   onChange={(e) => setData("semester2", e.target.value)}
            />
            {errors.semester2 && (
                <p className="text-red-500 text-sm">{errors.semester2}</p>
            )}
            <label htmlFor="semester3">Semester 3 average</label>
            <input required type="number" id="semster1" value={data.semester3}
                   onChange={(e) => setData("semester3", e.target.value)}
            />
            {errors.semester3 && (
                <p className="text-red-500 text-sm">{errors.semester3}</p>
            )}
            <label htmlFor="semester4">Semester 4 average</label>
            <input required type="number" id="semster1" value={data.semester4}
                   onChange={(e) => setData("semester4", e.target.value)}
            />
            {errors.semester4 && (
                <p className="text-red-500 text-sm">{errors.semester4}</p>
            )}
            <label htmlFor="semester5">Semester 5 average</label>
            <input required type="number" id="semster1" value={data.semester5}
                   onChange={(e) => setData("semester5", e.target.value)}
            />
            {errors.semester5 && (
                <p className="text-red-500 text-sm">{errors.semester5}</p>
            )}
            <label htmlFor="semester6">Semester 6 average</label>
            <input required type="number" id="semster1" value={data.semester6}
                   onChange={(e) => setData("semester6", e.target.value)}
            />
            {errors.semester6 && (
                <p className="text-red-500 text-sm">{errors.semester6}</p>
            )}

        </div>

        <div className="flex flex-col gap-2">
            <InputLabel htmlFor="licenceDiploma">Upload Licence Diploma</InputLabel>
            <FileInput
                required={!completed}
                type="file"
                id="licenceDiploma"
                name="licenceDiploma"
                setData={setData}
                errors={errors.licenceDiploma}
            />
        </div>

    </>
}

export default LicenceForm
