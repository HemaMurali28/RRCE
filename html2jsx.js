const fs = require('fs');
const path = require('path');

function convertHtmlToJsx(html) {
    // Extract the body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let jsx = bodyMatch ? bodyMatch[1] : html;

    // Remove the SideNavBar and TopNavBar if we wanted to extract them, 
    // but for now let's keep them so the pages look right standalone.
    // Replace class with className
    jsx = jsx.replace(/class=/g, 'className=');
    // Replace for with htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Fix self-closing tags
    jsx = jsx.replace(/<img([^>]*)>/g, (m, p1) => p1.endsWith('/') ? m : `<img${p1} />`);
    jsx = jsx.replace(/<input([^>]*)>/g, (m, p1) => p1.endsWith('/') ? m : `<input${p1} />`);
    jsx = jsx.replace(/<br>/g, '<br />');
    jsx = jsx.replace(/<hr([^>]*)>/g, (m, p1) => p1.endsWith('/') ? m : `<hr${p1} />`);
    
    // Escape {{ and }} for JSX so they don't break JS parser (e.g., text placeholders)
    // We do this BEFORE converting style="" to style={{}} to avoid double-escaping
    jsx = jsx.replace(/\{\{/g, '{"{{"}');
    jsx = jsx.replace(/\}\}/g, '{"}}"}');

    // Fix inline styles
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styleObj = p1.split(';').filter(Boolean).map(s => {
            const [k, ...vParts] = s.split(':');
            const v = vParts.join(':').trim();
            const camelKey = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelKey}: ${JSON.stringify(v)}`;
        }).join(', ');
        return `style={{${styleObj}}}`;
    });
    
    // Fix HTML comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    return jsx;
}

const pages = [
    { htmlFile: 'create-new-agent.html', outDir: 'app/create-agent', compName: 'CreateAgentPage' },
    { htmlFile: 'workflow-builder.html', outDir: 'app/workflow', compName: 'WorkflowBuilderPage' },
    { htmlFile: 'agent-detail.html', outDir: 'app/agent-detail', compName: 'AgentDetailPage' }
];

for (const page of pages) {
    try {
        const html = fs.readFileSync(page.htmlFile, 'utf8');
        const jsx = convertHtmlToJsx(html);
        
        const componentCode = `import Link from "next/link";\n\nexport default function ${page.compName}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
        
        fs.mkdirSync(page.outDir, { recursive: true });
        fs.writeFileSync(path.join(page.outDir, 'page.tsx'), componentCode);
        console.log(`Converted ${page.htmlFile} to ${page.outDir}/page.tsx`);
    } catch (e) {
        console.error(`Error processing ${page.htmlFile}:`, e.message);
    }
}
