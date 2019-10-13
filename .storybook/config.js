import {
    configure,
    addParameters
} from '@storybook/html';
import '@storybook/addon-console';
import {
    setConsoleOptions
} from '@storybook/addon-console';

import { create } from '@storybook/theming';

import brandImage from './logo.svg';

setConsoleOptions({
    panelExclude: [],
});


addParameters({
    options: {
        theme: create({
            base: 'light',
            brandImage
        })
    }
});

function loadStories() {
    const paths = [
        require.context('../src', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/)
    ];
    paths.forEach(req => {
        req.keys().forEach(filename => req(filename));
    });

    require('../loader/index.cjs.js').defineCustomElements(window);
    require('@ionic/core/loader/index.cjs.js').defineCustomElements(window);
}

configure(loadStories, module);
