import { Table } from "flowbite-react";
import AlertMessage from "@/Components/AlertMessage.jsx";

const ProgramFieldsDisplay = ({ fields }) => {
    return (
        <>
            <AlertMessage body={"Please register to apply to theses"} />
            <div className="overflow-x-auto mt-16">
                <h2 className="text-xl mb-4">Program Fields</h2>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Field Name</Table.HeadCell>
                        <Table.HeadCell>Number of Theses</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {fields.map((field) => (
                            <Table.Row
                                key={field.name} // Add key prop for better performance
                                className="cursor-pointer hover:bg-gray-100" // Enable hover and click effects (optional)
                            >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {field.name}
                                </Table.Cell>
                                <Table.Cell>{field.theses.length || 0}</Table.Cell> {/* Concise number of theses */}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};

export default ProgramFieldsDisplay;
