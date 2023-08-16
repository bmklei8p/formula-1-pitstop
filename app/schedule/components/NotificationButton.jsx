"use client";
import { MdNotificationsActive } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";

const NotificationButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [
    updatedAllRacesPreferenceModalOpen,
    setUpdatedAllRacesPreferenceModalOpen,
  ] = useState(false);
  const [nonValidPhoneNumberModalOpen, setNonValidPhoneNumberModalOpen] =
    useState(false);
  const [duplicatePhoneNumberModalOpen, setDuplicatePhoneNumberModalOpen] =
    useState(false);
  const [allRaces, setAllRaces] = useState(false);
  const [value, setValue] = useState();

  const handleUpdateAndSuccess = () => {
    setUpdatedAllRacesPreferenceModalOpen(false);
    setModalOpen(false);
  };

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
  };

  const handlePhoneNumberSubmit = async () => {
    // still need to implement backend logic for this

    if (isPossiblePhoneNumber(value)) {
      // add phone number to database via POST request
      const res = await fetch("/api/number", {
        method: "POST",
        body: JSON.stringify({
          phoneNumber: value,
          allRaces: allRaces,
        }),
      });
      const text = await res.text();
      const status = res.status;
      if (status === 200 && text === "Successfully stored the phone number") {
        handleModalClose();
        setSuccessModalOpen(true);
      } else if (status === 200) {
        setUpdatedAllRacesPreferenceModalOpen(true);
      } else if (status === 400) {
        setDuplicatePhoneNumberModalOpen(true);
      } else {
        setNonValidPhoneNumberModalOpen(true);
      }
    } else {
      setNonValidPhoneNumberModalOpen(true);
    }
  };

  return (
    <>
      {!modalOpen ? (
        <button 
          className="text-2xl md:text-3xl text-red-500"
          onClick={handleButtonClick}
        >
          <MdNotificationsActive  />
        </button>
      ) : null}
      {modalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                      <MdNotificationsActive className="text-3xl text-red-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6"
                        id="modal-title"
                      >
                        Race Notification
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm">
                          By entering your phone number you consent to receiving
                          a SMS notification 15 minutes before the race starts!
                        </p>
                      </div>
                      <div className="mt-4 w-full">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={value}
                          onChange={setValue}
                        />
                        <div className="flex flex-row gap-8 mt-2 justify-center">
                          <div className="flex items-center mt-4">
                            <input
                              checked={allRaces}
                              id="checked-checkbox"
                              type="checkbox"
                              onChange={(e) =>
                                e.target.checked
                                  ? setAllRaces(true)
                                  : setAllRaces(false)
                              }
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checked-checkbox"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              All races
                            </label>
                          </div>
                          <div className="flex items-center mt-4">
                            <input
                              checked={!allRaces}
                              id="checked-checkbox"
                              type="checkbox"
                              onChange={(e) =>
                                e.target.checked
                                  ? setAllRaces(false)
                                  : setAllRaces(true)
                              }
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checked-checkbox"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              This race only
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-backgroundContent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => handlePhoneNumberSubmit()}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Get Notified
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModalClose()}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {successModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                      <MdNotificationsActive className="text-3xl text-red-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6"
                        id="modal-title"
                      >
                        Success!!
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm">
                          You will recieve a SMS message before the next race
                          start!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-backgroundContent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => handleSuccessModalClose()}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {nonValidPhoneNumberModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                      <BiErrorCircle className="text-3xl text-red-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6"
                        id="modal-title"
                      >
                        Non-valid phone number!
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm">
                          Please enter a valid phone number to continue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-backgroundContent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setNonValidPhoneNumberModalOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {duplicatePhoneNumberModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                      <BiErrorCircle className="text-3xl text-red-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6"
                        id="modal-title"
                      >
                        Phone number already in system.
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm">
                          Please enter a new phone number to continue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-backgroundContent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => setDuplicatePhoneNumberModalOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {updatedAllRacesPreferenceModalOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                      <BsCheckCircleFill className="text-3xl text-red-500" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-xl font-semibold leading-6"
                        id="modal-title"
                      >
                        Your race preference has been updated!
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-backgroundContent px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => handleUpdateAndSuccess()}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationButton;
