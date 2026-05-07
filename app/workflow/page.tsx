import Link from "next/link";

export default function WorkflowBuilderPage() {
  return (
    <>

{/*  SideNavBar  */}
<nav className="bg-primary-container dark:bg-primary-container h-screen w-64 fixed left-0 top-0 shadow-xl z-20 flex flex-col p-md">
<div className="mb-xl flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary text-sm">hub</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary dark:text-on-primary leading-none">MindMesh</h1>
<p className="font-label-sm text-label-sm text-on-primary-container mt-xs">AI Automation</p>
</div>
</div>
<button className="w-full bg-secondary text-on-secondary rounded-lg py-sm px-md flex items-center justify-center gap-sm font-label-md text-label-md mb-lg hover:bg-secondary-container transition-colors duration-200">
<span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
            New Workflow
        </button>
<ul className="flex flex-col gap-xs flex-1">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="font-label-md text-label-md">Agents</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-secondary-fixed bg-secondary-container font-bold scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span className="font-label-md text-label-md">Workflows</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
<span className="font-label-md text-label-md">Runs</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-md text-label-md">Templates</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="extension">extension</span>
<span className="font-label-md text-label-md">Integrations</span>
</a>
</li>
<li className="mt-auto">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-primary-container hover:text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</li>
</ul>
</nav>
{/*  Main Content Area  */}
<div className="ml-64 flex-1 flex flex-col h-screen relative">
{/*  TopNavBar  */}
<header className="bg-surface dark:bg-surface fixed top-0 right-0 left-64 h-16 shadow-sm z-10 bg-surface-container-low border-b border-outline-variant flex justify-between items-center px-lg">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-all">arrow_back</span>
<div>
<h2 className="font-headline-sm text-headline-sm font-semibold text-primary">Email Follow-up Agent</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Last edited 2 mins ago</p>
</div>
<span className="bg-surface-container-high text-secondary-container px-sm py-xs rounded-md font-label-sm text-label-sm ml-md">Draft</span>
</div>
<div className="flex items-center gap-lg">
<button className="bg-surface text-on-surface border border-outline-variant rounded-lg py-sm px-md font-label-md text-label-md hover:bg-surface-container-low transition-all focus:ring-2 focus:ring-secondary-container">
                    Test Run
                </button>
<button className="bg-secondary text-on-secondary rounded-lg py-sm px-md font-label-md text-label-md hover:bg-secondary-container transition-all focus:ring-2 focus:ring-secondary-container shadow-sm flex items-center gap-sm">
<span className="material-symbols-outlined" data-icon="publish" style={{fontSize: "18px"}}>publish</span>
                    Publish
                </button>
<div className="flex items-center gap-md border-l border-outline-variant pl-lg ml-sm">
<button className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all p-sm rounded-full focus:ring-2 focus:ring-secondary-container">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all p-sm rounded-full focus:ring-2 focus:ring-secondary-container">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border-2 border-surface cursor-pointer">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhnOWry42YAGtOMqTrCY8O5nV0oJJX2j2CxSSGeI_8dYkry0wAPWBur_28pjeXjYF5LTPejPEQbCZHgnU-DcpL8qkWnCcHpPzTZAd-xaqvSoybzlNjp0gN0wSTrQg2p5GiC5Lwokt-PezrytTdAdO5j5le-ik5cKi3gNFNAJ-WINjiWBT51j2NizC9QA8Y61B0isqJJXIuk9LYmLxfWxylcLZc3mmAEFrWitOaIey1WgRRup2mCtCghz8Ev1xRKCkR8cW2euVQxPQ"/>
</div>
</div>
</div>
</header>
{/*  Builder Workspace  */}
<div className="flex-1 mt-16 flex relative overflow-hidden">
{/*  Left Panel: Nodes Palette  */}
<aside className="w-72 bg-surface border-r border-outline-variant flex flex-col h-full z-10 shadow-sm overflow-y-auto">
<div className="p-md border-b border-outline-variant sticky top-0 bg-surface z-10">
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-sm pl-xl pr-sm font-body-sm text-body-sm focus:border-secondary focus:ring-2 focus:ring-secondary-container transition-all outline-none" placeholder="Search nodes..." type="text"/>
</div>
</div>
<div className="p-md flex flex-col gap-lg">
{/*  Triggers  */}
<div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Triggers</h3>
<div className="flex flex-col gap-sm">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Schedule</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Run on a timer</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Webhook</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Catch incoming data</p>
</div>
</div>
</div>
</div>
{/*  Actions  */}
<div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Actions</h3>
<div className="flex flex-col gap-sm">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Gmail</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Read / Send Email</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="forum">forum</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Slack</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Send Notification</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="table_chart">table_chart</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Google Sheets</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Update rows</p>
</div>
</div>
</div>
</div>
{/*  AI Tools  */}
<div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">AI Tools</h3>
<div className="flex flex-col gap-sm">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">AI Prompt</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Generate text/JSON</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-secondary hover:shadow-sm transition-all">
<div className="w-8 h-8 rounded bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined" data-icon="summarize">summarize</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Summarizer</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Condense long text</p>
</div>
</div>
</div>
</div>
</div>
</aside>
{/*  Canvas Area  */}
<main className="flex-1 grid-bg relative overflow-hidden cursor-move">
{/*  SVG for Connections  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
{/*  Schedule to Read Email  */}
<path className="bezier-line" d="M 220 150 C 300 150, 300 150, 380 150"></path>
{/*  Read Email to AI Prompt  */}
<path className="bezier-line" d="M 680 150 C 760 150, 760 300, 840 300"></path>
{/*  AI Prompt to Send Email  */}
<path className="bezier-line" d="M 1140 300 C 1220 300, 1220 200, 1300 200"></path>
{/*  AI Prompt to Slack  */}
<path className="bezier-line" d="M 1140 300 C 1220 300, 1220 400, 1300 400"></path>
</svg>
{/*  Zoom Controls  */}
<div className="absolute bottom-md left-md flex flex-col gap-xs bg-surface shadow-sm rounded-lg border border-outline-variant z-10">
<button className="p-xs text-on-surface-variant hover:text-secondary hover:bg-surface-container-low rounded-t-lg transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
<div className="h-px bg-outline-variant w-full"></div>
<button className="p-xs text-on-surface-variant hover:text-secondary hover:bg-surface-container-low transition-colors font-label-sm text-label-sm">
                        100%
                    </button>
<div className="h-px bg-outline-variant w-full"></div>
<button className="p-xs text-on-surface-variant hover:text-secondary hover:bg-surface-container-low rounded-b-lg transition-colors">
<span className="material-symbols-outlined" data-icon="remove">remove</span>
</button>
</div>
{/*  Node: Schedule  */}
<div className="absolute top-[110px] left-[50px] w-[280px] bg-surface rounded-xl shadow-lg border border-outline-variant z-10 cursor-pointer hover:border-secondary transition-colors">
<div className="p-md flex items-center justify-between border-b border-surface-container-high bg-surface-container-lowest rounded-t-xl">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary" data-icon="schedule">schedule</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Schedule Trigger</span>
</div>
<span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
</div>
<div className="p-md bg-surface rounded-b-xl">
<p className="font-body-sm text-body-sm text-on-surface-variant">Runs every 1 hour</p>
</div>
{/*  Output Port  */}
<div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-surface shadow-sm"></div>
</div>
{/*  Node: Read Emails  */}
<div className="absolute top-[110px] left-[380px] w-[280px] bg-surface rounded-xl shadow-lg border border-outline-variant z-10 cursor-pointer hover:border-secondary transition-colors">
{/*  Input Port  */}
<div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full border-2 border-outline-variant shadow-sm"></div>
<div className="p-md flex items-center justify-between border-b border-surface-container-high bg-error-container rounded-t-xl">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-on-error flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-on-error-container" data-icon="mail">mail</span>
</div>
<span className="font-label-md text-label-md text-on-error-container font-semibold">Read Emails</span>
</div>
<span className="material-symbols-outlined text-on-error-container text-sm">more_horiz</span>
</div>
<div className="p-md bg-surface rounded-b-xl">
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm"><span className="font-medium text-on-surface">Account:</span> support@acme.com</p>
<p className="font-body-sm text-body-sm text-on-surface-variant"><span className="font-medium text-on-surface">Query:</span> is:unread label:inquiry</p>
</div>
{/*  Output Port  */}
<div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-surface shadow-sm"></div>
</div>
{/*  Node: AI Prompt (Active)  */}
<div className="absolute top-[260px] left-[840px] w-[320px] bg-surface rounded-xl shadow-xl border-2 border-secondary z-20 cursor-pointer">
{/*  Input Port  */}
<div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full border-2 border-outline-variant shadow-sm"></div>
<div className="p-md flex items-center justify-between border-b border-surface-container-high bg-secondary-fixed rounded-t-xl">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-on-secondary-fixed" data-icon="smart_toy">smart_toy</span>
</div>
<span className="font-label-md text-label-md text-on-secondary-fixed font-bold">Generate Reply</span>
</div>
<span className="bg-surface-container-lowest text-secondary-container px-xs py-[2px] rounded text-[10px] font-bold uppercase">Active</span>
</div>
<div className="p-md bg-surface rounded-b-xl">
<div className="flex items-center gap-xs mb-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface">Model: GPT-4o</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Prompt: Analyze the {"{{"}Email Body{"}}"} and...</p>
<div className="mt-md flex gap-sm">
<span className="px-sm py-xs bg-surface-container-low rounded border border-outline-variant font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">data_object</span>
                                response_text
                            </span>
</div>
</div>
{/*  Output Port  */}
<div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full border-2 border-surface shadow-sm"></div>
</div>
{/*  Node: Send Email  */}
<div className="absolute top-[160px] left-[1300px] w-[280px] bg-surface rounded-xl shadow-lg border border-outline-variant z-10 cursor-pointer hover:border-secondary transition-colors opacity-80">
{/*  Input Port  */}
<div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full border-2 border-outline-variant shadow-sm"></div>
<div className="p-md flex items-center justify-between border-b border-surface-container-high bg-error-container rounded-t-xl">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-on-error flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-on-error-container" data-icon="send">send</span>
</div>
<span className="font-label-md text-label-md text-on-error-container font-semibold">Send Reply</span>
</div>
<span className="material-symbols-outlined text-on-error-container text-sm">more_horiz</span>
</div>
<div className="p-md bg-surface rounded-b-xl">
<p className="font-body-sm text-body-sm text-on-surface-variant mb-sm"><span className="font-medium text-on-surface">To:</span> {"{{"}Sender Email{"}}"}</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate"><span className="font-medium text-on-surface">Body:</span> {"{{"}response_text{"}}"}</p>
</div>
</div>
{/*  Node: Slack Notify  */}
<div className="absolute top-[360px] left-[1300px] w-[280px] bg-surface rounded-xl shadow-lg border border-outline-variant z-10 cursor-pointer hover:border-secondary transition-colors opacity-80">
{/*  Input Port  */}
<div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-surface-container-highest rounded-full border-2 border-outline-variant shadow-sm"></div>
<div className="p-md flex items-center justify-between border-b border-surface-container-high bg-surface-container-low rounded-t-xl">
<div className="flex items-center gap-sm">
<div className="w-6 h-6 rounded bg-surface flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-sm text-primary" data-icon="forum">forum</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Notify Team</span>
</div>
<span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
</div>
<div className="p-md bg-surface rounded-b-xl">
<p className="font-body-sm text-body-sm text-on-surface-variant"><span className="font-medium text-on-surface">Channel:</span> #support-logs</p>
</div>
</div>
</main>
{/*  Right Panel: Node Config  */}
<aside className="w-80 bg-surface border-l border-outline-variant flex flex-col h-full z-10 shadow-sm overflow-y-auto">
<div className="p-md border-b border-outline-variant flex justify-between items-center sticky top-0 bg-surface z-10">
<h3 className="font-headline-md text-headline-md text-primary">Node Details</h3>
<button className="text-on-surface-variant hover:text-secondary transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div className="p-md flex-1 flex flex-col gap-lg">
{/*  Header  */}
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-xl" data-icon="smart_toy">smart_toy</span>
</div>
<div>
<input className="font-label-md text-label-md text-on-surface bg-transparent border-none p-0 focus:ring-0 outline-none w-full" type="text" value="Generate Reply"/>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">AI Prompt Action</p>
</div>
</div>
<div className="h-px bg-outline-variant w-full"></div>
{/*  Config Form  */}
<div className="flex flex-col gap-md">
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-sm">AI Model</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-sm font-body-sm text-body-sm focus:border-secondary focus:ring-2 focus:ring-secondary-container transition-all outline-none">
<option>GPT-4o (OpenAI)</option>
<option>Claude 3.5 Sonnet (Anthropic)</option>
<option>Gemini 1.5 Pro (Google)</option>
</select>
</div>
<div>
<div className="flex justify-between items-center mb-sm">
<label className="font-label-sm text-label-sm text-on-surface-variant block">System Prompt</label>
<button className="text-secondary font-label-sm text-label-sm hover:underline">Variables {}</button>
</div>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-sm font-body-sm text-body-sm focus:border-secondary focus:ring-2 focus:ring-secondary-container transition-all outline-none resize-none" rows={4}>You are a helpful customer support agent. Analyze the incoming email and generate a polite, concise response resolving the issue if possible, or acknowledging receipt if more time is needed.</textarea>
</div>
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-sm">Input Data</label>
<div className="bg-surface-container-low border border-outline-variant rounded-lg p-sm flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline text-sm" data-icon="data_object">data_object</span>
<span className="font-body-sm text-body-sm text-on-surface bg-surface-container-highest px-xs py-[2px] rounded border border-outline-variant">{"{{"}Email Body{"}}"}</span>
</div>
<span className="material-symbols-outlined text-outline text-sm cursor-pointer hover:text-error transition-colors" data-icon="delete">delete</span>
</div>
<button className="mt-sm text-secondary font-label-sm text-label-sm flex items-center gap-xs hover:underline">
<span className="material-symbols-outlined text-[14px]" data-icon="add">add</span> Add Input
                            </button>
</div>
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block mb-sm">Temperature</label>
<input className="w-full accent-secondary" max="1" min="0" step="0.1" type="range" value="0.7"/>
<div className="flex justify-between mt-xs font-label-sm text-label-sm text-on-surface-variant">
<span>Precise</span>
<span>Creative</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>

    </>
  );
}
