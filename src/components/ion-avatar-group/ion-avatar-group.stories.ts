import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Components|Ion Avatar Group', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <div class="docs-example">
            <ion-avatar-group>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
                </ion-avatar>
            </ion-avatar-group>
        </div>
    `)
    .add('Not Animated', () => `
        <div class="docs-example">
            <ion-avatar-group animated="false">
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                </ion-avatar>
                <ion-avatar>
                    <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                </ion-avatar>
            </ion-avatar-group>
        </div>
    `);

/*
<ion-avatar src="https://thispersondoesnotexist.com/image">Sean Perkins</ion-avatar>
        <ion-avatar src="https://thispersondoesnotexist.com/image">Sean Perkins</ion-avatar>
        <ion-avatar src="https://thispersondoesnotexist.com/image">Sean Perkins</ion-avatar>
        <ion-avatar src="https://thispersondoesnotexist.com/image">Sean Perkins</ion-avatar>*/
