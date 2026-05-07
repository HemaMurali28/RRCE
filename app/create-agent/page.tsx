import Link from "next/link";

export default function CreateAgentPage() {
  return (
    <>

{/*  Focused Top Header for Task Flow  */}
<header className="flex items-center justify-between px-margin py-md bg-surface-container-lowest border-b border-outline-variant shadow-sm z-10 sticky top-0">
<button className="flex items-center gap-sm text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">close</span>
<span className="font-label-md text-label-md">Cancel</span>
</button>
<div className="font-headline-sm text-headline-sm font-bold text-on-surface">
            MindMesh
        </div>
<div className="w-[72px]"></div> {/*  Spacer to balance flex-between  */}
</header>
{/*  Main Content Area  */}
<main className="flex-1 overflow-y-auto px-md md:px-margin py-xl flex justify-center">
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-margin">
{/*  Left Column: Form Flow (7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-xl">
{/*  Step Indicator  */}
<div className="flex items-center w-full max-w-md">
{/*  Step 1: Define (Active)  */}
<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
<span className="font-label-sm text-label-sm">1</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold absolute top-10 whitespace-nowrap">Define</span>
</div>
<div className="flex-1 h-[2px] bg-outline-variant mx-2"></div>
{/*  Step 2: Configure  */}
<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">2</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant absolute top-10 whitespace-nowrap">Configure</span>
</div>
<div className="flex-1 h-[2px] bg-outline-variant mx-2"></div>
{/*  Step 3: Integrate  */}
<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant absolute top-10 whitespace-nowrap">Integrate</span>
</div>
<div className="flex-1 h-[2px] bg-outline-variant mx-2"></div>
{/*  Step 4: Review  */}
<div className="flex flex-col items-center gap-xs relative z-10">
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">4</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant absolute top-10 whitespace-nowrap">Review</span>
</div>
</div>
{/*  Form Header  */}
<div className="flex flex-col gap-sm mt-md">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Define your Agent</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Describe what you want your agent to do. Be as specific as possible about its goals, constraints, and expected output formats.</p>
</div>
{/*  Main Input Area  */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-xs" htmlFor="agent-prompt">
                        Agent Prompt
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant" title="Required">asterisk</span>
</label>
<div className="relative">
<textarea className="w-full bg-surface-container-lowest border border-outline rounded-xl p-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary-fixed transition-all resize-y" id="agent-prompt" placeholder="e.g., Build a daily research assistant that scans tech news, summarizes top 5 AI papers, and formats them into a markdown bulletin sent via email..." rows={8}></textarea>
<div className="absolute bottom-md right-md flex gap-sm">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Attach file">
<span className="material-symbols-outlined text-[18px]">attach_file</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Voice input">
<span className="material-symbols-outlined text-[18px]">mic</span>
</button>
</div>
</div>
</div>
{/*  Popular Examples  */}
<div className="flex flex-col gap-md">
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Popular Examples to Start From</h3>
<div className="flex flex-wrap gap-sm">
<button className="inline-flex items-center gap-xs px-4 py-2 rounded-full bg-surface-container border border-outline-variant hover:border-secondary hover:bg-surface-container-high text-on-surface transition-all text-left">
<span className="material-symbols-outlined text-[16px] text-secondary">analytics</span>
<span className="font-label-sm text-label-sm">Data Analysis Assistant</span>
</button>
<button className="inline-flex items-center gap-xs px-4 py-2 rounded-full bg-surface-container border border-outline-variant hover:border-secondary hover:bg-surface-container-high text-on-surface transition-all text-left">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">support_agent</span>
<span className="font-label-sm text-label-sm">Customer Support Router</span>
</button>
<button className="inline-flex items-center gap-xs px-4 py-2 rounded-full bg-surface-container border border-outline-variant hover:border-secondary hover:bg-surface-container-high text-on-surface transition-all text-left">
<span className="material-symbols-outlined text-[16px] text-error">edit_document</span>
<span className="font-label-sm text-label-sm">Content Reviewer</span>
</button>
<button className="inline-flex items-center gap-xs px-4 py-2 rounded-full bg-surface-container border border-outline-variant hover:border-secondary hover:bg-surface-container-high text-on-surface transition-all text-left">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
<span className="font-label-sm text-label-sm">Meeting Summarizer</span>
</button>
</div>
</div>
{/*  Actions  */}
<div className="flex items-center justify-end gap-md mt-md pt-lg border-t border-outline-variant">
<button className="font-label-md text-label-md text-on-surface px-6 py-3 rounded-lg hover:bg-surface-container transition-colors">
                        Save as Draft
                    </button>
<button className="font-label-md text-label-md bg-secondary text-on-secondary px-6 py-3 rounded-lg flex items-center gap-sm hover:bg-on-secondary-fixed-variant shadow-sm transition-colors">
                        Continue to Configure
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Right Column: Visual Context / Bento Grid (5 cols)  */}
<div className="hidden lg:flex lg:col-span-5 flex-col gap-gutter">
{/*  Inspiration Card 1  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col">
<div className="h-48 w-full bg-surface-variant relative overflow-hidden">
<img alt="Agent capabilities illustration" className="absolute inset-0 w-full h-full object-cover opacity-90" data-alt="A modern, abstract digital illustration representing artificial intelligence processing data. The image features a network of glowing nodes and connection lines set against a clean, light mode background with soft blue and silver tones. The aesthetic is highly technical, precise, and sophisticated, reflecting advanced algorithmic capabilities." src="https://lh3.googleusercontent.com/aida/ADBb0ugiYnkE3sxCXCLr83GPEAuSyM7Z0RSba_CB6sKR_eOBTTyzKpnb7T4bJDWcskqQOj1Idr1eW9bRwJwwLSPNVXKpjZVU93V-xoGYsw7lTgL5EpAjkSw99ANCYan1I4wtp8S_cPUz1h7QMbcdan5IUrlHSWSat8OFUWWUP4fP6D6MNRbPZ4WIeC6JeEex1n6qyeSLG_EdCrLMV2jJhjcACeDkMUjS0ndGg7kQ-2q1H1EF2YZLSP6-vpuy1Gb_N9B98x8-YwV-JSTSEA"/>
</div>
<div className="p-md flex flex-col gap-sm">
<h4 className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px] text-secondary">lightbulb</span>
                            Pro Tip: Be Specific
                        </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">The more context you provide in your prompt, the better MindMesh can architect the underlying workflow and select the right toolsets.</p>
</div>
</div>
{/*  Inspiration Grid  */}
<div className="grid grid-cols-2 gap-gutter">
{/*  Mini Card A  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col aspect-square relative group cursor-pointer">
<img alt="Workflow structure graphic" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A clean, isometric 3D rendering of a conceptual workflow architecture. White and soft blue geometric blocks stack and interconnect, illustrating modular software design. Soft, ambient light mode studio lighting creates gentle drop shadows, emphasizing the modern, structured, and reliable nature of the platform." src="https://lh3.googleusercontent.com/aida/ADBb0ui3Ru2v3soduX-H1JhZ6n5wz5uRCjmEQEsE_YIJlCnafvmi86DNXg_9XBSr9gH_PT_78eRU74FTL5mHwH1Zf4WNgIbce7ruYKH7YMszsVRpazCV_wmCMcbCM0k2ysqWSHcGWpT_HAiWezp3udz7ykY6Ml_VXQ1UXHNFJhKjLpKern_9bToeKv9CHnnLNIDQUGJPSiVsypJuDFKVtmqwzvOMFuBQuzH6pHMk2hTuYzEfPs9fDWit056cxjv-XBpyAUBETYKeR06jXQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-sm">
<span className="font-label-sm text-label-sm text-on-surface font-semibold drop-shadow-sm">Workflow Structure</span>
</div>
</div>
{/*  Mini Card B  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col aspect-square relative group cursor-pointer">
<img alt="Integration tools graphic" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A sleek visualization of various application icons floating smoothly around a central hub, representing API integrations. The background is a minimalist off-white surface, illuminated with high-key lighting. The style is polished, corporate tech, utilizing a soft color palette that aligns perfectly with a professional light mode UI design." src="https://lh3.googleusercontent.com/aida/ADBb0ujb9Uoa2bDv0giFNaOZa4bPTbJmchv9Kw7nvrl7SkBp_YBgI63Gt_NRCptvuZnfxfZyafvHgyEk9f1olCxGNJ3njRa8EpjrYproZRDLKGcMbu4IOprbrvcA88E96HdRDoghv0tQi66pngndjuVXrgNMFWyy4PZrA9GNNFl5C5RfDPhsHxGdL5d62zZErb1kSxIi82kTGfJxx57R6PPvg4JLZaKNaKF6lfyr56P7eW0W66wSy5a_21g4hQKQkoDXx6Tgcfr7QCHz"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-sm">
<span className="font-label-sm text-label-sm text-on-surface font-semibold drop-shadow-sm">Integrations Hub</span>
</div>
</div>
</div>
{/*  Extra Info Card  */}
<div className="bg-surface-container-low rounded-xl p-md flex items-start gap-md border border-outline-variant/50">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-surface-container-lowest shadow-sm">
<img alt="AI Assistance avatar" className="w-full h-full object-cover" data-alt="A stylized, friendly, and highly polished 3D avatar representing an AI assistant. The character design is abstract yet approachable, featuring smooth surfaces and glowing blue accents. It is rendered in a bright, clean studio environment with soft shadows, fitting seamlessly into a high-end, light-themed SaaS interface." src="https://lh3.googleusercontent.com/aida/ADBb0ujATudAOCpJj9-r6ehdaJe5hs8F4LJAmkb4wyyZ0ngmGz5y9Gk91TStZfHv3le6UmSr_6KJuqKZYXA0rY3Rh1JM3vb6MDI8frBiyxnvMpybh5Xe8lMFvUtQcOd7oWONK3Atrk1NKTt9t4DkUBaBs9sxyfeoKrHQ37MbytA0s9avSx_V8rvuQvRzIZ9tkKaLET9LpLDWSVUWOB3-387-4jJK_YexG-2sOI7T1qsI9UMeWez5SG2dBbHLsPpof1zzJduOKDp0OamEJw"/>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-md text-label-md text-on-surface">Need help writing?</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Our AI prompt engineer can help you refine your description in the next step.</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
