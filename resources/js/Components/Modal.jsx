import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({
    children,
    show = false,
    maxWidth = "2xl",
    onClose,
}) {
    const maxWidthClass = {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
    }[maxWidth];

    return (
        <Transition appear show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center"
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        className={`bg-white rounded-lg overflow-y-auto shadow-xl mx-auto w-full sm:max-w-${maxWidth} pt-4 pb-6`}
                        style={{ maxHeight: "80vh" }} // Limit max height
                    >
                        <div className="px-6">{children}</div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
