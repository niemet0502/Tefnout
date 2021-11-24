import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isShowing, hide, title, classNames , ...props}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={`modal-overlay`}>
            <div className="modal-wrapper">
              <div className={`modal ${classNames} `}>
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{props.children}</div>
              </div>
            </div>
          </div>

          <style jsx="true">{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.2);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
              display: block !important;
              height: auto !important;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0px;
            }
            .modal-header h4{
              font-size: 20px !important;

            }
            .nav.nav-pills {
              display: flex;
              margin-top: 30px;
            }

            .nav-linkk{
              border-radius: 0 !important;
              border-top: 1px solid #efefef;
              border-bottom: 1px solid #efefef;
              border-right: 1px solid #efefef;
              border-left: 0;
              font-size: 14px;
              text-align: center;
              font-weight: 500;
              color: black !important;
              padding: 12px !important;
              color: white;
              background: #f7f7f7;
              text-decoration: none;
              width: 50%;
              display: flex; 
              align-items:center;
              justify-content: center;
            }

            .nav-linkk.active{
              color: white !important;
              background: red !important;
            }
            


            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
            .modal-body {
              padding: 0px;
            }

            .modal-body .ui[class*="left icon"].swdh95.input>input{
              padding-left: 10px !important;
            }

            .modal.chapter-modal{
              max-width: 1000px !important;
            }
          `}</style>
        </>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;