import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'progress-ring',
    styleUrl: 'progress-ring.scss',
    shadow: true
})
export class ProgressRing {

    @Element() el!: Element;
    /**
     * The stroke width of the progress ring.
     */
    @Prop() stroke = 2.5;
    /**
     * The progress percentage to whole for the progress ring.
     */
    @Prop({ mutable: true }) progress = 0;
    /**
     * The radius of the ring in pixels.
     */
    @Prop() radius = 20;
    /**
     * The foreground color of the ring as it fills.
     */
    // @Prop() color: Color = 'white';

    // @Prop() backgroundColor: Color = 'white';

    @Prop({ mutable: true }) circleClass: string;

    @Watch('progress')
    progressChange(percent: number) {
        if (percent < 100) {
            this.circleClass = 'active';
        } else {
            setTimeout(() => {
                this.circleClass = 'complete';
            }, 350);
        }
    }

    get normalizedRadius() {
        return this.radius - this.stroke * 2;
    }

    get circumference() {
        return this.normalizedRadius * 2 * Math.PI;
    }

    get strokeDashoffset() {
        return (this.circumference - this.progress / 100 * this.circumference).toString();
    }

    render() {
        const { stroke, radius, normalizedRadius, circumference, strokeDashoffset, circleClass } = this;
        return (
            <svg
                height={radius * 2}
                width={radius * 2}
                class='top'
            >
                <circle class='path'
                    stroke='#3F3F40'
                    stroke-dasharray={circumference + ' ' + circumference}
                    stroke-linecap='round'
                    style={{
                        strokeDashoffset: '0'
                    }}
                    stroke-width={stroke}
                    fill='transparent'
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle class={circleClass}
                    stroke='#FE5A5D'
                    stroke-dasharray={circumference + ' ' + circumference}
                    style={{
                        strokeDashoffset
                    }}
                    stroke-width={stroke}
                    fill='transparent'
                    stroke-linecap='round'
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
        );
    }

}
