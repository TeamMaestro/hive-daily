import { Component, h, Prop, Host, State } from '@stencil/core';

@Component({
    tag: 'card-stack',
    styleUrl: 'card-stack.scss',
    shadow: true
})
export class CardStack {
    /**
     * The collection of cards to render
     */
    @Prop() cards: any[] = [{}, {}, {}, {}];

    @State() currentIndex = 0;

    private renderCards() {
        const cards = [];

        const stack = this.cards.slice(this.currentIndex, this.currentIndex + 3);

        stack.forEach((_, index) => {
            cards.push(
                <div class={{
                    card: true,
                    active: index === 0
                }}>
                    <div class='content'>
                        <slot></slot>
                        {
                            // TODO you can put any card content you desire here.
                        }
                    </div>
                </div>
            );
        });
        return cards;
    }

    render() {
        return (
            <Host>
                {this.renderCards()}
            </Host>
        );
    }

}
