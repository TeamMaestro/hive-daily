import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Product Design|Air Bnb/Homepage', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <airbnb-homepage></airbnb-homepage>
    `);
