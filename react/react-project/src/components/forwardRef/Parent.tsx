import React, { useRef } from "react";
import ResultModal, { type ResultModalHandle } from "./ResultModal";

export default function Parent() {
  const modalRef = useRef<ResultModalHandle>(null);

  function handleOpen() {
    modalRef.current?.open();
  }

  // (optional) external close kept for debugging or manual close from console
  // function handleClose() {
  //   modalRef.current?.close();
  // }

  return (
    <div>
      <h1>ForwardRef + TypeScript Example</h1>
      <button onClick={handleOpen}>Open Modal</button>
      <ResultModal ref={modalRef} />
    </div>
  );
}