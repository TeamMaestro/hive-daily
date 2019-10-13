import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { BrowserEvent } from '../../../../utils/browser';
import { Color } from '../color';

@Component({
    tag: 'launch-ui-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class Button {

    @Element() element: Element;
    /**
     * The type of button to render
     */
    @Prop({ reflect: true }) type: 'submit' | 'button' | 'reset' = 'button';
    /**
     * If the button is disabled and cannot be interacted with.
     */
    @Prop({ mutable: true }) disabled = false;
    /**
     * If the button is in a busy active state.
     */
    @Prop({ mutable: true }) busy = false;
    /**
     * The color display of the button.
     */
    @Prop() color: Color = 'primary';
    /**
     * Softened color palette of the button.
     */
    @Prop() soft: boolean;
    /**
     * The rendered shape of the button. `rounded` has a small border radius, `square`
     * has no border radius and `pill` has the maximum border radius.
     */
    @Prop({ reflect: true }) shape: 'rounded' | 'square' | 'pill' | 'circle' = 'rounded';
    /**
     * The filled color style for the button. `solid` renders the button with a solid background.
     * `outline` renders the button only as a border. `clear` is a transparent button.
     */
    @Prop() fill: 'outline' | 'solid' | 'clear' = 'solid';
    /**
     * Displays the button at full-width.
     */
    @Prop({ reflect: true }) block: boolean;
    /**
     * Renders the button as a text link.
     */
    @Prop() link: boolean;
    /**
     * Renders the button small.
     */
    @Prop({ reflect: true }) sm: boolean;
    /**
     * Renders the button large.
     */
    @Prop({ reflect: true }) lg: boolean;
    /**
     * Renders the button extra large.
     */
    @Prop({ reflect: true }) xl: boolean;
    /**
     * Renders the button with a bold font weight.
     */
    @Prop({ reflect: true }) bold: boolean;

    @Prop({ reflect: true }) alignCenter: boolean;
    @Prop({ reflect: true }) alignLeft: boolean;
    @Prop({ reflect: true }) alignRight: boolean;

    /**
     * Event emitted each time the button is clicked
     */
    @Event() tap: EventEmitter;

    render() {
        const style = {};
        if (this.color) {
            if (this.soft) {
                style['--color'] = `var(--launch-color-${this.color})`;
                style['--color-hover'] = `var(--launch-color-white)`;
                style['--background-color'] = `var(--launch-color-${this.color}-offset)`;
                style['--background-color-hover'] = `var(--launch-color-${this.color})`;
            } else {
                if (this.link) {
                    style['--color'] = `var(--launch-color-${this.color})`;
                    style['--color-hover'] = `var(--launch-color-${this.color}-shade)`;
                    style['--background-color'] = 'transparent';
                    style['--background-color-hover'] = 'transparent';
                } else if (this.fill === 'solid') {
                    style['--background-color'] = `var(--launch-color-${this.color})`;
                    style['--background-color-hover'] = `var(--launch-color-${this.color}-shade)`;
                    if (this.color === 'secondary') {
                        style['--color'] = 'var(--color-black)';
                    }
                    if (this.color === 'white') {
                        style['--color'] = 'var(--color-dark-gray)';
                    }
                } else if (this.fill === 'outline') {
                    style['--color'] = `var(--launch-color-${this.color})`;
                    style['--color-hover'] = `var(--launch-color-${this.color}-contrast)`;
                    style['--border-color'] = `var(--launch-color-${this.color})`;
                    style['--background-color'] = `transparent`;
                    style['--background-color-hover'] = `var(--launch-color-${this.color})`;
                }
            }
        }
        return (
            <Host style={style}>
                <button
                    onClick={ev => {
                        if (!this.disabled) {
                            this.tap.emit(ev);
                        }
                        if (this.type === 'submit') {
                            const form = this.element.closest('form');
                            if (form) {
                                form.dispatchEvent(new BrowserEvent('submit'));
                            }
                        }
                    }}
                    disabled={this.disabled || this.busy}
                    type={this.type}>
                    <ion-spinner class={{
                        busy: this.busy
                    }}
                        name='crescent' color='dark'></ion-spinner>
                    <slot></slot>
                </button>
            </Host>
        );
    }

}
