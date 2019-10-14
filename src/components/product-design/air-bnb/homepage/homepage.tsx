import { Component, h, Host, State } from '@stencil/core';

// @ts-ignore
import logo from '../logo.svg';

@Component({
    tag: 'airbnb-homepage',
    styleUrl: 'homepage.scss',
    shadow: true
})
export class Homepage {

    slideOpts = {
        slidesPerView: 'auto',
        spaceBetween: 20
    }

    @State() searchPlaceholderVisible = true;

    onSearchFocus = () => {
        this.searchPlaceholderVisible = false;
    }

    onSearchBlur = (ev) => {
       const value = ev.target.value;
       if (value.length < 1) {
           this.searchPlaceholderVisible = true;
       }
    }

    renderStars(count = 5) {
        const stars = [];
        for(let i = 0; i < count; i++) {
            stars.push(
                <ion-icon class='primary' name="star"></ion-icon>
            );
        }
        return stars;
    }

    render() {
        return (
            <Host>
                <div class='content'>
                    <div class='nav'>
                        <img class='logo' src={logo} />
                        <div>
                            <ul class='nav-items'>
                                <li>
                                    <a href='#'>host a home</a>
                                </li>
                                <li>
                                    <a href='#'>host an experience</a>
                                </li>
                                <li>
                                    <a href='#'>help</a>
                                </li>
                            </ul>
                            <button class='btn'>
                                sign up
                                <ion-icon name='arrow-down' mode='ios'></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div class='main-content'>
                        <h1 class='title'>
                            <span class='primary'>Book</span> unique homes<br />and experiences.
                        </h1>
                        <div class='search-cta'>
                            <span class={{
                                placeholder: true,
                                active: this.searchPlaceholderVisible
                            }}>
                                <span>WHERE?</span>
                                <span class='primary'>ANYWHERE...</span>
                            </span>
                            <input
                                onBlur={this.onSearchBlur}
                                onFocus={this.onSearchFocus}
                                type='search' />
                            <button class='btn search-btn'>
                                <ion-icon name='search'></ion-icon>
                            </button>
                        </div>

                    </div>
                    <div class='bottom-content'>
                        <div class='slides'>
                            <ion-slides options={this.slideOpts}>
                                <ion-slide>
                                    <div class='location-card'>
                                        <h5 class='location-title'>Los Angeles <span class='small'>(USA)</span></h5>
                                        <div class='stats'>
                                            <div class='rating'>
                                                {this.renderStars(5)}
                                            </div>
                                            <div class='cost primary'>
                                                500$/n
                                            </div>
                                        </div>
                                    </div>
                                </ion-slide>
                                <ion-slide>
                                    <div class='location-card'>
                                        <h5 class='location-title'>Barcelona <span class='small'>(Spain)</span></h5>
                                        <div class='stats'>
                                            <div class='rating'>
                                                {this.renderStars(5)}
                                            </div>
                                            <div class='cost primary'>
                                                500$/n
                                            </div>
                                        </div>
                                    </div>
                                </ion-slide>
                                <ion-slide>
                                    <div class='location-card'>
                                        <h5 class='location-title'>Warsaw <span class='small'>(Poland)</span></h5>
                                        <div class='stats'>
                                            <div class='rating'>
                                                {this.renderStars(4)}
                                            </div>
                                            <div class='cost primary'>
                                                500$/n
                                            </div>
                                        </div>
                                    </div>
                                </ion-slide>
                                <ion-slide>
                                    <div class='location-card'>
                                        <h5 class='location-title'>Split <span class='small'>(Croatia)</span></h5>
                                        <div class='stats'>
                                            <div class='rating'>
                                                {this.renderStars(5)}
                                            </div>
                                            <div class='cost primary'>
                                                500$/n
                                            </div>
                                        </div>
                                    </div>
                                </ion-slide>
                            </ion-slides>
                        </div>
                    </div>
                    <div class='side-cta'>
                        <a href='#'>Ready to start your adventure?</a>
                    </div>
                </div>
                <div class='bg-img'></div>
            </Host>
        );
    }

}
