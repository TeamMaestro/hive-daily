import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

// @ts-ignore
import readme from './readme.md';

storiesOf('Components|Categories List', module)
    .addDecorator(withKnobs)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => `
        <div class="docs-example">
            <categories-list>
                <categories-list-item
                    src="https://autotraderau-res.cloudinary.com/t_cg_car_l/inventory/2019-10-01/03093818889651/10243332/2019_audi_r8_New.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    Audi
                </categories-list-item>
                <categories-list-item
                    src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/155863938921412877_2000x.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    McLaren
                </categories-list-item>
                <categories-list-item
                    src="https://cdn.motor1.com/images/mgl/MoVM6/s1/lamborghini-sc18-alston.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    Lamborghini
                </categories-list-item>
                <categories-list-item
                    src="https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1400/MTYyNzc0MTcwNDQ1MjkzMTQ0/bugatti-divo-promo.webp"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    Bugatti
                </categories-list-item>
                <categories-list-item
                    src="https://www.bmwusa.com/content/dam/bmwusa/BMWi/i8/2019/BMW-MY19-ISeries-i8-DP-Highlight-01.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    BMW
                </categories-list-item>
                <categories-list-item
                    src="https://cdn.gearpatrol.com/wp-content/uploads/2019/01/Mustang-GT500-Gear-Patrol-slide-2.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    Mustang
                </categories-list-item>
                <categories-list-item
                    src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/jag_f-type_render_2018.jpg"
                    icon="https://www.svgrepo.com/show/9562/sportive-car-front.svg">
                    Jaguar
                </categories-list-item>
            </categories-list>
        </div>
    `);
