import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Components|Progress Ring', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <div class="docs-example">
            <progress-ring stroke="4" radius="60" progress="25"></progress-ring>
            <progress-ring stroke="4" radius="60" progress="50"></progress-ring>
            <progress-ring stroke="4" radius="60" progress="75"></progress-ring>
            <progress-ring stroke="4" radius="60" progress="100"></progress-ring>
        </div>
    `);

