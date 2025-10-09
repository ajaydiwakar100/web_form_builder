'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Category } from 'grapesjs';
import { useEffect } from 'react';
import type { BlockProperties } from 'grapesjs';


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
            { type: 'date', label: 'Start', name: 'startDate', changeProp: true },
            { type: 'text', label: 'End Text', name: 'endText', placeholder: 'Time’s up!', changeProp: true },
        ];
        
        const tooltipTraits = [
            { type: 'text', label: 'Tooltip Text', name: 'title', placeholder: 'Enter tooltip text' },
            { type: 'text', label: 'Class', name: 'class', placeholder: 'custom-tooltip' },
            { type: 'text', label: 'ID', name: 'id', placeholder: 'tooltip-id' },
            { type: 'text', label: 'Style', name: 'style', placeholder: 'inline CSS styles' },
        ];

        const tabTraits = [
            { type: 'select', label: 'Direction', name: 'direction', options: [
                { id: 'horizontal', name: 'Horizontal' },
                { id: 'vertical', name: 'Vertical' },
            ], changeProp: true, default: 'horizontal' },
            { type: 'text', label: 'Tab 1 Label', name: 'tab1Label', changeProp: true, default: 'Tab 1' },
            { type: 'textarea', label: 'Tab 1 Content', name: 'tab1Content', changeProp: true, default: 'Editable content for Tab 1' },
            { type: 'text', label: 'Tab 2 Label', name: 'tab2Label', changeProp: true, default: 'Tab 2' },
            { type: 'textarea', label: 'Tab 2 Content', name: 'tab2Content', changeProp: true, default: 'Editable content for Tab 2' },
            { type: 'text', label: 'Tab 3 Label', name: 'tab3Label', changeProp: true, default: 'Tab 3' },
            { type: 'textarea', label: 'Tab 3 Content', name: 'tab3Content', changeProp: true, default: 'Editable content for Tab 3' },
        ];

        // Blocks - Columns BLocks
        const columnBlocks = [
            { id: '1-column', cols: 1, labelText: '1 Column', contentTexts: ['1 Column'] },
            { id: '2-column', cols: 2, labelText: '2 Columns', contentTexts: ['Column 1', 'Column 2'] },
            { id: '3-column', cols: 3, labelText: '3 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3'] },
            { id: '2-column-3-7', cols: 2, labelText: '2 Columns (3/7)', contentTexts: ['Col 1', 'Col 2'], customWidths: ['30%', '70%']},
        ];

        
        // Blocks - Form elements
        const formBlocks: BlockProperties[] = [
        
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
            styleManager: { sectors: styleManagerSector},
            storageManager: false,
            assetManager: {
                upload: false, // Disable default uploader
                uploadFile: async (e: any) => {
                    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                    if (!files?.length) return;

                    console.log('Selected files:', files);

                    // Prepare file to send
                    const fd = new FormData();
                    fd.append('file', files[0]);

                    try {
                        console.log('Uploading...');
                        const res = await fetch('/api/grapes/upload', { method: 'POST',body: fd});
                        
                        const json = await res.json();
                        console.log('Upload response:', json);

                        // Expecting API response like: { data: ["https://example.com/image.jpg"] }
                        if (json?.data?.[0]) {
                        const url = json.data[0];

                        // Add image to asset manager
                        editor.AssetManager.add(url);

                        // If image block selected, apply new src
                        const selected = editor.getSelected();
                        if (selected && selected.get('type') === 'image') {
                            selected.addAttributes({ src: url });
                        }
                        }
                    } catch (err) {
                        console.error('Upload failed:', err);
                    }
                },
            } as any,
        });

        // Top right panel 
        buttons.forEach(btn => {editor.Panels.addButton('options', btn)});
        
        //Block: Dynamically create columns
        columnBlocks.forEach(block => {
            const innerLines =
                block.cols > 1 ? '<div class="inner-lines"></div>'.repeat(block.cols - 1) : '';

            const label = `
                <div style="text-align:center">
                <div class="gjs-block-col-${block.cols}" style="display:flex; gap:2px;">
                    ${innerLines}
                    <div style="flex:1;"></div>
                </div>
                <div style="margin-top:5px;">${block.labelText}</div>
                </div>
            `;

            const contentColumns = block.contentTexts
                .map((text, i) => {
                const width = block.customWidths ? block.customWidths[i] : `${100 / block.cols}%`;
                return `
                    <div class="column gjs-block-col-${block.cols}-content"
                        style="
                        flex: 0 0 ${width};
                        max-width: ${width};
                        border: 1px solid #ccc;
                        padding: 10px;
                        min-height: 80px;
                        box-sizing: border-box;
                        ">
                    ${text}
                    </div>
                `;
                })
                .join('');

            const content = `
                <div class="row" style="
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: stretch;
                width: 100%;
                ">
                ${contentColumns}
                </div>
            `;

            editor.BlockManager.add(block.id, {
                label: label,
                content: content,
                category: {
                id: 'layout',
                label: 'Layout',
                open: true,
                },
            });
        });

        
        // Block: Dynamically create form elements
        [ ...basicBlocks, ...formBlocks, ...extraBlocks].forEach(block => editor.BlockManager.add(block.id!, block));

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


            // if (component?.get('type') === 'countdown') {
            //     editor.select(component);
            //     editor.TraitManager.render();
            //     editor.Panels.getButton('views', 'open-sm')?.set('active', true);
            // }

            // // Select the dropped component
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);

            // // Open Style Manager panel
            // editor.runCommand('open-sm'); 
            // editor.Panels.getButton('views', 'open-sm')?.set('active', true);
            // editor.Panels.getButton('views', 'open-blocks')?.set('active', false);  // highlight the button in header
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

        // On load the canvas
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

        // Register countdown type
        editor.DomComponents.addType('countdown', {
            model: {
                defaults: {
                    tagName: 'div',
                    classes: ['countdown'],
                    traits: countdownTraits,
                    selectable: true,
                    copyable: true,
                    draggable: true,
                    startDate: '',
                    format: 'dd:hh:mm:ss',
                    endText: 'Time’s up!',
                    components: [
                        {
                        tagName: 'div',
                        classes: ['countdown-wrapper'],
                        selectable: false,
                        components: [
                            { tagName: 'div', classes: ['countdown-unit'], selectable: false, components: [
                                { tagName: 'div', classes: ['countdown-digit'], content: '00', selectable: false },
                                { tagName: 'div', classes: ['countdown-label'], content: 'Days', selectable: false },
                            ]
                            },
                            { type: 'textnode', content: ':', selectable: false },
                            { tagName: 'div', classes: ['countdown-unit'], selectable: false, components: [
                                { tagName: 'div', classes: ['countdown-digit'], content: '00', selectable: false },
                                { tagName: 'div', classes: ['countdown-label'], content: 'Hours', selectable: false },
                            ]
                            },
                            { type: 'textnode', content: ':', selectable: false },
                            { tagName: 'div', classes: ['countdown-unit'], selectable: false, components: [
                                { tagName: 'div', classes: ['countdown-digit'], content: '00', selectable: false },
                                { tagName: 'div', classes: ['countdown-label'], content: 'Minutes', selectable: false },
                            ]
                            },
                            { type: 'textnode', content: ':', selectable: false },
                            { tagName: 'div', classes: ['countdown-unit'], selectable: false, components: [
                                { tagName: 'div', classes: ['countdown-digit'], content: '00', selectable: false },
                                { tagName: 'div', classes: ['countdown-label'], content: 'Seconds', selectable: false },
                            ]
                            },
                        ]
                        }
                    ],
                },
            },
            view: {
                onRender({ el, model }: { el: HTMLElement; model: any }) {
                let interval: any;
                const wrapper = el.querySelector('.countdown-wrapper');
                if (!wrapper) return;

                // Make inner elements unselectable
                el.querySelectorAll('*').forEach((child) => child.setAttribute('data-gjs-selectable', 'false'));

                const startCountdown = () => {
                    if (interval) clearInterval(interval);

                    // Restore wrapper if replaced by endText
                    if (!wrapper.parentElement?.contains(wrapper)) {
                    el.innerHTML = '';
                    el.appendChild(wrapper);
                    }

                    const updateDisplay = () => {
                    const startDateAttr = model.get('startDate');
                    const endText = model.get('endText') || 'Time’s up!';

                    if (!startDateAttr) {
                        wrapper.querySelectorAll('.countdown-digit').forEach((d: any) => d.textContent = '00');
                        return;
                    }

                    const targetDate = new Date(startDateAttr);
                    const now = new Date();
                    const diff = targetDate.getTime() - now.getTime();
                    const totalSeconds = Math.max(Math.floor(diff / 1000), 0);

                    if (diff <= 0) {
                        el.innerHTML = endText;
                        clearInterval(interval);
                        return;
                    }

                    const days = Math.floor(totalSeconds / (24 * 3600));
                    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
                    const minutes = Math.floor((totalSeconds % 3600) / 60);
                    const seconds = totalSeconds % 60;

                    const format = model.get('format') || 'dd:hh:mm:ss';
                    let values: string[] = [];

                    if (format === 'dd:hh:mm:ss') {
                        values = [
                        String(days).padStart(2, '0'),
                        String(hours).padStart(2, '0'),
                        String(minutes).padStart(2, '0'),
                        String(seconds).padStart(2, '0'),
                        ];
                    } else if (format === 'hh:mm:ss') {
                        const totalHours = Math.floor(totalSeconds / 3600);
                        values = [
                        String(totalHours).padStart(2, '0'),
                        String(minutes).padStart(2, '0'),
                        String(seconds).padStart(2, '0'),
                        '00',
                        ];
                    } else if (format === 'mm:ss') {
                        const totalMinutes = Math.floor(totalSeconds / 60);
                        values = [
                        String(totalMinutes).padStart(2, '0'),
                        String(seconds).padStart(2, '0'),
                        '00',
                        '00',
                        ];
                    }

                    wrapper.querySelectorAll('.countdown-digit').forEach((d: any, i: number) => {
                        d.textContent = values[i] || '00';
                    });
                    };

                    updateDisplay();
                    interval = setInterval(updateDisplay, 1000);
                };

                startCountdown();
                model.on('change:startDate change:format', startCountdown);
                model.once('destroy', () => clearInterval(interval));
                },
            },
        });

        // Add block using the type
        editor.BlockManager.add('countdown', {
            label: `<div style="text-align:center;"><i class="fa fa-clock-o gjs-block-map"></i><br/><span style="font-size:11px;">CountDown</span></div>`,
            category: 'Extra',
            content: { type: 'countdown' },
        });

        //Add horizontal tabs block
        editor.BlockManager.add('tabs', {
            id: 'tabs',
            category: 'Extra',
            label: `<div style="text-align:center;">
                        <i class="fa fa-folder gjs-block-map"></i><br/>
                        <span style="font-size:13px;">Tabs</span>
                    </div>`,
            content: {
                tagName: 'div',
                classes: ['tabs-container'],
                traits: tabTraits,
                selected: true,
                components: [
                { tagName: 'ul', classes: ['tabs'], components: [
                    { tagName: 'li', classes: ['tab', 'active'], content: 'Tab 1' },
                    { tagName: 'li', classes: ['tab'], content: 'Tab 2' },
                    { tagName: 'li', classes: ['tab'], content: 'Tab 3' },
                ] },
                { tagName: 'div', classes: ['tab-content'], components: [
                    { tagName: 'div', classes: ['tab-panel', 'active'], content: 'Editable content for Tab 1' },
                    { tagName: 'div', classes: ['tab-panel'], content: 'Editable content for Tab 2' },
                    { tagName: 'div', classes: ['tab-panel'], content: 'Editable content for Tab 3' },
                ] },
                ],
                script: function () {
                const el = this as unknown as HTMLElement;
                const model = (this as any).model;

                const bindTabs = () => {
                    const tabs = el.querySelectorAll('.tab');
                    const panels = el.querySelectorAll('.tab-panel');

                    console.log('Binding tabs...', { tabs, panels });

                    const switchTab = (idx: number) => {
                        console.log(`Switching to tab index: ${idx}`);
                        tabs.forEach(t => t.classList.remove('active'));
                        panels.forEach(p => p.classList.remove('active'));
                        tabs[idx].classList.add('active');
                        panels[idx].classList.add('active');
                    };

                    // Bind click events
                    tabs.forEach((tab, idx) => {
                        (tab as HTMLElement).addEventListener('click', () => switchTab(idx));
                    });

                    // Update labels and content from traits
                    console.log('Updating traits...', {
                    tab1Label: model.get('tab1Label'),
                    tab2Label: model.get('tab2Label'),
                    tab3Label: model.get('tab3Label'),
                    tab1Content: model.get('tab1Content'),
                    tab2Content: model.get('tab2Content'),
                    tab3Content: model.get('tab3Content'),
                    direction: model.get('direction'),
                    });

                    tabs[0].textContent = model.get('tab1Label') || 'Tab 1';
                    tabs[1].textContent = model.get('tab2Label') || 'Tab 2';
                    tabs[2].textContent = model.get('tab3Label') || 'Tab 3';

                    panels[0].textContent = model.get('tab1Content') || '';
                    panels[1].textContent = model.get('tab2Content') || '';
                    panels[2].textContent = model.get('tab3Content') || '';

                    // Direction trait
                    const direction = model.get('direction') || 'horizontal';
                    el.classList.toggle('vertical', direction === 'vertical');
                    console.log('Tab direction:', direction);
                };

                // Initial binding
                bindTabs();

                // Rebind whenever traits change
                model.on(
                    'change:direction change:tab1Label change:tab1Content change:tab2Label change:tab2Content change:tab3Label change:tab3Content',
                    () => {
                    console.log('Trait changed, rebinding...');
                    bindTabs();
                    }
                );
                },
            },
        });

        editor.BlockManager.add('image-upload', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-image gjs-block-image gjs-block-map"></i><br/>
                <span style="font-size:13px;">Image</span>
                </div>
            `,
            category: 'Basic',
            content: {
                type: 'image',
                attributes: {
                    src: 'https://via.placeholder.com/300x150?text=Upload+Image',
                    alt: 'Uploaded image',
                },
            },
        });

        // Listen for remove action
        editor.on('asset:remove', async (model: any) => {
            const url = model.get('src'); // URL of the removed image
            console.log('Asset removed:', url);

            if (!url) return;

            try {
                const res = await fetch('/api/grapes/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
                });
                const json = await res.json();
                if (json.success) {
                console.log(' File deleted from', json.deletedFrom);
                } else {
                console.warn('Delete failed:', json.error);
                }
            } catch (err) {
                console.error('Delete API error:', err);
            }
        });

        editor.BlockManager.add('dynamic-form', {
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
                attributes: { action: '', method: 'post', webhook: 'http://example/api/webhook' },
                traits: [
                    { type: 'text', label: 'Action URL', name: 'action', placeholder: 'http://example/api/form' },
                    { type: 'select', label: 'Method', name: 'method', options: [{ id: 'POST', name: 'POST' }, { id: 'GET', name: 'GET' }], value: 'post' },
                    { type: 'text', label: 'Webhook URL', name: 'webhook', placeholder: 'http://example/api/webhook' }
                ],
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
                ],
                script: function () {
                    const form = this;

                    form.addEventListener('submit', async (e:any) => {
                        e.preventDefault();

                        const data: Record<string, any> = {};
                        new FormData(form).forEach((value, key) => (data[key] = value));

                        // Main form action
                        const action = form.getAttribute('action') || '';
                        const method = (form.getAttribute('method') || 'POST').toUpperCase();
                        if (action) {
                            fetch(action, { 
                                method: method,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(data) 
                            });
                        }

                        // Optional webhook
                        const webhook = form.getAttribute('webhook');
                        if (webhook) {
                        fetch(webhook, {
                            method: method,
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        }).then(() => console.log('Webhook sent!'));
                        }
                    });
                }
            } as any
        });

        return () => editor.destroy(); // cleanup on unmount
    }, []);   
    return (
        <div>
            <div id="gjs"></div>
        </div>
    );
}