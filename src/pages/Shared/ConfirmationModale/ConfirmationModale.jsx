import React from "react";


const ConfirmationModale = ({title, message, closeModal,successButtonName, successAction, modalData}) => {


  return (
    <div>
      
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
            {message}
          </p>
          <div className="modal-action">
            {/* <label 
            onClick={()=> successAction(modalData)} 
            htmlFor="confirmation-modal" 
            className="btn btn-error"
            
            
            >
              Delete
            </label> */}
            <label 
                        onClick={() => successAction(modalData)} 
                        htmlFor="confirmation-modal" 
                        className="btn btn-primary">{successButtonName}</label>
            <label onClick={closeModal} htmlFor="confirmation-modal" className="btn">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModale;
