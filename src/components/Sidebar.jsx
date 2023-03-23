import { IconHomeOut, IconLogo } from "assets/icons";

function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div>
          <IconLogo />
        </div>
        <div class="page-link">
          <IconHomeOut />
          Men
        </div>
        <div class="page-link">Men</div>
        <div class="page-link">Men</div>
      </nav>
    </>
  );
}

export default Sidebar;
