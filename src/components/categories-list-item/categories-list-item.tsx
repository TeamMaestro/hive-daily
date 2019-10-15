import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'categories-list-item',
    styleUrl: 'categories-list-item.scss',
    shadow: true
})
export class CategoriesListItem {
    /**
     * The source to render as the background image.
     */
    @Prop() src: string;

    @Prop() icon: string;

    render() {
        const style = {
            '--background-image': `url(${decodeURIComponent(this.src)})`
        };
        return (
            <Host style={style}>
                <div class='categories-details'>
                    <div
                        class='info'>
                        <slot></slot>
                    </div>
                    <div class='icon'>
                        <img src={this.icon} />
                    </div>
                </div>
            </Host>
        );
    }
}
