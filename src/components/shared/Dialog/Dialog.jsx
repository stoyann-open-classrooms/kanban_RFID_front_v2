import { useState } from 'react'
import "./Dialog.css"
import {FaPlus} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function Dialog({ btn, children, addIcone, editIcone }) {
  const [modal, setModal] = useState(true)

  const toogleModal = (e) => {
    setModal(!modal)
  }

  return (
    <>
      <button className="add-btn" onClick={toogleModal}>
      +
      </button>
      {!modal ? (
        <div className="overlay">
          <div className="modal">
            <button
              onKeyUp={toogleModal}
              onClick={toogleModal}
              className="close-Modal"
            >
            <AiOutlineClose/>
            </button>
            <div className="dialog_form">{children}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Dialog
