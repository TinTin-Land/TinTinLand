import React, { Fragment } from "react";
import { useAtom } from "jotai";
import { Dialog,Transition } from "@headlessui/react";
import { JobFairInfoState } from "../../jotai";

// ... existing code ...

const JobFairInfo = () => {
  const [open, setOpen] = useAtom(JobFairInfoState);
  
  // Move Course_data to a separate file or use a custom hook
  const Course_data = {
    // ... existing data ...
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setOpen}>
        {/* ... existing Transition.Child for backdrop ... */}

        <div className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center sm:min-h-full sm:p-4 text-center">
            <Transition.Child
              // ... existing Transition.Child props ...
            >
              <div className="relative bg-white sm:rounded-lg px-4 pt-5 pb-4 text-left h-screen sm:h-full shadow-xl items-center transform transition-all sm:my-8 sm:max-w-5xl w-full sm:p-6">
                {/* <CloseButton setOpen={setOpen} />
                <CompanyInfo data={Course_data} />
                <JobList jobs={Course_data.work} />
                <ContactInfo email={Course_data.aboutUs} /> */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

// ... Add new components: CloseButton, CompanyInfo, JobList, ContactInfo ...

export default JobFairInfo;
