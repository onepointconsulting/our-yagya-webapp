import useMenuScrollHooks from '../../hooks/useMenuScrollHook'

const PillMenu = () => {
  const [stickyPillMenu] = useMenuScrollHooks();

  return (
    <div className="hidden lg:block">
      <div
        className={
          stickyPillMenu
            ? "fadeInTopMenu pill-menu showing"
            : "fadeOutTopMenu pill-menu hide"
        }
      >
        <div
          className="flex flex-col float-right ml-auto mt-1"
          style={{ marginRight: "6px" }}
        >
          <div className="p-2 m-1 px-2 text-yagya-red-color bg-white border-2 rounded-full border-yagya-red-color">
            <img className="h-5 w-5" src="../img/icons/Language.png" alt="" />
          </div>
          <div className="p-2 m-1 px-2 text-yagya-red-color bg-white border-2 rounded-full border-yagya-red-color">
            <a href="/login.html">
              {" "}
              <img className="h-5 w-5" src="../img/icons/LoginRed.png" alt="" />
            </a>
          </div>
          <div className="p-2 m-1 px-2 text-yagya-red-color bg-white border-2 rounded-full border-yagya-red-color">
            <a href="/made4me.html">
              {" "}
              <img
                className="h-5 w-5"
                src="../img/icons/StarPointer.png"
                alt=""
              />
            </a>
          </div>
          <div className="p-2 m-1 px-2 text-yagya-red-color bg-white border-2 rounded-full border-yagya-red-color">
            <img className="h-5 w-5" src="../img/icons/HeartRed.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillMenu;
