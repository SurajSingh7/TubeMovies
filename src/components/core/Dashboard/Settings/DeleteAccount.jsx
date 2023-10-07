import {  useState } from "react"
import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


import { deleteProfile } from "../../../../services/operations/SettingsAPI"
import ConfirmationModal from "../../../common/ConfirmationModal"


export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [confirmationModal, setConfirmationModal] = useState(null)

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-5 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-[100%] text-pink-25">
            <p className="hidden md:block">Would you like to delete account?</p>
            <p className="md:hidden">
               Deleting your account is permanent and will remove all the contain associated with it.
            </p>
            <p className="hidden md:block">
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>

          </div>
          <button

               onClick={() =>
                    setConfirmationModal({
                      text1: "Are you sure?",
                      text2: "Would you like to delete account?Deleting your account is permanent and will remove all the contain associated with it",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: handleDeleteAccount,
                      btn2Handler: ()=>setConfirmationModal(null),
                    
                    })
                  }
            className="w-fit cursor-pointer italic text-richblack-25 border-2 shadow-[10px_-5px_35px_-5px] shadow-pink-200  text-xl" 
          >
            I want to delete my account.
          </button>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}