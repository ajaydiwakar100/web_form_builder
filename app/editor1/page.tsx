'use client'; 
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import { useEffect } from 'react';

export default function BasicEditor() {
    useEffect(() => {
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: true,
            panels: { defaults: [] },
            canvas: {
                styles: ['/globals.css']
            },
            blockManager: {
                appendTo: '#blocks',
            }
        });

        // Header menus
        editor.Panels.addPanel({
            id: 'panel-top',
            el: '.panel__top',
        });

        editor.Panels.addPanel({
            id: 'panel-right',
            el: '.panel__view-buttons',
            buttons: [
                {
                    id: 'view-components',
                    label: `<i class="fa fa-square" title="Components"></i>`,
                    command: 'sw-visibility',
                    togglable: true,
                },
                {
                    id: 'view-style',
                    label: `<i class="fa fa-expand" title="Toggle Fullscreen"></i>`,
                    command: 'custom:toggle-fullscreen',
                    togglable: true,
                },
                {
                    id: 'view-code',
                    label: `<i class="fa fa-code" title="Code View"></i>`,
                    command: 'custom:toggle-code',
                    togglable: false,
                },
                {
                    id: 'undo',
                    label: `<i class="fa fa-undo" title="Undo"></i>`,
                    command: 'core:undo',
                    togglable: false,
                },
                {
                    id: 'redo',
                    label: `<i class="fa fa-repeat" title="Redo"></i>`,
                    command: 'core:redo',
                    togglable: false,
                },
                {
                    id: 'download',
                    label: `<i class="fa fa-download" title="Download HTML & CSS"></i>`,
                    command: 'custom:download',
                    togglable: false,
                },
                {
                    id: 'delete',
                    label: `<i class="fa fa-trash" title="Clear Canvas"></i>`,
                    command: 'custom:clear-canvas',
                    togglable: false,
                },
                {
                    id: 'open-style-manager',
                    label: `<i class="fa fa-paint-brush" title="Style Manager"></i>`,
                    command: 'open-sm',
                    togglable: true,
                },
                {
                    id: 'open-layer-manager',
                    label: `<i class="fa fa-clone" title="Layer Manager"></i>`,
                    command: 'open-layers',
                    togglable: true,
                },
                {
                    id: 'open-blocks',
                    label: `<i class="fa fa-plus" title="Open Blocks"></i>`,
                    command: 'custom:toggle-blocks-panel',
                    togglable: true,
                },
                {
                    id: 'about-us',
                    label: `<i class="fa fa-info-circle" title="About Us (Assets Modal)"></i>`,
                    command: 'open-assets',
                    togglable: false,
                },
            ],                                        
        });
        
        // Commands
        editor.Panels.addPanel({
            id: 'panel-switcher',
            el: '.gjs-pn-views',
            buttons: [
                {
                    id: 'open-sm',
                    className: 'fa fa-paint-brush',
                    command: 'open-sm',
                    active: true,
                    togglable: true,
                    attributes: { title: 'Style Manager' },
                },
                {
                    id: 'open-traits',
                    className: 'fa fa-cog',
                    command: 'open-traits',
                    togglable: true,
                    attributes: { title: 'Properties' },
                },
                {
                    id: 'device-desktop',
                    className: `<i class="fa fa-desktop"></i>`,
                    command: 'set-device-desktop',
                    active: true,
                    togglable: false,
                },
                {
                    id: 'device-tablet',
                    label: `<i class="fa fa-tablet"></i>`,
                    command: 'set-device-tablet',
                    togglable: false,
                },
                {
                    id: 'device-mobile',
                    label: `<i class="fa fa-mobile"></i>`,
                    command: 'set-device-mobile',
                    togglable: false,
                },
            ],
        });

        editor.Commands.add('set-device-desktop', {
            run: (editor) => editor.setDevice('Desktop'),
        });
        editor.Commands.add('set-device-mobile', {
            run: (editor) => editor.setDevice('Mobile'),
        });
        editor.Commands.add('set-device-tablet', {
            run: (editor) => editor.setDevice('Tablet'),
        });
       
    
        editor.Commands.add('custom:toggle-code', {
            run(editor) {
                const modal = editor.Modal;
                if (!modal.isOpen()) {
                editor.runCommand('core:open-code');
                } else {
                modal.close();
                }
            }
        });

        editor.Commands.add('custom:toggle-fullscreen', {
            run(editor) {
                const elem = document.documentElement;

                if (!document.fullscreenElement) {
                elem.requestFullscreen().catch(err => {
                    console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
                });
                } else {
                    document.exitFullscreen();
                }
            }
        });

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

        editor.Commands.add('custom:clear-canvas', {
            run(editor) {
                if (confirm('Are you sure you want to clear the canvas?')) {
                editor.DomComponents.clear();
                editor.CssComposer.clear();
                }
            }
        });

        editor.Commands.add('custom:toggle-blocks-panel', {
            run() {
                const panel = document.getElementById('blocks');
                if (!panel) return; // Exit if panel is not found

                if (panel.style.display === 'none' || !panel.style.display) {
                panel.style.display = 'block';
                editor.runCommand('open-blocks');
                } else {
                panel.style.display = 'none';
                }
            }
        });

        editor.BlockManager.add('1-column', {
            label: `
                <div style="text-align:center">
                <div class="gjs-block-col-1"></div>
                <div class="gjs-block-col-tx">1 Column</div>
                </div>
            `,
            category: 'Layout',
            content: `
                <div class="row">
                <div class="column gjs-block-col-1-content">
                    1 Column Content
                </div>
                </div>
            `,
        });

        editor.BlockManager.add('2-column', {
        label: `
            <div style="text-align:center">
            <div class="gjs-block-col-2">
                <div class="inner-lines"></div>
                <div style="flex: 1;"></div>
            </div>
            <div style="margin-top:5px;">2 Columns</div>
            </div>
        `,
        category: 'Layout',
        content: `
            <div class="row" style="display: flex;">
                <div class="column gjs-block-col-2-content" >Column 1</div>
                <div class="column gjs-block-col-2-content"> Column 2</div>
            </div>
        `,
        });

        editor.BlockManager.add('3-column', {
        label: `
            <div style="text-align:center">
            <div class="gjs-block-col-3">
                <div class="inner-lines"></div>
                <div class="inner-lines"></div>
                <div style="flex: 1;"></div>
            </div>
            <div style="margin-top:5px;">3 Columns</div>
            </div>
        `,
        category: 'Layout',
        content: `
            <div class="row" style="display: flex;">
            <div class="column gjs-block-col-2-content">Col 1</div>
            <div class="column gjs-block-col-2-content">Col 2</div>
            <div class="column gjs-block-col-2-content">Col 3</div>
            </div>
        `,
        });
        
        editor.BlockManager.add('form-textbox', {
            label: `
                <div style="text-align:center;">
                <div class="gjs-block-textbox">T</div>
                <div style="font-size: 13px;">Textbox</div>
                </div>
            `,
            category: 'Layout',
            content: {
                tagName: 'input',
                attributes: {
                    type: 'text',
                    placeholder: 'Enter text',
                    class: 'gjs-block-textbox-content',
                },
                traits: [
                    'name',
                    'placeholder',
                    {
                        type: 'checkbox',
                        label: 'Required',
                        name: 'required',
                    },
                ],
            },
        });

        editor.BlockManager.add('image-upload', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-image gjs-block-inage" ></i><br/>
                <span style="font-size: 13px;">Image</span>
                </div>
            `,
            content: {
                type: 'image',
                attributes: {
                    src: 'https://via.placeholder.com/300x150?text=Image', // Placeholder
                    alt: 'Uploaded image',
                },
            },
        });

        editor.DomComponents.addType('image', {
            isComponent: el => el.tagName === 'IMG',
            model: {
                defaults: {
                traits: [
                    {
                    type: 'text',
                    label: 'Image URL',
                    name: 'src',
                    placeholder: 'https://...',
                    },
                    {
                    type: 'text',
                    label: 'Alt Text',
                    name: 'alt',
                    }
                ],
                // Enable "click to select/upload"
                editable: true,
                droppable: false,
                resizable: true,
                },
            },
        });

        editor.BlockManager.add('video-block', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-play-circle gjs-block-video"></i><br/>
                <span style="font-size:13px;">Video</span>
                </div>
            `,
            content: {
                type: 'video',
                src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Default sample video
                attributes: {
                controls: true,
                },
            },
        });

        editor.BlockManager.add('map-block', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-map-marker gjs-block-map"></i><br/>
                <span style="font-size:13px;">Map</span>
                </div>
            `,
            content: {
                type: 'map',
            },
        });

        editor.BlockManager.add('form', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-wpforms gjs-block-map" ></i><br/>
                <span style="font-size:13px;">Form</span>
                </div>
            `,
            content: {
                tagName: 'form',
                attributes: {
                action: '#',
                method: 'post',
                },
                components: [
                {
                    tagName: 'div',
                    attributes: { class: 'form-group' },
                    components: [
                    { tagName: 'label', content: 'Name:', attributes: { for: 'name' } },
                    {
                        tagName: 'input',
                        attributes: {
                        type: 'text',
                        name: 'name',
                        placeholder: 'Enter your name',
                        required: true,
                        }
                    }
                    ]
                },
                {
                    tagName: 'div',
                    attributes: { class: 'form-group' },
                    components: [
                    { tagName: 'label', content: 'Email:', attributes: { for: 'email' } },
                    {
                        tagName: 'input',
                        attributes: {
                        type: 'email',
                        name: 'email',
                        placeholder: 'Enter your email',
                        required: true,
                        }
                    }
                    ]
                },
                {
                    tagName: 'div',
                    attributes: { class: 'form-group' },
                    components: [
                    { tagName: 'label', content: 'Message:', attributes: { for: 'message' } },
                    {
                        tagName: 'textarea',
                        attributes: {
                        name: 'message',
                        placeholder: 'Enter your message',
                        required: true,
                        rows: 4,
                        }
                    }
                    ]
                },
                {
                    tagName: 'button',
                    content: 'Submit',
                    attributes: {
                    type: 'submit',
                    class: 'btn-submit'
                    }
                }
                ]
            }
        });

        editor.BlockManager.add('input-box', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-font gjs-block-map"></i><br/>
                <span style="font-size:13px;">Input Box</span>
                </div>
            `,
            content: {
                tagName: 'input',
                attributes: {
                type: 'text',
                name: 'input_name',
                placeholder: 'Enter value',
                required: true,
                class: 'input-box'
                },
                traits: [
                'name',
                'placeholder',
                {
                    type: 'checkbox',
                    label: 'Required',
                    name: 'required',
                },
                ]
            }
        });

        editor.BlockManager.add('form-checkbox', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-check-square gjs-block-map"></i><br/>
                <span style="font-size:13px;">Checkbox</span>
                </div>
            `,
            content: {
                tagName: 'input',
                attributes: {
                type: 'checkbox',
                name: 'checkbox_name',
                value: '1',
                },
                traits: [
                'name',
                'value',
                {
                    type: 'checkbox',
                    label: 'Checked',
                    name: 'checked',
                },
                ],
            },
        });

        editor.BlockManager.add('form-radio', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-dot-circle-o gjs-block-map" ></i><br/>
                <span style="font-size:13px;">Radio</span>
                </div>
            `,
            content: {
                tagName: 'input',
                attributes: {
                type: 'radio',
                name: 'radio_group',
                value: 'option1',
                },
                traits: [
                'name',
                'value',
                {
                    type: 'checkbox',
                    label: 'Checked',
                    name: 'checked',
                },
                ],
            },
        });

        editor.BlockManager.add('form-select', {
            label: `
                <div style="text-align:center;">
                <i class="fa fa-sort-desc gjs-block-map"></i><br/>
                <span style="font-size:13px;">Select</span>
                </div>
            `,
            content: {
                tagName: 'select',
                components: [
                { tagName: 'option', content: 'Option 1', attributes: { value: 'option1' } },
                { tagName: 'option', content: 'Option 2', attributes: { value: 'option2' } },
                ],
                traits: [
                'name',
                ],
            },
        });
        
        editor.BlockManager.add('form-button', {
            label: `
                <div style="text-align:center;">
                    <i class="fa fa-square gjs-block-map" ></i><br/>
                    <span style="font-size:13px;">Button</span>
                </div>
            `,
            content: {
                tagName: 'button',
                // Default content: icon + text
                content: '<i class="fa fa-check"></i> Click Me',
                attributes: {
                    type: 'submit',
                    class: 'btn',
                },
                traits: [
                    {
                        type: 'text',
                        label: 'Text',
                        name: 'btn-text',
                        changeProp: true,
                    },
                    {
                        type: 'select',
                        name: 'type',
                        label: 'Type',
                        options: [
                            { id: 'button', name: 'Button' },
                            { id: 'submit', name: 'Submit' },
                            { id: 'reset', name: 'Reset' }
                        ]
                    },
                    {
                        type: 'text',
                        label: 'Icon (FontAwesome class)',
                        name: 'icon-class',
                        changeProp: true,
                    }
                ]
            }
        });
     
        // Auto-open properties when block dropped
        editor.on('block:drag:stop', (component) => {
            if (component) {
            const target = component.is('wrapper') ? component.components().last() : component;
            editor.select(target);
            editor.runCommand('open-traits');
            }
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
                    <div id="blocks" className='blocks-panel'></div> 
               </div>
            </div>
        </div>
    );
}