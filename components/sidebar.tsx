import { LayoutDashboard, FileText, Database, FilePlus2, BookOpen, UserCog, Grid } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-[220px] bg-gray-800 text-white flex flex-col">
      <div className="p-4 flex items-center space-x-2">
        <img
          src="https://orgvitality.com/hs-fs/hubfs/~Logo_OV-OrgVitality_Bkg_Transparent-Sep-23-2024-05-31-56-6493-PM.png?width=472&height=100&name=~Logo_OV-OrgVitality_Bkg_Transparent-Sep-23-2024-05-31-56-6493-PM.png"
          alt="OrgVitality Logo"
          className="w-full h-full cursor-pointer"
        />
      </div>

      <div className="p-4 border-b border-gray-700 flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-600 mr-3 overflow-hidden">
          <img src="/js.png" alt="User avatar" width={48} height={48} />
        </div>
        <div className="flex items-center gap-2 justify-between">
          <div className="text-xs font-medium cursor-pointer">Jeffrey Saltzman</div>
          <div className="text-xs text-gray-400">▼</div>
        </div>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <LayoutDashboard className="h-5 w-5 text-gray-400" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <FileText className="h-5 w-5 text-gray-400" />
              <span>Report Library</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <Database className="h-5 w-5 text-gray-400" />
              <span>Explore Data Groups</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <FilePlus2 className="h-5 w-5 text-gray-400" />
              <span>Create New Report</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <UserCog className="h-5 w-5 text-gray-400" />
              <span>User Admin</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700">
              <Grid className="h-5 w-5 text-gray-400" />
              <span>Other Portals</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
