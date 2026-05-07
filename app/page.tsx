import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-primary-container dark:bg-primary-container h-screen w-64 fixed left-0 top-0 shadow-xl hidden md:flex flex-col p-md z-50">
        {/* Logo/Header */}
        <div className="flex items-center gap-sm mb-xl mt-sm px-sm">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-on-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              widgets
            </span>
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary">
              MindMesh
            </h1>
            <p className="font-label-sm text-label-sm text-on-primary-container">
              AI Automation
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <button className="bg-secondary text-on-secondary font-label-md text-label-md w-full py-md rounded-lg flex items-center justify-center gap-sm mb-lg hover:bg-on-secondary-fixed-variant transition-colors">
          <span className="material-symbols-outlined">add</span>
          New Workflow
        </button>
        {/* Navigation Links */}
        <ul className="flex-1 space-y-xs overflow-y-auto">
          {/* Active Tab: Dashboard */}
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-secondary-fixed bg-secondary-container font-bold active:scale-95 transition-transform"
              href="/"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
              href="/create-agent"
            >
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-label-md text-label-md">Agents</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
              href="/workflow"
            >
              <span className="material-symbols-outlined">account_tree</span>
              <span className="font-label-md text-label-md">Workflows</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">play_circle</span>
              <span className="font-label-md text-label-md">Runs</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-md text-label-md">Templates</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">extension</span>
              <span className="font-label-md text-label-md">Integrations</span>
            </Link>
          </li>
        </ul>
        {/* Bottom Actions */}
        <div className="mt-auto pt-md border-t border-on-primary-fixed-variant">
          <Link
            className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </Link>
        </div>
      </nav>
      {/* Main Content Canvas */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* TopNavBar Component */}
        <header className="bg-surface dark:bg-surface fixed top-0 right-0 left-0 md:left-64 h-16 shadow-sm z-40 flex justify-between items-center px-lg border-b border-surface-container-high">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-on-surface-variant p-sm rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          {/* Search Bar */}
          <div className="flex-1 flex items-center ml-sm md:ml-0">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-sm rounded-full bg-surface-container-low border border-outline-variant text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container focus:border-secondary transition-all"
                placeholder="Search workflows, agents..."
                type="text"
              />
            </div>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-sm">
            <button className="p-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container-high rounded-full transition-all relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container-high rounded-full transition-all">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary-container ml-sm overflow-hidden border-2 border-surface cursor-pointer hover:ring-2 hover:ring-secondary-container transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXdJaxp0gbupyHohuiyI33gbxO25GvSGEAHM3MdH4S1atb25OA96_IomlTjnVcuOoZEQFzu9qy9CGcP2aAa_Z6M7dXljPeHIwZhwCP1GcOJAoFiwc4Fckjhe-EXqPfJ7CA7GdDe-UESdQiS3h7T10Ie7o-OZmJD-y3bD0pjnQ2ys2Pg-gmHDD_iyWmFUMMeLaECLPi4ZHW3YWY5_Gb28yFO1jzoLXwXQoCK6KvTIWNZ1NZSpQuvRmi7oRcokTEVHLA1nwdMHZ3Sck"
              />
            </div>
          </div>
        </header>
        {/* Page Content */}
        <main className="flex-1 p-gutter pt-[calc(64px+32px)] overflow-y-auto">
          {/* Welcome Section */}
          <div className="mb-margin">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
              Good morning, Aarav 👋
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Here is a summary of your AI automation activities today.
            </p>
          </div>
          {/* Metrics Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-margin">
            {/* Metric Card 1 */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col gap-sm">
              <div className="flex justify-between items-start mb-sm">
                <div className="p-sm bg-surface-container-high rounded-lg text-secondary">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <span className="text-tertiary-fixed-dim font-label-md text-label-md flex items-center bg-tertiary-fixed/10 px-xs py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>{" "}
                  +12%
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Active Agents
              </p>
              <p className="font-headline-xl text-headline-xl text-on-background">
                24
              </p>
            </div>
            {/* Metric Card 2 */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col gap-sm">
              <div className="flex justify-between items-start mb-sm">
                <div className="p-sm bg-surface-container-high rounded-lg text-secondary">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <span className="text-on-surface-variant font-label-md text-label-md flex items-center bg-surface-container px-xs py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">
                    horizontal_rule
                  </span>{" "}
                  0%
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Running Tasks
              </p>
              <p className="font-headline-xl text-headline-xl text-on-background">
                156
              </p>
            </div>
            {/* Metric Card 3 */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col gap-sm">
              <div className="flex justify-between items-start mb-sm">
                <div className="p-sm bg-surface-container-high rounded-lg text-secondary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <span className="text-tertiary-fixed-dim font-label-md text-label-md flex items-center bg-tertiary-fixed/10 px-xs py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>{" "}
                  +5.4%
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Successful Runs
              </p>
              <p className="font-headline-xl text-headline-xl text-on-background">
                8,432
              </p>
            </div>
            {/* Metric Card 4 */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col gap-sm">
              <div className="flex justify-between items-start mb-sm">
                <div className="p-sm bg-surface-container-high rounded-lg text-secondary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="text-tertiary-fixed-dim font-label-md text-label-md flex items-center bg-tertiary-fixed/10 px-xs py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>{" "}
                  +22h
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Time Saved
              </p>
              <p className="font-headline-xl text-headline-xl text-on-background">
                142h
              </p>
            </div>
          </div>
          {/* Complex Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-margin">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col">
              <div className="flex justify-between items-center mb-lg">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Execution Overview
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-full bg-secondary-container text-secondary-fixed font-label-sm text-label-sm">
                    Week
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
                    Month
                  </button>
                </div>
              </div>
              {/* Chart Placeholder */}
              <div className="flex-1 w-full bg-surface-container-low rounded-lg relative overflow-hidden min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Line chart"
                  className="w-full h-full object-cover absolute inset-0 opacity-80 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhnOWry42YAGtOMqTrCY8O5nV0oJJX2j2CxSSGeI_8dYkry0wAPWBur_28pjeXjYF5LTPejPEQbCZHgnU-DcpL8qkWnCcHpPzTZAd-xaqvSoybzlNjp0gN0wSTrQg2p5GiC5Lwokt-PezrytTdAdO5j5le-ik5cKi3gNFNAJ-WINjiWBT51j2NizC9QA8Y61B0isqJJXIuk9LYmLxfWxylcLZc3mmAEFrWitOaIey1WgRRup2mCtCghz8Ev1xRKCkR8cW2euVQxPQ"
                />
              </div>
            </div>
            {/* Top Agents List */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container flex flex-col">
              <div className="flex justify-between items-center mb-lg">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Top Agents
                </h3>
                <button className="p-xs text-on-surface-variant hover:text-secondary hover:bg-surface-container-high rounded transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto pr-sm space-y-md">
                {/* Agent Item 1 */}
                <div className="flex items-center justify-between group p-sm hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-container">
                  <div className="flex items-center gap-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover bg-surface-container-high"
                      src="https://lh3.googleusercontent.com/aida/ADBb0ugiYnkE3sxCXCLr83GPEAuSyM7Z0RSba_CB6sKR_eOBTTyzKpnb7T4bJDWcskqQOj1Idr1eW9bRwJwwLSPNVXKpjZVU93V-xoGYsw7lTgL5EpAjkSw99ANCYan1I4wtp8S_cPUz1h7QMbcdan5IUrlHSWSat8OFUWWUP4fP6D6MNRbPZ4WIeC6JeEex1n6qyeSLG_EdCrLMV2jJhjcACeDkMUjS0ndGg7kQ-2q1H1EF2YZLSP6-vpuy1Gb_N9B98x8-YwV-JSTSEA"
                    />
                    <div>
                      <p className="font-label-md text-label-md text-on-background">
                        Data Scraper Alpha
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        1,240 runs
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
                {/* Agent Item 2 */}
                <div className="flex items-center justify-between group p-sm hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-container">
                  <div className="flex items-center gap-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover bg-surface-container-high"
                      src="https://lh3.googleusercontent.com/aida/ADBb0ujb9Uoa2bDv0giFNaOZa4bPTbJmchv9Kw7nvrl7SkBp_YBgI63Gt_NRCptvuZnfxfZyafvHgyEk9f1olCxGNJ3njRa8EpjrYproZRDLKGcMbu4IOprbrvcA88E96HdRDoghv0tQi66pngndjuVXrgNMFWyy4PZrA9GNNFl5C5RfDPhsHxGdL5d62zZErb1kSxIi82kTGfJxx57R6PPvg4JLZaKNaKF6lfyr56P7eW0W66wSy5a_21g4hQKQkoDXx6Tgcfr7QCHz"
                    />
                    <div>
                      <p className="font-label-md text-label-md text-on-background">
                        Email Parser Bot
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        892 runs
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
                {/* Agent Item 3 */}
                <div className="flex items-center justify-between group p-sm hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer border border-transparent hover:border-surface-container">
                  <div className="flex items-center gap-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover bg-surface-container-high"
                      src="https://lh3.googleusercontent.com/aida/ADBb0ujATudAOCpJj9-r6ehdaJe5hs8F4LJAmkb4wyyZ0ngmGz5y9Gk91TStZfHv3le6UmSr_6KJuqKZYXA0rY3Rh1JM3vb6MDI8frBiyxnvMpybh5Xe8lMFvUtQcOd7oWONK3Atrk1NKTt9t4DkUBaBs9sxyfeoKrHQ37MbytA0s9avSx_V8rvuQvRzIZ9tkKaLET9LpLDWSVUWOB3-387-4jJK_YexG-2sOI7T1qsI9UMeWez5SG2dBbHLsPpof1zzJduOKDp0OamEJw"
                    />
                    <div>
                      <p className="font-label-md text-label-md text-on-background">
                        Support Triage
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        645 runs
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Runs Table Area */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,88,190,0.05)] border border-surface-container overflow-hidden">
            <div className="p-lg border-b border-surface-container flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-background">
                Recent Runs
              </h3>
              <a
                className="font-label-md text-label-md text-secondary hover:text-secondary-container transition-colors"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container bg-surface-container-low/50">
                    <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Workflow Name
                    </th>
                    <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-lg font-medium text-on-background">
                      Daily Sales Report Generation
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">
                      Data Scraper Alpha
                    </td>
                    <td className="py-md px-lg">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-tertiary-fixed/10 text-tertiary-fixed-dim font-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>{" "}
                        Success
                      </span>
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">45s</td>
                    <td className="py-md px-lg text-right text-on-surface-variant">
                      2 mins ago
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-lg font-medium text-on-background">
                      Customer Onboarding Sync
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">
                      CRM Sync Bot
                    </td>
                    <td className="py-md px-lg">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-error-container text-on-error-container font-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{" "}
                        Failed
                      </span>
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">12s</td>
                    <td className="py-md px-lg text-right text-on-surface-variant">
                      15 mins ago
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-lg font-medium text-on-background">
                      Process Incoming Invoices
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">
                      Email Parser Bot
                    </td>
                    <td className="py-md px-lg">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>{" "}
                        Running
                      </span>
                    </td>
                    <td className="py-md px-lg text-on-surface-variant">--</td>
                    <td className="py-md px-lg text-right text-on-surface-variant">
                      Just now
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
