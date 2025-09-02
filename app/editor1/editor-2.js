
 // Top Right panel buttons
const buttons = [
{ id: 'view-components', label: `<i class="fa fa-square" title="Components"></i>`, command: 'sw-visibility', togglable: true },
{ id: 'view-style', label: `<i class="fa fa-expand" title="Toggle Fullscreen"></i>`, command: 'custom:toggle-fullscreen', togglable: true },
{ id: 'view-code', label: `<i class="fa fa-code" title="Code View"></i>`, command: 'custom:toggle-code', togglable: false },
{ id: 'undo', label: `<i class="fa fa-undo" title="Undo"></i>`, command: 'core:undo', togglable: false },
{ id: 'redo', label: `<i class="fa fa-repeat" title="Redo"></i>`, command: 'core:redo', togglable: false },
{ id: 'download', label: `<i class="fa fa-download" title="Download HTML & CSS"></i>`, command: 'custom:download', togglable: false },
{ id: 'delete', label: `<i class="fa fa-trash" title="Clear Canvas"></i>`, command: 'custom:clear-canvas', togglable: false },
{ id: 'open-style-manager', label: `<i class="fa fa-paint-brush" title="Style Manager"></i>`, command: 'open-sm', togglable: true },
{ id: 'open-layer-manager', label: `<i class="fa fa-clone" title="Layer Manager"></i>`, command: 'open-layers', togglable: true },
{ id: 'open-blocks', label: `<i class="fa fa-plus" title="Open Blocks"></i>`, command: 'toggle-custom-blocks', attributes: { title: 'Blocks' } },
{ id: 'about-us', label: `<i class="fa fa-info-circle" title="About Us"></i>`, command: 'open-about-us', togglable: false }
];

// Device Switcher Panel
const devices = [
{ id: 'open-sm',className: 'fa fa-paint-brush', command: 'open-sm',  active: true, togglable: false, attributes: { title: 'Style Manager' },},
{ id: 'open-traits',className: 'fa fa-cog', command: 'open-traits', togglable: true, attributes: { title: 'Style Manager' },},
{ id: 'device-desktop', command: 'set-device-desktop', icon: 'fa-desktop', active: true },
{ id: 'device-tablet', command: 'set-device-tablet', icon: 'fa-tablet' },
{ id: 'device-mobile', command: 'set-device-mobile', icon: 'fa-mobile' },
];


// Panels - Top and Right
editor.Panels.addPanel({id: 'panel-top', el: '.panel__top'});

// Top right panel 
editor.Panels.addPanel({ id: 'panel-right', el: '.panel__view-buttons', buttons: buttons});

// Responsive Devices Panel 
editor.Panels.addPanel({ id: 'panel-switcher', el: '.gjs-pn-views', buttons: devices});

// Command: Responsive Devices Panel
editor.Commands.add('set-device-desktop', { run: e => e.setDevice('Desktop') });
editor.Commands.add('set-device-tablet', { run: e => e.setDevice('Tablet') });
editor.Commands.add('set-device-mobile', { run: e => e.setDevice('Mobile') });

// Command: toggle-code
editor.Commands.add('custom:toggle-code', {
run(editor) {
       const modal = editor.Modal;
       modal.isOpen() ? modal.close() : editor.runCommand('core:open-code');
},
});

// Command: fullscreen 
editor.Commands.add('custom:toggle-fullscreen', {
run() {
       const elem = document.documentElement;
       document.fullscreenElement ? document.exitFullscreen() : elem.requestFullscreen().catch(console.warn);
},
});

// Command: Download
editor.Commands.add('custom:download', {
run(editor) {
       const html = editor.getHtml();
       const css = editor.getCss();
       const content = `
       <!DOCTYPE html>
       <html>
       <head>
       <style>${css}</style>
       </head>
       <body>${html}</body>
       </html>
       `;
       const blob = new Blob([content], { type: 'text/html' });
       const a = document.createElement('a');
       a.href = URL.createObjectURL(blob);
       a.download = 'page.html';
       a.click();
}
});

// Command: Clear canvas
editor.Commands.add('custom:clear-canvas', {
run(editor) {
       if (confirm('Are you sure you want to clear the canvas?')) {
       editor.DomComponents.clear();
       editor.CssComposer.clear();
       }
}
});

// Command: toggle blocks panel 
editor.Commands.add("toggle-custom-blocks", {
run() {
       const panel = document.getElementById("custom-blocks");
       if (!panel) return;

       const isHidden = panel.style.display === "none" || !panel.style.display;
       panel.style.display = isHidden ? "block" : "none";

       if (isHidden) {
       // When opening blocks → deactivate SM + Traits
       const smBtn = editor.Panels.getButton("views", "open-sm");
       const tmBtn = editor.Panels.getButton("views", "open-tm");

       smBtn?.set("active", false);
       tmBtn?.set("active", false);
       }
},
});

// Command: open abouts us  
editor.Commands.add('open-about-us', {
run(editor) {
       editor.Modal.open({
       title: 'About Us',
       content: `
       <div style="padding:15px; font-size:14px; line-height:1.5;">
       <h3 style="margin-top:0;">About Us</h3>
       <p>
              This is your custom About Us modal.  
              You can write details about your project, developer info, 
              or even load external HTML here.
       </p>
       </div>
       `,
       });
       editor.Modal.setTitle('About Us');
}
});

  <div className="editor-row">
    <div className="panel__top">
    <div className="panel__left">
        <div className="panel__basic-actions"></div>
        
    </div>
    <div className="panel__right">
        <div className="panel__view-buttons"></div>
    </div>
    </div>

    <div className="editor-body" style={{ display: 'flex' }}>
    {/* Left canvas */}
    <div className="editor-canvas" style={{ flex: 1 }}>
        <div id="gjs">Your editor canvas here...</div>
    </div>
    
    {/* Right sidebar (initially hidden) */}
    <div
        id="custom-blocks"
        style={{
            width: "250px",
            borderLeft: "1px solid #ddd",
            overflowY: "auto",
            display: "none", // start hidden
        }}
        ></div>
    </div>
</div>