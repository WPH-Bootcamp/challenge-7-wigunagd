function closeModal(): void {
  const modal = document.getElementById("dialogModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
}

const Modal = () => {
  return (
    <div id="dialogModal" className="fixed inset-0 z-50 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" aria-hidden="true">

      <div id="modalOverlay" onClick={closeModal} className="absolute inset-0 bg-gray-700 opacity-50 transition-opacity duration-300 ease-out" aria-hidden="true"></div>

      <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">

        <div id="modalPanel" className="relative rounded-xl shadow-2xl overflow-hidden transform transition-all w-[353px] md:w-[518px] duration-300 ease-out">

          <div className="flex items-start justify-between pb-4 bg-white dark:bg-gray-700">
            &nbsp;
          </div>

          <div className="bg-white dark:bg-gray-700">
            {/* <!-- Modal Body --> */}
            <div className="grid justify-center">
              <img id="imgmsgfail" src="src/assets/images/message-not-received.svg" alt="" />
              <img id="imgmsgsuccess" src="src/assets/images/message-received.svg" alt="" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 px-5">
            {/* <!-- Modal Body --> */}
            <div className="text-center py-20">
              <h4 className="text-lg font-bold" id="msgtitle">Title Here</h4>
              <p className="text-md text-gray-500" id="msgcontent">
                Message Here
              </p>
            </div>
          </div>

          {/* <!-- Modal Footer --> */}
          <div className="bg-white dark:bg-gray-900 px-6 py-4 flex justify-end gap-3">
            <button id="btnmsgaction" className="w-full text-center rounded-3xl p-2 text-white globalbackgroundtheme hover:bg-amber-300" onClick={closeModal}>Send</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
