import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'ion-avatar-group',
    styleUrl: 'ion-avatar-group.scss',
    shadow: true
})
export class AvatarGroup {
    /**
     * `true` if the avatar elements will animate apart.
     */
    @Prop({ reflect: true }) animated = true;

    render() {
        return (
            <slot></slot>
        );
    }

}
