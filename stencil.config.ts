import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'hive',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        },
        {
            type: 'www',
            serviceWorker: null // disable service workers
        }
    ],
    plugins: [
        sass()
    ],
    globalStyle: 'src/global/style.scss',
    excludeSrc: [
        '**/*.stories.ts'
    ]
};
