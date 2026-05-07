from bs4 import BeautifulSoup
import json
import re

with open('dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
script = soup.find('script', id='tailwind-config')

if script:
    js_content = script.string.strip()
    # It starts with "tailwind.config = {"
    # We want to extract just the object.
    obj_str = re.sub(r'^tailwind\.config\s*=\s*', '', js_content)
    obj_str = re.sub(r';$', '', obj_str.strip())
    
    # Python json parser is strict, but maybe the object is well-formed
    try:
        config = json.loads(obj_str)
    except json.JSONDecodeError as e:
        print("JSON parse error:", e)
        # Try a quick and dirty way to parse javascript object to python dict if it's mostly json
        # Since this is generated, it should be valid JSON
        exit(1)
        
    theme = config.get('theme', {}).get('extend', {})
    
    css = '@import "tailwindcss";\n\n'
    css += '@plugin "@tailwindcss/forms";\n'
    css += '@plugin "@tailwindcss/container-queries";\n\n'
    
    css += '@theme {\n'
    
    if 'colors' in theme:
        for k, v in theme['colors'].items():
            css += f'  --color-{k}: {v};\n'
            
    if 'borderRadius' in theme:
        for k, v in theme['borderRadius'].items():
            if k == 'DEFAULT':
                css += f'  --radius: {v};\n'
            else:
                css += f'  --radius-{k}: {v};\n'
                
    if 'spacing' in theme:
        for k, v in theme['spacing'].items():
            css += f'  --spacing-{k}: {v};\n'
            
    if 'fontFamily' in theme:
        for k, v in theme['fontFamily'].items():
            family = v[0] if isinstance(v, list) else v
            css += f'  --font-{k}: "{family}", sans-serif;\n'
            
    css += '}\n\n'
    
    css += '''
@layer base {
  :root {
    --background: var(--color-background);
    --foreground: var(--color-on-background);
  }
}
body {
  background-color: var(--background);
  color: var(--foreground);
}
'''
    
    with open('app/globals.css', 'w', encoding='utf-8') as out:
        out.write(css)
    print('globals.css updated.')
else:
    print('Tailwind config not found.')
