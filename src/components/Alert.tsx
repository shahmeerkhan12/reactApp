// import React from 'react'

import { ReactNode } from "react";

// export const alert = () => {
//   return (
//     <div>alert</div>
//   )
// }

interface props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};
export default Alert;
