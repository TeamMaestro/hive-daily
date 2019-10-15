import { Component, h } from "@stencil/core";

@Component({
    tag: 'categories-list',
    styleUrl: 'categories-list.scss',
    shadow: true
})
export class CategoriesList {

    render() {
        return (
            <slot></slot>
        )
    }
}
