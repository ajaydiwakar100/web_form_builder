'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Category } from 'grapesjs';
import { useEffect } from 'react';

export default function BasicEditor() {
    useEffect(() => {

        // Blocks - Columns BLocks
        const columnBlocks = [
            { id: '1-column', cols: 1, labelText: '1 Column', contentTexts: ['1 Column'], categoryId: 'Basic' },
            { id: '2-column', cols: 2, labelText: '2 Columns', contentTexts: ['Column 1', 'Column 2'], categoryId: 'Basic'  },
            { id: '3-column', cols: 3, labelText: '3 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3'],categoryId: 'Basic' },
        ];

        // Blocks - Form elements
        const formBlocks = [
            {
                id: 'form-textbox',
                label: `
                    <div style="text-align:center;">
                        <div class="gjs-block-textbox">T</div>
                        <div style="font-size: 13px;">Textbox</div>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'input',
                    attributes: { type: 'text', placeholder: 'Enter text', class: 'gjs-block-textbox-content' },
                    traits: [
                        'name',
                        'placeholder',
                        { type: 'checkbox', label: 'Required', name: 'required' }
                    ]
                }
            },
            {
                id: 'image-upload',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-image gjs-block-inage"></i><br/>
                        <span style="font-size: 13px;">Image</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    type: 'image',
                    attributes: { src: 'https://via.placeholder.com/300x150?text=Image', alt: 'Uploaded image' }
                }
            },
            {
                id: 'video-block',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-play-circle gjs-block-video"></i><br/>
                        <span style="font-size:13px;">Video</span>
                    </div>
                `,
                category: 'Extra',
                content: { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', attributes: { controls: true } }
            },
            {
                id: 'map-block',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-map-marker gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Map</span>
                    </div>
                `,
                category: 'Extra',
                content: { type: 'map' }
            },
            {
                id: 'form',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-wpforms gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Form</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'form',
                    attributes: { action: '#', method: 'post' },
                    components: [
                        {
                            tagName: 'div',
                            attributes: { class: 'form-group' },
                            components: [
                                { tagName: 'label', content: 'Name:', attributes: { for: 'name' } },
                                { tagName: 'input', attributes: { type: 'text', name: 'name', placeholder: 'Enter your name', required: true } }
                            ]
                        },
                        {
                            tagName: 'div',
                            attributes: { class: 'form-group' },
                            components: [
                                { tagName: 'label', content: 'Email:', attributes: { for: 'email' } },
                                { tagName: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Enter your email', required: true } }
                            ]
                        },
                        {
                            tagName: 'div',
                            attributes: { class: 'form-group' },
                            components: [
                                { tagName: 'label', content: 'Message:', attributes: { for: 'message' } },
                                { tagName: 'textarea', attributes: { name: 'message', placeholder: 'Enter your message', required: true, rows: 4 } }
                            ]
                        },
                        { tagName: 'button', content: 'Submit', attributes: { type: 'submit', class: 'btn-submit' } }
                    ]
                }
            },
            {
                id: 'input-box',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-font gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Input Box</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'input',
                    attributes: { type: 'text', name: 'input_name', placeholder: 'Enter value', required: true, class: 'input-box' },
                    traits: [
                        'name',
                        'placeholder',
                        { type: 'checkbox', label: 'Required', name: 'required' }
                    ]
                }
            },
            {
                id: 'form-checkbox',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-check-square gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Checkbox</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'input',
                    attributes: { type: 'checkbox', name: 'checkbox_name', value: '1' },
                    traits: ['name', 'value', { type: 'checkbox', label: 'Checked', name: 'checked' }]
                }
            },
            {
                id: 'form-radio',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-dot-circle-o gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Radio</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'input',
                    attributes: { type: 'radio', name: 'radio_group', value: 'option1' },
                    traits: ['name', 'value', { type: 'checkbox', label: 'Checked', name: 'checked' }]
                }
            },
            {
                id: 'form-select',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-sort-desc gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Select</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'select',
                    components: [
                        { tagName: 'option', content: 'Option 1', attributes: { value: 'option1' } },
                        { tagName: 'option', content: 'Option 2', attributes: { value: 'option2' } }
                    ],
                    traits: ['name']
                }
            },
            {
                id: 'form-button',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-square gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Button</span>
                    </div>
                `,
                category: 'Form',
                content: {
                    tagName: 'button',
                    content: '<i class="fa fa-check"></i> Click Me',
                    attributes: { type: 'submit', class: 'btn' },
                    traits: [
                        { type: 'text', label: 'Text', name: 'btn-text', changeProp: true },
                        { type: 'select', label: 'Type', name: 'type', options: [
                            { id: 'button', name: 'Button' },
                            { id: 'submit', name: 'Submit' },
                            { id: 'reset', name: 'Reset' }
                        ] },
                        { type: 'text', label: 'Icon (FontAwesome class)', name: 'icon-class', changeProp: true }
                    ]
                }
            },
            {
                id: 'plain-header',
                label: `
                <div style="text-align:center;">
                    <i class="fa fa-header gjs-block-map"></i><br/>
                    <span style="font-size:13px;">Header</span>
                </div>
                `,
                category: 'Layout',
                content: '<header></header>',
            },
            {
                id: 'plain-div',
                label: `
                <div style="text-align:center;">
                    <i class="fa fa-square gjs-block-map"></i><br/>
                    <span style="font-size:13px;">Div</span>
                </div>
                `,
                category: 'Layout',
                content: '<div></div>',
            },
            {
                id: 'plain-section',
                label: `
                <div style="text-align:center;">
                    <i class="fa fa-square-o gjs-block-map"></i><br/>
                    <span style="font-size:13px;">Section</span>
                </div>
                `,
                category: 'Layout',
                content: '<section></section>',
            },

        ];

        // Panel -Buttom
        const buttons = [
            { id: 'undo', label: `<i class="fa fa-undo" title="Undo"></i>`, command: 'core:undo', togglable: false },
            { id: 'redo', label: `<i class="fa fa-repeat" title="Redo"></i>`, command: 'core:redo', togglable: false },
            { id: 'clear', label: `<i class="fa fa-trash" title="Clear Canvas"></i>`, command: 'core:canvas-clear', togglable: false },
            { id: 'about-us', label: `<i class="fa fa-info-circle" title="About Us"></i>`, command: 'open-about-us', togglable: false },
            { id: 'download', label: `<i class="fa fa-download" title="Download HTML & CSS"></i>`, command: 'custom:download', togglable: false },
          
        ];
        
        // Panel- Devices
        const devices = [
            { id: 'device-desktop', title: 'Desktop', icon: 'fa fa-desktop', width: '' },
            { id: 'device-tablet', title: 'Tablet', icon: 'fa fa-tablet', width: '768px' },
            { id: 'device-mobile', title: 'Mobile', icon: 'fa fa-mobile', width: '480px' },
        ];

        // Initialize GrapesJS editor
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: false,
            canvas: { styles: ['/globals.css']},
            showDevices: false,
        });

        // Top right panel 
        buttons.forEach(btn => {
            editor.Panels.addButton('options', btn);
        });

        const bm = editor.BlockManager;

        // 1️⃣ Create a category
        bm.getCategories().add({ id: 'Basic', label: 'Basic', open: true });

        // 2️⃣ Add a simple block
            bm.add('1-column', {
        label: '1 Column', // simple label for panel
        category: 'Basic',
        content: `
            <details style="border:1px solid #000; padding:5px;">
            <summary>Click to expand/collapse</summary>
            <div style="padding:10px; border-top:1px solid #ccc;">
                This content is inside the block. It collapses/expands on the canvas.
            </div>
            </details>
        `
        });

        // // Block: Dynamically create columns
        // columnBlocks.forEach(block => {
        //     // Generate inner lines for label
        //     const innerLines = block.cols > 1 ? '<div class="inner-lines"></div>'.repeat(block.cols - 1) : '';
            
        //     // Generate label HTML
        //     const label = `
        //         <div style="text-align:center">
        //         <div class="gjs-block-col-${block.cols}" style="display:flex; gap:2px;">
        //             ${innerLines}
        //             <div style="flex:1;"></div>
        //         </div>
        //         <div style="margin-top:5px;">${block.labelText}</div>
        //         </div>
        //     `;

        //     // Generate content HTML
        //     const contentColumns = block.contentTexts
        //         .map(text => `<div class="column gjs-block-col-2-content" style="flex:1; border:1px solid #ccc; padding:5px; margin-right:2px;">${text}</div>`)
        //         .join('');
        //     const content = `<div class="row" style="display:flex;">${contentColumns}</div>`;

        //     // Add block to GrapesJS
        //     editor.BlockManager.add(block.id, {
        //         label: label,
        //         category: "Basic",
        //         content: content
        //     });
        // });
        
        // // Block: Dynamically create form elements
        // formBlocks.forEach(block => {
        //     editor.BlockManager.add(block.id, {
        //         ...block
        //     });
        // });

        // Add commands and panel buttons
        const devicePanelButtons = devices.map(device => {
            // Add command
            editor.Commands.add(`set-${device.id}`, {
                run: ed => ed.setDevice(device.title),
            });

            // Add device to DeviceManager
            if (!editor.DeviceManager.get(device.title)) {
                editor.DeviceManager.add({
                name: device.title,
                width: device.width,
                });
            }

            // Return panel button object
            return {
                id: device.id,
                command: `set-${device.id}`,
                className: device.icon,
                attributes: { title: device.title },
                active: device.id === 'device-desktop', // default active
            };
        });

        // Add custom panel with icons (instead of dropdown)
        editor.Panels.addPanel({
            id: 'panel-devices-top-left',
            el: editor.Panels.getPanel('options')?.get('el') || undefined,
            buttons: devicePanelButtons,
        });

        // Commands for switching devices
        editor.Commands.add('set-device-desktop', {
            run: (ed) => ed.setDevice('Desktop'),
        });
        editor.Commands.add('set-device-tablet', {
            run: (ed) => ed.setDevice('Tablet'),
        });
        editor.Commands.add('set-device-mobile', {
            run: (ed) => ed.setDevice('Mobile'),
        });

        // Auto-open properties when block dropped
        editor.on('block:drag:stop', component => {
            if (!component) return;
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);
            editor.runCommand('open-traits');
        });

       // Custom "Download / Import Template" command
        editor.Commands.add('custom:download', {
            run(editor) {
                const modal = editor.Modal;

                // Build modal content with textarea + import button
                const content = document.createElement('div');
                content.className = 'import-template-modal';

                content.innerHTML = `
                <h3 style="margin-bottom:10px;">Paste here your HTML/CSS and click Import</h3>
                <textarea id="import-template-input" 
                    placeholder="Paste here your HTML/CSS and click Import"
                    style="width:97%;height:200px;padding:8px;border:1px solid #ccc;border-radius:5px;font-family:monospace;font-size:14px;"></textarea>
                <button id="import-template-btn"
                    style="margin-top:10px;padding:8px 15px;background:#28a745;color:#fff;border:none;border-radius:5px;cursor:pointer;">
                    Import
                </button>
                `;

                // Open modal
                modal.open({
                    title: 'Import Template',
                    content,
                });

                // Handle Import button click
                const importBtn = content.querySelector<HTMLButtonElement>('#import-template-btn');
                const textarea = content.querySelector<HTMLTextAreaElement>('#import-template-input');

                if (importBtn && textarea) {
                importBtn.onclick = () => {
                    const code = textarea.value.trim();
                    if (!code) {
                        alert('Please paste some HTML/CSS');
                        return;
                    }

                    // Clear existing canvas
                    editor.DomComponents.clear();
                    editor.CssComposer.clear();

                    // Add new code to canvas
                    editor.setComponents(code);

                    modal.close();
                };
                }

                // Optional: Add custom class to modal wrapper
                const contentEl = modal.getContentEl();
                if (contentEl) {
                    const modalEl = contentEl.closest('.gjs-mdl-dialog');
                    if (modalEl) modalEl.classList.add('import-template-dialog');
                }
            }
        });

        // Custom "About Us" modal
        editor.Commands.add('open-about-us', {
            run(editor) {
                const modal = editor.Modal;
                modal.open({
                title: 'About this demo',
                content: `
                    <div style="padding:15px; font-family:Arial, sans-serif; line-height:1.5;">
                    <p><strong>GrapesJS Webpage Builder</strong> is a simple showcase of what is possible to achieve with the GrapesJS core library.</p>
                    
                    <p>For any hint about the demo check the 
                        Webpage Preset repository and open an issue. For problems with the builder itself, open an issue on the main GrapesJS repository.
                    </p>
                    
                    <p>Being a free and open source project contributors and supporters are extremely welcome.  
                    If you like the project support it with a donation of your choice or become a backer/sponsor via 
                    Open Collective .</p>
                    </div>
                `,
                });
            }
        });

        editor.BlockManager.getCategories().each((cat:any) => {
           cat.set('open', true); // expand all categories initially
        });


        return () => editor.destroy(); // cleanup on unmount
    }, []);   
    return (
        <div>
            <div id="gjs"></div>
        </div>
    );
}