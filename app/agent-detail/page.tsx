import Link from "next/link";

export default function AgentDetailPage() {
  return (
    <>

{/*  SideNavBar  */}
<nav className="bg-primary-container dark:bg-primary-container shadow-xl h-screen w-64 fixed left-0 top-0 flex flex-col h-full p-md z-20">
{/*  Brand Header  */}
<div className="flex items-center gap-sm mb-xl px-sm pt-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>widgets</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary">MindMesh</span>
<span className="font-label-sm text-label-sm text-on-primary-container">AI Automation</span>
</div>
</div>
{/*  Navigation Tabs  */}
<div className="flex flex-col gap-sm flex-1">
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                Dashboard
            </a>
<a className="text-secondary-fixed bg-secondary-container rounded-lg font-bold hover:bg-on-primary-fixed-variant transition-colors duration-200 Active: scale-95 transition-transform flex items-center gap-md px-md py-sm font-label-md text-label-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
                Agents
            </a>
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">account_tree</span>
                Workflows
            </a>
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">play_circle</span>
                Runs
            </a>
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">description</span>
                Templates
            </a>
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">extension</span>
                Integrations
            </a>
<a className="text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant hover:bg-on-primary-fixed-variant transition-colors duration-200 flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                Settings
            </a>
</div>
{/*  CTA Button  */}
<div className="mt-auto pt-lg">
<button className="w-full bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-label-md text-label-md py-md rounded-lg flex items-center justify-center gap-sm transition-colors shadow-sm">
<span className="material-symbols-outlined">add</span>
                New Workflow
            </button>
</div>
</nav>
{/*  Main Content Area  */}
<div className="flex-1 ml-64 flex flex-col h-screen relative">
{/*  TopNavBar  */}
<header className="bg-surface dark:bg-surface shadow-sm fixed top-0 right-0 left-64 h-16 bg-surface-container-low border-b border-outline-variant flex justify-between items-center px-lg w-full h-full z-10">
{/*  Search  */}
<div className="flex-1 max-w-md">
<div className="relative group Focus: ring-2 ring-secondary-container">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container hover:bg-surface-container-high transition-all border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-sm text-body-sm text-primary dark:text-primary placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" placeholder="Search..." type="text"/>
</div>
</div>
{/*  Right Actions  */}
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-outline-variant mx-2"></div>
<button className="w-9 h-9 rounded-full overflow-hidden border border-outline-variant hover:ring-2 hover:ring-secondary-container transition-all">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujb9Uoa2bDv0giFNaOZa4bPTbJmchv9Kw7nvrl7SkBp_YBgI63Gt_NRCptvuZnfxfZyafvHgyEk9f1olCxGNJ3njRa8EpjrYproZRDLKGcMbu4IOprbrvcA88E96HdRDoghv0tQi66pngndjuVXrgNMFWyy4PZrA9GNNFl5C5RfDPhsHxGdL5d62zZErb1kSxIi82kTGfJxx57R6PPvg4JLZaKNaKF6lfyr56P7eW0W66wSy5a_21g4hQKQkoDXx6Tgcfr7QCHz"/>
</button>
</div>
</header>
{/*  Scrollable Canvas  */}
<main className="mt-16 p-margin flex-1 overflow-y-auto bg-surface flex flex-col gap-xl">
{/*  Agent Header Section  */}
<div className="flex flex-col gap-lg">
{/*  Breadcrumbs & Title  */}
<div className="flex flex-col gap-sm">
<div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
<a className="hover:text-secondary transition-colors" href="#">Agents</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface">Email Follow-up Agent</span>
</div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-md">
<div className="w-16 h-16 bg-surface-container-highest rounded-xl flex items-center justify-center border border-outline-variant shadow-sm">
<span className="material-symbols-outlined text-[32px] text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>mark_email_read</span>
</div>
<div className="flex flex-col">
<h1 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
                                    Email Follow-up Agent
                                    <span className="inline-flex items-center gap-xs bg-tertiary-fixed/20 text-tertiary-container px-2 py-1 rounded-full font-label-sm text-label-sm border border-tertiary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                                        Active
                                    </span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Created Oct 24, 2023 • Last run 10 mins ago</p>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="px-md py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-primary bg-surface hover:bg-surface-container-low transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[18px]">pause</span>
                                Pause Agent
                            </button>
<button className="px-md py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                Run Now
                            </button>
</div>
</div>
</div>
{/*  Tabs  */}
<div className="flex items-center gap-lg border-b border-outline-variant">
<a className="text-secondary font-semibold border-b-2 border-secondary pb-sm px-xs font-label-md text-label-md" href="#">Overview</a>
<a className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all pb-sm px-xs font-label-md text-label-md border-b-2 border-transparent" href="#">Runs</a>
<a className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all pb-sm px-xs font-label-md text-label-md border-b-2 border-transparent" href="#">Workflow</a>
<a className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all pb-sm px-xs font-label-md text-label-md border-b-2 border-transparent" href="#">Logs</a>
<a className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all pb-sm px-xs font-label-md text-label-md border-b-2 border-transparent" href="#">Settings</a>
</div>
</div>
{/*  Bento Grid Content  */}
<div className="grid grid-cols-12 gap-gutter">
{/*  Metrics Row  */}
<div className="col-span-12 grid grid-cols-3 gap-gutter">
{/*  Metric 1  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-container-high ambient-shadow flex flex-col gap-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-md opacity-10">
<span className="material-symbols-outlined text-[64px]" style={{fontVariationSettings: "'FILL' 1"}}>play_circle</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Runs (30d)</span>
<div className="flex items-end gap-sm">
<span className="font-headline-xl text-headline-xl text-primary">12,458</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container bg-tertiary-fixed-dim/20 px-1.5 py-0.5 rounded flex items-center mb-2">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                            </span>
</div>
</div>
{/*  Metric 2  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-container-high ambient-shadow flex flex-col gap-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-md opacity-10">
<span className="material-symbols-outlined text-[64px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Success Rate</span>
<div className="flex items-end gap-sm">
<span className="font-headline-xl text-headline-xl text-primary">99.2%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mb-2">avg. across workflows</span>
</div>
</div>
{/*  Metric 3  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-container-high ambient-shadow flex flex-col gap-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-md opacity-10">
<span className="material-symbols-outlined text-[64px]" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg. Response Time</span>
<div className="flex items-end gap-sm">
<span className="font-headline-xl text-headline-xl text-primary">1.2s</span>
<span className="font-label-sm text-label-sm text-error bg-error-container/50 px-1.5 py-0.5 rounded flex items-center mb-2">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 0.3s
                            </span>
</div>
</div>
</div>
{/*  Main Chart & Details Area  */}
<div className="col-span-8 bg-surface-container-lowest rounded-xl border border-surface-container-high ambient-shadow flex flex-col">
<div className="p-lg border-b border-outline-variant flex items-center justify-between">
<h2 className="font-headline-md text-headline-md text-primary">Performance Trend</h2>
<select className="bg-surface-container text-primary font-label-sm text-label-sm border border-outline-variant rounded-md px-sm py-1 outline-none focus:border-secondary">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
<option>All Time</option>
</select>
</div>
<div className="p-lg flex-1 min-h-[300px] flex items-center justify-center bg-surface-bright rounded-b-xl relative">
<img alt="Performance Chart" className="w-full h-full object-cover rounded-lg opacity-90 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0uhnOWry42YAGtOMqTrCY8O5nV0oJJX2j2CxSSGeI_8dYkry0wAPWBur_28pjeXjYF5LTPejPEQbCZHgnU-DcpL8qkWnCcHpPzTZAd-xaqvSoybzlNjp0gN0wSTrQg2p5GiC5Lwokt-PezrytTdAdO5j5le-ik5cKi3gNFNAJ-WINjiWBT51j2NizC9QA8Y61B0isqJJXIuk9LYmLxfWxylcLZc3mmAEFrWitOaIey1WgRRup2mCtCghz8Ev1xRKCkR8cW2euVQxPQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-50 rounded-b-xl pointer-events-none"></div>
</div>
</div>
{/*  Context/Info Side Panel  */}
<div className="col-span-4 flex flex-col gap-gutter">
{/*  Agent Description  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-container-high ambient-shadow flex flex-col gap-md">
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">About this Agent</h3>
<p className="font-body-md text-body-md text-primary">
                            Monitors the support inbox for specific high-priority tags and automatically drafts follow-up emails using context from previous CRM interactions. Requires human approval for emails exceeding standard discount thresholds.
                        </p>
<div className="h-px bg-outline-variant w-full my-sm"></div>
<div className="flex flex-col gap-sm">
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">LLM Model</span>
<span className="font-label-sm text-label-sm text-primary bg-surface-container px-2 py-1 rounded">GPT-4 Turbo</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Max Tokens</span>
<span className="font-label-sm text-label-sm text-primary bg-surface-container px-2 py-1 rounded">2048</span>
</div>
</div>
</div>
{/*  Connections  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-surface-container-high ambient-shadow flex flex-col gap-md flex-1">
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Active Connections</h3>
<div className="flex flex-col gap-sm mt-xs">
<div className="flex items-center gap-sm p-sm border border-outline-variant rounded-lg bg-surface">
<img alt="Integration Icon" className="w-8 h-8 rounded object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugiYnkE3sxCXCLr83GPEAuSyM7Z0RSba_CB6sKR_eOBTTyzKpnb7T4bJDWcskqQOj1Idr1eW9bRwJwwLSPNVXKpjZVU93V-xoGYsw7lTgL5EpAjkSw99ANCYan1I4wtp8S_cPUz1h7QMbcdan5IUrlHSWSat8OFUWWUP4fP6D6MNRbPZ4WIeC6JeEex1n6qyeSLG_EdCrLMV2jJhjcACeDkMUjS0ndGg7kQ-2q1H1EF2YZLSP6-vpuy1Gb_N9B98x8-YwV-JSTSEA"/>
<div className="flex flex-col flex-1">
<span className="font-label-md text-label-md text-primary">Salesforce CRM</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Read/Write</span>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">check_circle</span>
</div>
<div className="flex items-center gap-sm p-sm border border-outline-variant rounded-lg bg-surface">
<img alt="Integration Icon" className="w-8 h-8 rounded object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ui3Ru2v3soduX-H1JhZ6n5wz5uRCjmEQEsE_YIJlCnafvmi86DNXg_9XBSr9gH_PT_78eRU74FTL5mHwH1Zf4WNgIbce7ruYKH7YMszsVRpazCV_wmCMcbCM0k2ysqWSHcGWpT_HAiWezp3udz7ykY6Ml_VXQ1UXHNFJhKjLpKern_9bToeKv9CHnnLNIDQUGJPSiVsypJuDFKVtmqwzvOMFuBQuzH6pHMk2hTuYzEfPs9fDWit056cxjv-XBpyAUBETYKeR06jXQ"/>
<div className="flex flex-col flex-1">
<span className="font-label-md text-label-md text-primary">Gmail API</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Send As</span>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]">check_circle</span>
</div>
</div>
</div>
</div>
{/*  Recent Runs Table  */}
<div className="col-span-12 bg-surface-container-lowest rounded-xl border border-surface-container-high ambient-shadow overflow-hidden">
<div className="p-lg border-b border-outline-variant flex items-center justify-between bg-surface-bright">
<h2 className="font-headline-md text-headline-md text-primary">Recent Runs</h2>
<a className="font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant flex items-center gap-xs transition-colors" href="#">
                            View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Run ID</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Status</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Trigger</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Duration</th>
<th className="py-md px-lg font-label-sm text-label-sm text-on-surface-variant uppercase font-medium">Timestamp</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50 bg-surface-container-lowest">
<tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="py-md px-lg font-body-sm text-body-sm text-primary font-medium">#RN-8842</td>
<td className="py-md px-lg">
<span className="inline-flex items-center gap-xs bg-tertiary-fixed/20 text-tertiary-container px-2 py-1 rounded font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Success
                                        </span>
</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">Webhook (Zendesk)</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">1.4s</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                                        Just now
                                        <span className="material-symbols-outlined text-outline group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">chevron_right</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="py-md px-lg font-body-sm text-body-sm text-primary font-medium">#RN-8841</td>
<td className="py-md px-lg">
<span className="inline-flex items-center gap-xs bg-tertiary-fixed/20 text-tertiary-container px-2 py-1 rounded font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Success
                                        </span>
</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">Webhook (Zendesk)</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">1.1s</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                                        5 mins ago
                                        <span className="material-symbols-outlined text-outline group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">chevron_right</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="py-md px-lg font-body-sm text-body-sm text-primary font-medium">#RN-8840</td>
<td className="py-md px-lg">
<span className="inline-flex items-center gap-xs bg-error-container/50 text-on-error-container px-2 py-1 rounded font-label-sm text-label-sm border border-error/20">
<span className="material-symbols-outlined text-[14px]">error</span> Failed
                                        </span>
</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">Manual Run</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">0.8s</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                                        12 mins ago
                                        <span className="material-symbols-outlined text-outline group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">chevron_right</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
<td className="py-md px-lg font-body-sm text-body-sm text-primary font-medium">#RN-8839</td>
<td className="py-md px-lg">
<span className="inline-flex items-center gap-xs bg-tertiary-fixed/20 text-tertiary-container px-2 py-1 rounded font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Success
                                        </span>
</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">Schedule</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant">2.3s</td>
<td className="py-md px-lg font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
                                        1 hour ago
                                        <span className="material-symbols-outlined text-outline group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all">chevron_right</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Bottom padding for scrollability  */}
<div className="h-8"></div>
</main>
</div>

    </>
  );
}
