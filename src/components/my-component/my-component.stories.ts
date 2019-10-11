import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

// When using knobs with stencil components, you must manually bind them.
storiesOf('Design System|My Component', module)
    .addDecorator(withKnobs)
    // .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => '<my-component first="Sean"></my-component>');
