import React, { forwardRef, useImperativeHandle, useRef } from "react";

// Expose methods to parent
export interface ResultModalHandle {
  open: () => void;
  close: () => void;
}

const ResultModal = forwardRef<ResultModalHandle>((_, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      const dlg = dialogRef.current;
      // Open only if it's not already open (avoid InvalidStateError)
      if (dlg && !dlg.open) {
        dlg.showModal();
      }
    },
    close() {
      const dlg = dialogRef.current;
      // Close only if currently open (avoid InvalidStateError)
      if (dlg && dlg.open) {
        dlg.close();
      }
    },
  }));

  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>Hello from Modal!</h2>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;