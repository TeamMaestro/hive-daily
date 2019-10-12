import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Components|Card Stack', module)
    .addDecorator(withKnobs)
    // .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <div style="width:100vw; height: 100vh; background: linear-gradient(to right, #ff5f6d, #ffc371);">
            <card-stack style="padding-top: 100px;">
                <p>Slotted Content</p>
            </card-stack>
        </div>
    `);
