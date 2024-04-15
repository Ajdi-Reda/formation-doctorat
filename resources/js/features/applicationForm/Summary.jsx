import React, {useState} from 'react';
import PersonalInfoLayout from "@/features/applicationForm/PersonalInfoLayout.jsx";
import CandidateThesisApplicationsTable from "@/features/applicationForm/CandidateThesisApplicationsTable.jsx";
import QualificationsData from "@/features/applicationForm/QualificationsData.jsx";
import { router } from '@inertiajs/react'
import toast, { Toaster } from 'react-hot-toast';
import SummaryPDF from '@/Components/Pdf/SummaryPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Summary = ({handleDecrementStep, formData }) => {
    const personalData = formData.personalData;
    const theses = formData.theses;
    const bac = formData.bacDetails;
    const licence = formData.licenceDetails;
    const master = formData.masterDetails;
   console.log(formData);
    const handleSubmitApplication = () => {
        router.get('/candidate/dashboard')
        toast.success("Application successffully submited");
    }
        return (
        <>
            <div className="my-6">
              <PersonalInfoLayout personalData={personalData}/>
               <CandidateThesisApplicationsTable theses={theses}/>
             <QualificationsData bac={bac} licence={licence} master={master}/>
                <div className="flex gap-2 md:gap-4 mt-4">
                    <button
                        className="py-2 px-3 border bg-gray-200 rounded-sm"
                        onClick={handleDecrementStep}
                    >
                        Previous
                    </button>
                    <button
                        className="py-2 px-3 border bg-gray-200 rounded-sm"
                        onClick={handleSubmitApplication}
                    >
                        Submit application
                    </button>
                </div>
            </div>
            <div>
    <PDFDownloadLink document={<SummaryPDF formData={formData}/>} fileName="convocation.pdf">
      {({ blob, url, loading, error }) =>
        <button className='px-4 py-2 rounded-md bg-indigo-500 text-white'>{`${loading? 'Loading document...' : 'Download PDF!'}`}</button>
      }
    </PDFDownloadLink>
  </div>
          </>
        );
};

export default Summary;
