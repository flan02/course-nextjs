import "../../globals.css";
//grid grid-cols-12 h-screen border border-yellow-300 bg-white
function Loading() {
  return (
    <aside className="grid grid-cols-12 h-screen justify-center">
      <div className="flex flex-col items-center w-max h-max col-start-6 my-48">
        <div className="lds-ripple ">
          <div></div>
          <div></div>
        </div>
        <span className="text-xl text-slate-300">...artificial loader</span>
      </div>
    </aside>
  );
}

export default Loading;
