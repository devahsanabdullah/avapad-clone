import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "../navbar/Navbar";
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function DialogBox(props) {
  const [open, setOpen] = useState(props.val);
  const cancelButtonRef = useRef(null);
  {
    console.log(props);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div 
           className="fixed inset-0 bg-[#000] bg-opacity-50  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div 
          onClick={props.func}
          ref={cancelButtonRef}
          className="flex min-h-full items-center justify-center  text-center sm:items-center  sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform  md:overflow-hidden  rounded-lg bg-[#212529]   shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div className="bg-[#212529]  p-6 pb-4  w-full">
                  <div className="flex items-start   ">
                    <div className="md:ml-0 text-center sm:mt-0 ml-4  sm:text-left w-full   ">
                      <Dialog.Title className="flex justify-between">
                        <div className="text-2xl font-bold leading-6 text-white">
                          Select a Wallet
                        </div>
                        <div className="flex flex-row-reverse px-6">
                          <button
                            type="button"
                            className=" inline-flex w-full  py-1  shadow-sm  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm "
                            onClick={props.func}
                            ref={cancelButtonRef}
                          >
                            <i className="fa-solid fa-xmark text-2xl text-white border-none"></i>
                          </button>
                        </div>
                      </Dialog.Title>
                      <div className="mt-10 flex flex-col   ">
                        <a href="https://metamask.io/">
                          <div className="border-2 border-solid p-2 border-transparent rounded mt-2  flex flex-row items-center justify-between bg-[rgba(214,88,89,var(--tw-bg-opacity))] hover:border-[1px] hover:border-solid hover:border-white">
                            <div className="text-white flex items-center">
                              Install Metamask
                            </div>
                            <img
                              src="/assets/metamask.png"
                              className="block m-0 p-0 align-middle "
                              alt=""
                            />
                          </div>
                        </a>
                        <a href="https://metamask.io/">
                          <div className="border-2 p-2 border-solid border-transparent rounded mt-2  flex flex-row items-center justify-between bg-[rgba(214,88,89,var(--tw-bg-opacity))] hover:border-[1px] hover:border-solid hover:border-white ">
                            <div className="text-white">Wallet Connect</div>
                            <img
                              src="/assets/metamask.png"
                              className="block m-0 p-0 align-middle "
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
