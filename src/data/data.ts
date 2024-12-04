
import claroImg from '../assets/img/claro.png';
import luminaImg from '../assets/img/Lumina.png';
import tigerLillyImg from '../assets/img/tiger-lily.png';
import kiMaoImg from '../assets/img/kiMao.png';
import garbanzoImg from '../assets/img/garbanzo.png';
import smokedPizzaImg from '../assets/img/smokedPizza.png';
import spicyImg from '../assets/img/spicy.svg';
import vegetarianImg from '../assets/img/vegeterian.svg';
import veganImg from '../assets/img/vegan.svg';
import yossiImg from '../assets/img/yossi.png';
import onzaImg from '../assets/img/onza.png';
import kitchenMarketImg from '../assets/img/kithcenMarket.png';
import mashyaImg from '../assets/img/mashya.png';


export const iconImgs: { [key: string]: string } =
{
    spicy: spicyImg,
    vegan: veganImg,
    vegeterian: vegetarianImg
}

export const chefOfTheWeekImg: { [key: string]: string } =
{
    'Yossi Shitrit': 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634699/yossi_zhskzv.png',
    //add more when needed
}

export const resImgs: { [key: string]: string } =
{
    "Claro": 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634693/claro_j8k9kr.png',
    "Tiger Lilly": 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634698/tiger-lily_nreiix.png',
    "Lumina": luminaImg
}

export const dishImgs: { [key: string]: string } =
{
     kiMaoImg:'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634693/kiMao_iopvmq.png',
     garbanzoImg:'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634695/garbanzo_h2275v.png',
     smokedPizzaImg:'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634698/smokedPizza_qce7ts.png'
}


export const data = {
    header: {
        hamburger: {
            src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634695/hamburger_qeec6d.svg',
            closeSrc: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634694/closeburger_hvdzqc.svg',
            links: {
                routes: ['Restaurants', 'Chefs',],
                info: ['Contact Us', 'Term of Use', 'Privacy Policy']
            }
        },
        logo: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634693/about-logo-1_heaxgi.svg' },
        MainTitle: 'EPICURE',
        navBar: {
            images: {
                search: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634697/search_lcsjdc.svg' },
                person: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/person_xxvlds.svg' },
                shoppingBag: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634698/shoppingBag_wcodd4.svg' }
            }
        },
    },
    hero: {
        image: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/hero-picture_dv0cmr.png' },
        inputSection: {
            title: 'Epicure works with the top chef restaurant in Tel Aviv',
            inputImg: { src: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634697/search_lcsjdc.svg' },
            inputPlaceHolder: {
                title: 'Search for restaurant cuisine, chef'
            }
        }
    },
    popularRestaurants: {
        mainTitle: 'POPULAR RESTAURANT IN EPICURE',
        cards: [
            {
                title: 'Claro', img: claroImg, type: 'popularRestaurants',
                content: { type: 'popularRes', chef: 'Ran Shmueli', rating: 4 }
            },
            {
                title: 'Lumina', img: luminaImg, type: 'popularRestaurants', content: { type: 'popularRes', chef: 'Meir Adoni', rating: 3 }
            },
            {
                title: 'Tiger Lilly', img: tigerLillyImg, type: 'popularRestaurants', content: { type: 'popularRes', chef: 'Yanir Green', rating: 4 }
            }
        ],
        link: {
            title: 'All Restaurants'
        }
    },
    signatureDishes: {
        MainTitle: 'SIGNATURE DISH OF',
        nisImg: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/NIS_tnve8z.svg',
        cards: [
            {
                title: 'Pad Ki Mao',
                img: kiMaoImg,
                type: 'signatureDishes',
                content: {
                    type: 'signatureDish',
                    icons: [
                        {
                            type: 'spicy',
                            img: spicyImg
                        }
                    ],
                    ingredients: ['shrimps', 'glass noodles', 'kemiri nuts', 'shallots', 'lemon grass', 'magic chilli brown coconut'],
                    price: 88

                }
            },
            {
                title: 'Garbanzo Frito', img: garbanzoImg, type: 'signatureDishes', content: {
                    type: 'signatureDish',
                    icons: [
                        {

                            type: 'vegeterian',
                            img: vegetarianImg

                        }],
                    ingredients: ['polenta fingers', 'veal cheek', 'magic chilli', 'cured lemon cream', 'yellow laska'],
                    price: 98

                }
            },
            {
                title: 'Smoked Pizza', img: smokedPizzaImg, type: 'signatureDishes', content: {
                    type: 'signatureDish',
                    icons: [{
                        type: 'vegan',
                        img: veganImg
                    }],
                    ingredients: ['basil dough', 'chashew "butter"', 'demi-glace', 'bison & radish'],
                    price: 65
                }
            }
        ],
        link: {
            title: 'All Restaurants'
        }
    },
    iconSection: {
        mainTitle: 'the meaning of our icons',
        icons: [
            { type: 'spicy', img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634698/spicy_kborzh.svg' },
            { type: 'vegeterian', img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634699/vegeterian_sg0qld.svg' },
            { type: 'vegan', img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634699/vegan_qkyd45.svg' },
        ]
    },
    chefOfTheWeek: {
        chef: {
            img: yossiImg,
            name: 'Yossi Shitrit'
        },
        info: {
            text: 'Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit\'s creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.'
        },
        chefOfTheWeekRestaurants: {
            title: 'restaurants',
            type: 'chefOfTheWeek',
            cards: [
                { title: 'onza', img: onzaImg, type: 'chefOfTheWeek', content: {} },
                { title: 'kitchen market', type: 'chefOfTheWeek', img: kitchenMarketImg, content: {} },
                { title: 'mashya', img: mashyaImg, type: 'chefOfTheWeek', content: {} },
            ],
            link: {
                title: 'All Restaurants'
            }
        }
    },
    aboutUs: {
        logo: { img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634693/about-logo-2_wvjekn.svg' },
        stores: [
            { store: 'google', img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634695/googlePlay_opbb6y.svg' },
            { store: 'apple', img: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634693/appStore_cdf9kh.svg' }
        ],
        title: 'about us',
        content: {
            paragraps: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.' },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.' }
            ]
        }
    },
    footer: {
        content: {
            links: [
                { title: 'contact us' },
                { title: 'term of use' },
                { title: 'privacy policy' },
            ]
        }
    },
    allResLink: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634694/arrows_bvmakh.svg',
    rating:{
        1: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/rating1_u9d17y.svg',
        2: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/rating2_fps36e.svg',
        3: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634696/rating3_uflfae.svg',
        4: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634697/rating4_vwsnbc.svg',
        5: 'https://res.cloudinary.com/dxibifkj2/image/upload/v1723634697/rating5_swzfgy.svg'
    }
}