export function registerCountdown(editor: any, countdownTraits1: any[]) {
  const defaultType = editor.DomComponents.getType('default');
  const defaultModel = defaultType.model;
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

  editor.DomComponents.addType('countdown', {
    model: defaultModel.extend(
      {
        init() {
          console.log("d");
          this.on(
            'change:target change:format change:expiredText change:autostart change:showLabels',
            () => {
              const el: any = this.getEl();
              if (el && el.startCountdown) {
                el.startCountdown({
                  target: this.get('target'),
                  format: this.get('format'),
                  expiredText: this.get('expiredText'),
                  showLabels: this.get('showLabels'),
                });
              }
            }
          );
        },
      },
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          traits: [
            ...(defaultModel.prototype.defaults.traits || []),
            ...countdownTraits,
          ],
          type: 'countdown',
          tagName: 'div',
          classes: ['countdown'],
          target: new Date(Date.now() + 60000) // default 1 min
            .toISOString()
            .slice(0, 19)
            .replace('T', ' '),
          format: 'dd:hh:mm:ss',
          expiredText: 'Time’s up!',
          autostart: true,
          showLabels: true,
          script: function (this: HTMLElement) {
            const root: any = this;

            function parseTarget(str: string) {
              if (!str) return null;
              const iso = str.replace(' ', 'T');
              const d = new Date(iso);
              return isNaN(d.getTime()) ? null : d;
            }

            function startCountdown(el: any, opts: any) {
              if (el.__countdownInterval) clearInterval(el.__countdownInterval);

              const dEl = el.querySelector('[data-js=day]');
              const hEl = el.querySelector('[data-js=hour]');
              const mEl = el.querySelector('[data-js=minute]');
              const sEl = el.querySelector('[data-js=second]');
              const targetDate = parseTarget(opts.target);

              function update() {
                const now = new Date();
                const diff = targetDate!.getTime() - now.getTime();

                if (diff <= 0) {
                  clearInterval(el.__countdownInterval);
                  el.__countdownInterval = null;
                  el.innerHTML = opts.expiredText || 'Finished';
                  return;
                }

                const sec = Math.floor(diff / 1000);
                const days = Math.floor(sec / (3600 * 24));
                const hours = Math.floor((sec % (3600 * 24)) / 3600);
                const minutes = Math.floor((sec % 3600) / 60);
                const seconds = sec % 60;

                if (opts.format === 'hh:mm:ss') {
                  if (hEl) hEl.textContent = String(days * 24 + hours).padStart(2, '0');
                  if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
                  if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
                  if (dEl) dEl.style.display = 'none';
                } else if (opts.format === 'mm:ss') {
                  if (mEl) mEl.textContent = String(days * 24 * 60 + hours * 60 + minutes).padStart(2, '0');
                  if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
                  if (dEl) dEl.style.display = 'none';
                  if (hEl) hEl.style.display = 'none';
                } else {
                  if (dEl) dEl.textContent = String(days).padStart(2, '0');
                  if (hEl) hEl.textContent = String(hours).padStart(2, '0');
                  if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
                  if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
                }

                if (opts.showLabels) {
                  if (dEl) dEl.nextSibling.textContent = 'd :';
                  if (hEl) hEl.nextSibling.textContent = 'h :';
                  if (mEl) mEl.nextSibling.textContent = 'm :';
                  if (sEl) sEl.nextSibling.textContent = 's';
                } else {
                  if (dEl) dEl.nextSibling.textContent = '';
                  if (hEl) hEl.nextSibling.textContent = '';
                  if (mEl) mEl.nextSibling.textContent = '';
                  if (sEl) sEl.nextSibling.textContent = '';
                }
              }

              update();
              el.__countdownInterval = setInterval(update, 1000);
            }

            if (root.autostart) {
              startCountdown(root, {
                target: root.getAttribute('target') || root.target,
                format: root.getAttribute('format') || root.format,
                expiredText: root.getAttribute('expiredText') || root.expiredText,
                showLabels: root.getAttribute('showLabels') !== 'false' && root.showLabels,
              });
            }

            root.startCountdown = (opts: any) =>
              startCountdown(root, {
                target: opts.target || root.target,
                format: opts.format || root.format,
                expiredText: opts.expiredText || root.expiredText,
                showLabels: opts.showLabels ?? root.showLabels,
              });
          },
        },
        isComponent(el: HTMLElement) {
          if (el.classList?.contains('countdown')) return { type: 'countdown' };
          return undefined;
        },
      }
    ),
  });
}
