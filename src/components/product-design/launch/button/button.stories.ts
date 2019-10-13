import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Product Design|Launch/Buttons', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <div class="docs-example">
            <launch-ui-button color="primary">Primary</launch-ui-button>
            <launch-ui-button color="secondary">Secondary</launch-ui-button>
            <launch-ui-button color="success">Success</launch-ui-button>
            <launch-ui-button color="danger">Danger</launch-ui-button>
            <launch-ui-button color="warning">Warning</launch-ui-button>
            <launch-ui-button color="info">Info</launch-ui-button>
            <launch-ui-button color="dark">Dark</launch-ui-button>
            <launch-ui-button link>Link</launch-ui-button>
        </div>
    `)
    .add('Default/Disabled', () => `
        <div class="docs-example">
            <launch-ui-button disabled color="primary">Primary</launch-ui-button>
            <launch-ui-button disabled color="secondary">Secondary</launch-ui-button>
            <launch-ui-button disabled color="success">Success</launch-ui-button>
            <launch-ui-button disabled color="danger">Danger</launch-ui-button>
            <launch-ui-button disabled color="warning">Warning</launch-ui-button>
            <launch-ui-button disabled color="info">Info</launch-ui-button>
            <launch-ui-button disabled color="dark">Dark</launch-ui-button>
            <launch-ui-button disabled link>Link</launch-ui-button>
        </div>
    `)
    .add('Default/Busy', () => `
        <div class="docs-example">
            <launch-ui-button busy="true" color="primary">Primary</launch-ui-button>
            <launch-ui-button busy="true" color="secondary">Secondary</launch-ui-button>
            <launch-ui-button busy="true" color="success">Success</launch-ui-button>
            <launch-ui-button busy="true" color="danger">Danger</launch-ui-button>
            <launch-ui-button busy="true" color="warning">Warning</launch-ui-button>
            <launch-ui-button busy="true" color="info">Info</launch-ui-button>
            <launch-ui-button busy="true" color="dark">Dark</launch-ui-button>
            <launch-ui-button busy="true" link>Link</launch-ui-button>
        </div>
    `)
    .add('Soft', () => `
        <div class="docs-example">
            <launch-ui-button soft color="primary">Primary</launch-ui-button>
            <launch-ui-button soft color="secondary">Secondary</launch-ui-button>
            <launch-ui-button soft color="success">Success</launch-ui-button>
            <launch-ui-button soft color="danger">Danger</launch-ui-button>
            <launch-ui-button soft color="warning">Warning</launch-ui-button>
            <launch-ui-button soft color="info">Info</launch-ui-button>
            <launch-ui-button soft color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Soft/Busy', () => `
        <div class="docs-example">
            <launch-ui-button soft busy="true" color="primary">Primary</launch-ui-button>
            <launch-ui-button soft busy="true" color="secondary">Secondary</launch-ui-button>
            <launch-ui-button soft busy="true" color="success">Success</launch-ui-button>
            <launch-ui-button soft busy="true" color="danger">Danger</launch-ui-button>
            <launch-ui-button soft busy="true" color="warning">Warning</launch-ui-button>
            <launch-ui-button soft busy="true" color="info">Info</launch-ui-button>
            <launch-ui-button soft busy="true" color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Soft/Disabled', () => `
        <div class="docs-example">
            <launch-ui-button soft disabled color="primary">Primary</launch-ui-button>
            <launch-ui-button soft disabled color="secondary">Secondary</launch-ui-button>
            <launch-ui-button soft disabled color="success">Success</launch-ui-button>
            <launch-ui-button soft disabled color="danger">Danger</launch-ui-button>
            <launch-ui-button soft disabled color="warning">Warning</launch-ui-button>
            <launch-ui-button soft disabled color="info">Info</launch-ui-button>
            <launch-ui-button soft disabled color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Outline', () => `
        <div class="docs-example">
            <launch-ui-button fill="outline" color="primary">Primary</launch-ui-button>
            <launch-ui-button fill="outline" color="secondary">Secondary</launch-ui-button>
            <launch-ui-button fill="outline" color="success">Success</launch-ui-button>
            <launch-ui-button fill="outline" color="danger">Danger</launch-ui-button>
            <launch-ui-button fill="outline" color="warning">Warning</launch-ui-button>
            <launch-ui-button fill="outline" color="info">Info</launch-ui-button>
            <launch-ui-button fill="outline" color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Outline/Disabled', () => `
        <div class="docs-example">
            <launch-ui-button fill="outline" disabled color="primary">Primary</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="secondary">Secondary</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="success">Success</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="danger">Danger</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="warning">Warning</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="info">Info</launch-ui-button>
            <launch-ui-button fill="outline" disabled color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Outline/Busy', () => `
        <div class="docs-example">
            <launch-ui-button busy="true" fill="outline" color="primary">Primary</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="secondary">Secondary</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="success">Success</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="danger">Danger</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="warning">Warning</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="info">Info</launch-ui-button>
            <launch-ui-button busy="true" fill="outline" color="dark">Dark</launch-ui-button>
        </div>
    `)
    .add('Shapes', () => `
        <div class="docs-example">
            <launch-ui-button shape="rounded">Rounded</launch-ui-button>
            <launch-ui-button shape="square">Square</launch-ui-button>
            <launch-ui-button shape="pill">Pill</launch-ui-button>
        </div>
    `)
    .add('Sizing', () => `
        <div class="docs-example">
            <launch-ui-button sm>Small</launch-ui-button>
            <launch-ui-button>Default</launch-ui-button>
            <launch-ui-button lg>Large</launch-ui-button>
            <launch-ui-button xl>Extra large</launch-ui-button>
        </div>
    `);
