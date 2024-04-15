import Programs from "@/features/programs/Programs.jsx";

const MultiStepForm = ({programs}) => {
    return (
        <div className="container mx-auto">
        <Programs programs={programs}/>
        </div>
    )
}

export default MultiStepForm
