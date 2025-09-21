'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Category } from 'grapesjs';
import { useEffect } from 'react';
import type { BlockProperties } from 'grapesjs';
import { registerCountdown } from '../utils/countdown';


export default function BasicEditor() {
    useEffect(() => {

        // Common traits for all inputs
        const commonTraits = [
            { type: 'text', label: 'ID', name: 'id' },
            { type: 'text', label: 'Name', name: 'name' },
            { type: 'text', label: 'Class', name: 'class' },
            { type: 'text', label: 'Style', name: 'style' },
            { type: 'checkbox', label: 'Required', name: 'required' },
            { type: 'checkbox', label: 'Readonly', name: 'readonly' },
            { type: 'checkbox', label: 'Disabled', name: 'disabled' },
            { type: 'checkbox', label: 'Autofocus', name: 'autofocus' },
        ];

        // Specialized traits
        const textInputTraits = [
            ...commonTraits,
            { type: 'text', label: 'Placeholder', name: 'placeholder' },
            { type: 'number', label: 'Max Length', name: 'maxlength' },
            { type: 'number', label: 'Min Length', name: 'minlength' },
            { type: 'text', label: 'Pattern (Regex)', name: 'pattern' },
            { type: 'text', label: 'Default Value', name: 'value' },
        ];

        const textareaTraits = [
            ...commonTraits,
            { type: 'text', label: 'Placeholder', name: 'placeholder' },
            { type: 'number', label: 'Rows', name: 'rows' },
        ];

        const checkboxRadioTraits = [
            ...commonTraits,
            { type: 'text', label: 'Value', name: 'value' },
            { type: 'checkbox', label: 'Checked', name: 'checked' },
        ];

        const buttonTraits = [
            ...commonTraits,
            { type: 'text', label: 'Text', name: 'btn-text', changeProp: true },
            { type: 'select', label: 'Type', name: 'type', options: [
                { id: 'button', name: 'Button' },
                { id: 'submit', name: 'Submit' },
                { id: 'reset', name: 'Reset' },
            ] },
            { type: 'text', label: 'Icon (FontAwesome class)', name: 'icon-class', changeProp: true },
        ];

        const linkTraits = [
            ...commonTraits,
            { type: 'text', label: 'Href', name: 'href', placeholder: 'https://example.com' },
            { type: 'text', label: 'Text', name: 'text', placeholder: 'Click here' },
            { type: 'checkbox', label: 'Open in new tab', name: 'target', valueTrue: '_blank', valueFalse: '_self' },
        ];

        const quoteTraits = [
            ...commonTraits,
            { type: 'text', label: 'Text', name: 'text', placeholder: 'Your quote...' },
            { type: 'text', label: 'Author', name: 'author', placeholder: 'Author name' },
        ];

        const textSectionTraits = [
            ...commonTraits,
            { type: 'text', label: 'Text', name: 'text', placeholder: 'Enter text...' },
        ];

        const countdownTraits = [
            { type: 'text', label: 'Target Date/Time', name: 'target', placeholder: 'YYYY-MM-DD HH:MM:SS' },
            {
                type: 'select',
                label: 'Format',
                name: 'format',
                options: [
                { id: 'hh:mm:ss', name: 'HH:MM:SS' },
                { id: 'dd:hh:mm:ss', name: 'DD:HH:MM:SS' },
                { id: 'mm:ss', name: 'MM:SS' },
                ],
            },
            { type: 'text', label: 'Expired Text', name: 'expiredText', placeholder: 'Time’s up!' },
            { type: 'checkbox', label: 'Autostart', name: 'autostart' },
            { type: 'checkbox', label: 'Show Labels', name: 'showLabels' },
            { type: 'text', label: 'Class', name: 'class' },
            { type: 'text', label: 'Style', name: 'style' },
        ];

        const tooltipTraits = [
            { type: 'text', label: 'Tooltip Text', name: 'title', placeholder: 'Enter tooltip text' },
            { type: 'text', label: 'Class', name: 'class', placeholder: 'custom-tooltip' },
            { type: 'text', label: 'ID', name: 'id', placeholder: 'tooltip-id' },
            { type: 'text', label: 'Style', name: 'style', placeholder: 'inline CSS styles' },
        ];


        // Blocks - Columns BLocks
        const columnBlocks = [
            { id: '1-column', cols: 1, labelText: '1 Column', contentTexts: ['1 Column'] },
            { id: '2-column', cols: 2, labelText: '2 Columns', contentTexts: ['Column 1', 'Column 2'] },
            { id: '3-column', cols: 3, labelText: '3 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3'] },
        ];

        // Blocks - Form elements
        const formBlocks: BlockProperties[] = [
            // Form
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
                } as any
            },

            // Input Box
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
                traits: textInputTraits
                } as any
            },

            // Checkbox
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
                traits: checkboxRadioTraits
                } as any
            },

            // Radio
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
                traits: checkboxRadioTraits
                } as any
            },

            // Select
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
                traits: [...commonTraits, { type: 'text', label: 'Options (comma-separated)', name: 'options' }],
                } as any
            },

            // Button
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
                traits: buttonTraits
                } as any
            },
        
            // Textarea
            {
                id: 'form-textarea',
                category: 'Form',
                label: `<div style="text-align:center;"><i class="fa fa-edit gjs-block-map"></i><br/><span style="font-size:13px;">Textarea</span></div>`,
                content: {
                tagName: 'textarea',
                attributes: { placeholder: 'Enter your message', rows: 4, class: 'gjs-block-textarea' },
                traits:textareaTraits
                } as any
            }
        ];

        const extraBlocks: BlockProperties[] = [
            // Typed Input
            {
                id: 'extra-typed-input',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-keyboard-o gjs-block-map"></i><br/><span style="font-size:13px;">Typed Input</span></div>`,
                content: {
                tagName: 'input',
                attributes: { type: 'text', placeholder: 'Type something...', class: 'gjs-block-typed' },
                traits: textInputTraits
                } as any
            },

            // Tooltip
            {
                id: 'extra-tooltip',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-info-circle gjs-block-map"></i><br/><span style="font-size:13px;">Tooltip</span></div>`,
                content: {
                    tagName: 'span',
                    components: 'Hover me',
                    attributes: { title: 'Tooltip text', class: 'gjs-block-tooltip' },
                    traits: tooltipTraits
                } as any
            },

            // Tabs
            {
                id: 'extra-tabs',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-folder gjs-block-map"></i><br/><span style="font-size:13px;">Tabs</span></div>`,
                content: {
                tagName: 'div',
                components: `
                    <ul class="tabs">
                    <li class="tab active">Tab 1</li>
                    <li class="tab">Tab 2</li>
                    </ul>
                    <div class="tab-content">Tab content here...</div>
                `
                } as any
            },

            // Countdown
           {
                id: 'extra-countdown',
                label: 'Countdown',
                category: 'Extra',
                content: {
                    type: 'countdown', // 🔑 important!
                    content: `
                    <div class="countdown">
                        <span data-js="day">00</span>d :
                        <span data-js="hour">00</span>h :
                        <span data-js="minute">00</span>m :
                        <span data-js="second">00</span>s
                    </div>
                    `,
                },
            },

            // Plain Header
            {
                id: 'plain-header',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-header gjs-block-map"></i><br/><span style="font-size:13px;">Header</span></div>`,
                content: '<header></header>' as any
            },

            // Plain Div
            {
                id: 'plain-div',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-square gjs-block-map"></i><br/><span style="font-size:13px;">Div</span></div>`,
                content: '<div></div>' as any
            },

            // Plain Section
            {
                id: 'plain-section',
                category: 'Extra',
                label: `<div style="text-align:center;"><i class="fa fa-square-o gjs-block-map"></i><br/><span style="font-size:13px;">Section</span></div>`,
                content: '<section></section>' as any
            },
        ];

        const basicBlocks: BlockProperties[] = [
            // Textbox Input
            {
                id: 'form-textbox',
                label: '<div style="text-align:center;"><div class="gjs-block-textbox">T</div> <div style="font-size: 13px;">Text</div></div>',
                category: 'Basic',
                content: {
                tagName: 'input',
                attributes: { type: 'text', placeholder: 'Insert your text here', class: 'gjs-block-textbox-content' },
                traits: textInputTraits
                } as any
            },

            // Image
            {
                id: 'image-upload',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-image gjs-block-inage"></i><br/>
                        <span style="font-size: 13px;">Image</span>
                    </div>
                `,
                category: 'Basic',
                content: {
                type: 'image',
                attributes: { src: 'https://via.placeholder.com/300x150?text=Image', alt: 'Uploaded image' }
                } as any
            },

            // Video
            {
                id: 'video-block',
                category: 'Basic',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-play-circle gjs-block-video"></i><br/>
                        <span style="font-size:13px;">Video</span>
                    </div>
                `,
                content: {
                type: 'video',
                src: 'https://www.w3schools.com/html/mov_bbb.mp4',
                attributes: { controls: true }
                } as any
            },

            // Map
            {
                id: 'map-block',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-map-marker gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Map</span>
                    </div>
                `,
                category: 'Basic',
                content: { type: 'map' } as any
            },

            // Link block
            {
                id: 'form-link',
                category: 'Basic',
                label: `
                    <div style="text-align:center;">
                        <i class="fa fa-link gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Link</span>
                    </div>`,
                content: {
                tagName: 'a',
                attributes: { href: '#', target: '_blank', class: 'gjs-block-link' },
                components: 'Click here',
                traits: linkTraits
                } as any
            },

            // Quote
            {
                id: 'form-quote',
                category: 'Basic',
                label: `<div style="text-align:center;"><i class="fa fa-quote-left gjs-block-map"></i><br/><span style="font-size:13px;">Quote</span></div>`,
                content: {
                tagName: 'blockquote',
                components: 'Your quote here...',
                traits: quoteTraits
                } as any
            },

            // Text Section
            {
                id: 'form-text-section',
                category: 'Basic',
                label: `<div style="text-align:center;"><i class="fa fa-align-left gjs-block-map"></i><br/><span style="font-size:13px;">Text Section</span></div>`,
                content: {
                tagName: 'div',
                components: 'Your text here...',
                traits: textSectionTraits
                } as any
            },
        ]
    
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

        // Style Manager
        const styleManagerSector = [
            { id: 'settings', name: 'Settings', open: true, buildProps: []},
            { name: 'General',open: false, buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']},
            { name: 'Flex',   open: false, buildProps: ['flex-direction','flex-wrap','justify-content','align-items','align-content','order','flex-basis','flex-grow','flex-shrink','align-self']},
            { name: 'Dimension', open: false, buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding']},
            { name: 'Typography',open: false, buildProps: ['font-family', 'font-size','font-weight','letter-spacing','color','line-height','text-align','text-shadow']},
            { name: 'Decorations', open: false, buildProps: [ 'background-color', 'border-radius', 'border','box-shadow','background']},
            { name: 'Extra', open: false, buildProps: ['opacity', 'transition', 'perspective', 'transform']},
        ];

        // Initialize GrapesJS editor
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: false,
            canvas: { styles: ['/globals.css']},
            showDevices: false,
            styleManager: { sectors: styleManagerSector}
        });

        // Top right panel 
        buttons.forEach(btn => {editor.Panels.addButton('options', btn)});
        
        // Block: Dynamically create columns
        columnBlocks.forEach(block => {
            // Generate inner lines for label
            const innerLines = block.cols > 1 ? '<div class="inner-lines"></div>'.repeat(block.cols - 1) : '';
            
            // Generate label HTML
            const label = `
                <div style="text-align:center">
                <div class="gjs-block-col-${block.cols}" style="display:flex; gap:2px;">
                    ${innerLines}
                    <div style="flex:1;"></div>
                </div>
                <div style="margin-top:5px;">${block.labelText}</div>
                </div>
            `;

            // Generate content HTML
            const contentColumns = block.contentTexts
                .map(text => `<div class="column gjs-block-col-2-content" style="flex:1; border:1px solid #ccc; padding:5px; margin-right:2px;">${text}</div>`)
                .join('');
            const content = `<div class="row" style="display:flex;">${contentColumns}</div>`;

            // Add block to GrapesJS
            editor.BlockManager.add(block.id, {
                label: label,
                content: content,
                category: {
                    id: 'layout',      
                    label: 'Layout',
                    open: true,
                }
            });
        });
        
        // Block: Dynamically create form elements
        [...basicBlocks, ...formBlocks, ...extraBlocks].forEach(block => editor.BlockManager.add(block.id!, block));

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
        ['Desktop', 'Tablet', 'Mobile'].forEach(device => {
            editor.Commands.add(`set-device-${device.toLowerCase()}`, {
                run: (ed) => ed.setDevice(device),
            });
        });

        // Auto-open properties when block dropped  && Collapse "Basic" category after dropping its block
        editor.on('block:drag:stop', (component) => {
            // Collapse all categories
            const categories = document.querySelectorAll('.gjs-block-category');
            categories.forEach(cat => cat.classList.add('collapsed'));

            if (!component) return;

            // If dropped component is an image, open Assets panel
            if (component.get('type') === 'image') {
                editor.select(component);
                editor.runCommand('open-assets', { target: component });
            }

            // Select the dropped component
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);

            // Open Style Manager panel
            editor.runCommand('open-sm'); 
            editor.Panels.getButton('views', 'open-sm')?.set('active', true);
            editor.Panels.getButton('views', 'open-blocks')?.set('active', false);  // highlight the button in header
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

        editor.on('load', () => {
            document.querySelectorAll('.gjs-block-category .gjs-title').forEach(titleEl => {
                // prevent double icons
                if (!titleEl.querySelector('.toggle-icon')) {
                    const icon = document.createElement('span');
                    icon.className = 'toggle-icon';
                    icon.innerHTML = '&#9660;'; // ▼ arrow
                    titleEl.appendChild(icon);
                }
            });

            // Collapse all categories by default
            const categories = document.querySelectorAll('.gjs-block-category');
            categories.forEach(cat => cat.classList.add('collapsed'));
        });

        // Block Toggle expand/collapse on title click 
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            // if user clicks title or toggle icon
            if (target.classList.contains('gjs-title') ||
                target.classList.contains('toggle-icon')) {
                const cat = target.closest('.gjs-block-category');
                cat?.classList.toggle('collapsed');
            }
        });

        // Register countdown ONCE when editor loads
        registerCountdown(editor, countdownTraits);
        
        // When an image component is created, add custom toolbar
        editor.on('component:add', (component) => {
            if (component.get('type') === 'image') {
                component.set({
                    toolbar: [
                        {
                            attributes: { class: 'fa fa-arrows' }, // default move
                            command: 'tlb-move',
                        },
                        {
                            attributes: { class: 'fa fa-clone' }, // clone
                            command: 'tlb-clone',
                        },
                        {
                            attributes: { class: 'fa fa-trash' }, // delete
                            command: 'tlb-delete',
                        },
                        {
                            attributes: { class: 'fa fa-edit' },
                            command(editor:any, sender:any, opt:any) {
                                editor.runCommand('open-assets', {
                                    target: component, // open asset manager for this image
                                });
                            },
                        },
                    ],
                });
            }
        });
        
        

        
        return () => editor.destroy(); // cleanup on unmount
    }, []);   
    return (
        <div>
            <div id="gjs"></div>
        </div>
    );

    
}