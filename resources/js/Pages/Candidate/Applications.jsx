import {useState} from "react";
import Modal from "@/Components/Modal.jsx";
import ModalMessage from "@/Components/ModalMessage.jsx";
import { router } from '@inertiajs/react'
import {toast} from "react-hot-toast";

const Applications = ({applications}) => {

    const [open, setOpen] = useState(false);
    const [appId, setAppId] = useState('');
    const [thesisAccepted, setThesisAccepted] = useState(false)

    const sortApplications = (applications) => {
        const acceptedApplications = applications.filter(application => application.status === 'accepted');
        const otherApplications = applications.filter(application => application.status !== 'accepted');
        return [...acceptedApplications, ...otherApplications];
    };
    const onConfirm = () => {
      router.post(`/candidate/application/${appId}`, {appId}, {
          onSuccess: () => {
              toast.success('Thesis Successfully accepted');
              setOpen(false);
          },
          onFinish: () => setThesisAccepted(true),
      })

    }

    console.log(applications);
    return (
    <div className="relative overflow-x-auto mt-16">

        {thesisAccepted && <div className="absolute inset-0 pointer-events-auto" />}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Application id
                </th>
                <th scope="col" className="px-6 py-3">
                    Thesis
                </th>
                <th scope="col" className="px-6 py-3">
                    status
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
            </tr>
            </thead>
            <tbody>
            {
                sortApplications(applications).map(application => (
                    <tr key={application.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {application.id}
                        </td>
                        <td className="px-6 py-4">
                            {application.thesisTitle}
                        </td>
                        <td className="px-6 py-4">
                            {application.status}
                        </td>
                        <td className="px-6 py-4">
                            {application.status === 'accepted' ?
                                    application.accepted ?
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            <a href={application.thesisOutline} target="_blank">
                                                Thesis Outline
                                            </a>
                                        </button>
                                        : <button type="button"
                                                  onClick={() => {
                                                      setOpen(!open)
                                                      setAppId(application.id)
                                                  }}
                                                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                            Accept
                                        </button>
                                : ''}
                        </td>
                    </tr>
                    )
                )}
            </tbody>
        </table>
        <Modal show={open} onClose={() => setOpen(!open)}>
            <ModalMessage header={'Accept thesis'} message={'Are you sure you want to accept this thesis?' +
                'you won\'t be able to accept another thesis'} onClose={() => setOpen(!open)} onConfirm={onConfirm}/>
        </Modal>
    </div>
    )
}

export default Applications
