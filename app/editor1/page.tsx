'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import { useEffect } from 'react';

export default function BasicEditor() {
    useEffect(() => {

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
            { id: 'open-blocks', label: `<i class="fa fa-plus" title="Open Blocks"></i>`, command: 'toggle-blocks-panel', attributes: { title: 'Blocks' } },
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

        // Blocks - Columns BLocks
        const columnBlocks = [
            { id: '1-column', cols: 1, labelText: '1 Column', contentTexts: ['1 Column'] },
            { id: '2-column', cols: 2, labelText: '2 Columns', contentTexts: ['Column 1', 'Column 2'] },
            { id: '3-column', cols: 3, labelText: '3 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3'] },
           // { id: '4-column', cols: 4, labelText: '4 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3', 'Col 4'] },
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
                category: 'Layout',
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
            }
        ];

        // Initialize GrapesJS editor
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: true,
            panels: { defaults: [] },
            canvas: { styles: ['/globals.css']},
            //blockManager: { appendTo: '#blocks'},
        });

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

         editor.on('load', () => {
            const blocksPanel = document.querySelector('.gjs-blocks') as HTMLElement;
            if (blocksPanel) {
                console.log('Blocks panel found!', blocksPanel);
            } else {
                console.warn('Blocks panel not found yet');
            }
        });
        // Command: toggle blocks panel 
        editor.Commands.add('toggle-blocks-panel', {
            run: (editor) => {
               
                const blocksPanel = editor.Panels.getPanel('.gjs-blocks'); // default Blocks panel
                alert(blocksPanel );
                if (!blocksPanel) return;

                const isOpen = blocksPanel.get('open');
                blocksPanel.set('open', !isOpen);
                
                if (!isOpen) {
                // Hide Style Manager panel
                const stylePanel = editor.Panels.getPanel('styles'); 
                stylePanel?.set('open', false);

                // Hide Traits panel
                const traitPanel = editor.Panels.getPanel('traits');
                traitPanel?.set('open', false);
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

        // Block: Dynamically create columns
        columnBlocks.forEach(block => {
            // Generate inner lines for label
            const innerLines = block.cols > 1 ? '<div class="inner-lines"></div>'.repeat(block.cols - 1) : '';
            
            // Generate label HTML
            const label = `
                <div style="text-align:center">
                    <div class="gjs-block-col-${block.cols}">
                        ${innerLines}
                        <div style="flex: 1;"></div>
                    </div>
                    <div style="margin-top:5px;">${block.labelText}</div>
                </div>
            `;

            // Generate content HTML
            const contentColumns = block.contentTexts.map(text => `<div class="column gjs-block-col-2-content">${text}</div>`).join('');
            const content = `
                <div class="row" style="display: flex;">
                    ${contentColumns}
                </div>
            `;

            // Add block to GrapesJS
            editor.BlockManager.add(block.id, {
                label: label,
                category: 'Layout',
                content: content,
            });
        });
        
        // Block: Dynamically create form elements
        formBlocks.forEach(block => editor.BlockManager.add(block.id, block));
        
        // Auto-open properties when block dropped
        editor.on('block:drag:stop', component => {
            if (!component) return;
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);
            editor.runCommand('open-traits');
        });

       
               
        return () => editor.destroy(); // cleanup on unmount
    }, []);   
    return (
        <div>
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
                {/* <div id="blocks" className='blocks-panel'></div>  */}
               </div>
            </div>
        </div>
    );
}