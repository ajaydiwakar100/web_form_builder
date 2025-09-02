'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Category } from 'grapesjs';
import { useEffect } from 'react';

export default function BasicEditor() {
    useEffect(() => {

        // Blocks - Columns BLocks
       const columnBlocks = [
            { id: '1-column', cols: 1, labelText: '1 Column', contentTexts: ['1 Column'] },
            { id: '2-column', cols: 2, labelText: '2 Columns', contentTexts: ['Column 1', 'Column 2'] },
            { id: '3-column', cols: 3, labelText: '3 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3']},
            // { id: '4-column', cols: 4, labelText: '4 Columns', contentTexts: ['Col 1', 'Col 2', 'Col 3', 'Col 4']},
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
            }
        ];

         // Top Right panel buttons
        const buttons = [
            { id: 'undo', label: `<i class="fa fa-undo" title="Undo"></i>`, command: 'core:undo', togglable: false },
            { id: 'redo', label: `<i class="fa fa-repeat" title="Redo"></i>`, command: 'core:redo', togglable: false },
            { id: 'download', label: `<i class="fa fa-download" title="Download HTML & CSS"></i>`, command: 'custom:download', togglable: false },
            { id: 'delete', label: `<i class="fa fa-trash" title="Clear Canvas"></i>`, command: 'custom:clear-canvas', togglable: false },
            { id: 'about-us', label: `<i class="fa fa-info-circle" title="About Us"></i>`, command: 'open-about-us', togglable: false }
        ];

        // Initialize GrapesJS editor
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: false,
            canvas: { styles: ['/globals.css']},
        });

        // Top right panel 
        editor.Panels.addPanel({ id: 'panel-top', buttons: buttons});

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
                category: { id: 'layout', label: 'Layout', open: false },
                content: content
            });
        });
        
        // Block: Dynamically create form elements
        formBlocks.forEach(block => editor.BlockManager.add(block.id, block));
        
        // // Auto-open properties when block dropped
        editor.on('block:drag:stop', component => {
            if (!component) return;
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);
            editor.runCommand('open-traits');
        });

        editor.on('load', () => {
            const categories = editor.BlockManager.getCategories();

            categories.each((cat: any) => { // you can replace `any` with proper type if you have @types/grapesjs
                cat.set('open', false);
            });
        });

        return () => editor.destroy(); // cleanup on unmount
    }, []);   
    return (
        <div id="gjs"></div>
    
    );
}