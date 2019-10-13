class Theme {
    constructor(props) {
        this.props = props;
        this.methods = {
            logout: () => this.props.methods.logout(),
            timer: (int) => {
                this.props.methods.timer(int)
            },
        }

        this.builder = new Builder();

        this.options = {
            html: function () {
                return (
                    `
                    <div class="_3j8Pd">
                        <div role="button" optionCaller title="Options">
                            <span data-icon="status-v3-unread" class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256.02 362.67"
                                style="
                                width: auto;
                                height: 24px;
                                "
                            >
                                <title>mask</title>
                                <defs xmlns="http://www.w3.org/2000/svg">
                                <style>
                                    .cls-1 {
                                    fill: #009588;
                                    }
                                    .cls-2 {
                                    fill: #80868a;
                                    }
                                </style>
                                </defs>
                                <g
                                xmlns="http://www.w3.org/2000/svg"
                                id="Camada_2"
                                data-name="Camada 2"
                                >
                                <g id="Capa_1" data-name="Capa 1">
                                    <path
                                    class="cls-1"
                                    d="M96,170.67H74.68a10.67,10.67,0,0,0,0,21.33H96a10.67,10.67,0,0,0,0-21.33Z"
                                    />
                                    <path
                                    class="cls-1"
                                    d="M181.34,170.67H160A10.67,10.67,0,0,0,160,192h21.33a10.67,10.67,0,0,0,0-21.33Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M241.65,211.56a10.64,10.64,0,0,0-12.93,7.79C213.79,279.55,173.32,320,128,320S42.23,279.55,27.29,219.35a10.67,10.67,0,1,0-20.71,5.14C23.92,294.38,72.71,341.33,128,341.33s104.08-47,121.43-116.84A10.68,10.68,0,0,0,241.65,211.56Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M128,0C57.5,0,2.27,56.24,2.27,128a10.67,10.67,0,0,0,21.33,0C23.6,68.18,69.45,21.33,128,21.33S232.41,68.18,232.41,128a10.67,10.67,0,0,0,21.33,0C253.75,56.23,198.52,0,128,0Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M208.58,225.77a10.65,10.65,0,0,0-14.78,3l-15,22.51a10.64,10.64,0,0,1-8.87,4.76H166c-4.91,0-9.15-3.33-10.86-9.6l-6.64-15.85a10.65,10.65,0,0,0-9.83-6.55H117.34a10.69,10.69,0,0,0-9.86,6.57l-7.12,17.37A10.66,10.66,0,0,1,90,256H86.09a10.64,10.64,0,0,1-8.87-4.76l-15-22.51a10.66,10.66,0,1,0-17.75,11.82l15,22.51a32,32,0,0,0,26.62,14.25H90c14.72,0,27.48-10,30.55-22.7l3.88-9.3h7.19L135,253.1a32,32,0,0,0,31,24.23h3.92a31.94,31.94,0,0,0,26.62-14.27l15-22.51A10.65,10.65,0,0,0,208.58,225.77Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M94.79,219a10.68,10.68,0,0,0-14.4-4.5c-7.57,4-32.3,9.45-59.05,9.45a10.67,10.67,0,1,0,0,21.33c30,0,57.94-6.12,68.95-11.88A10.66,10.66,0,0,0,94.79,219Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M234.68,224c-26.75,0-51.48-5.48-59.05-9.45a10.67,10.67,0,0,0-9.9,18.9c11,5.76,38.91,11.88,68.95,11.88a10.67,10.67,0,1,0,0-21.33Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M113.65,141.25c-8.9-7.68-54.49-44.82-78.51-20.8a10.67,10.67,0,0,0,15.08,15.08c6.93-6.89,33.49,8.09,49.49,21.87a10.66,10.66,0,0,0,13.93-16.15Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M220.87,120.47c-24-24-69.61,13.12-78.51,20.8a10.66,10.66,0,0,0,13.93,16.15c16-13.8,42.62-28.74,49.49-21.87a10.67,10.67,0,0,0,15.08-15.08Z"
                                    />
                                    <path
                                    class="cls-2"
                                    d="M249.89,65c-45.59-21.4-118.68-22.31-122-22.34-3.09,0-76.18.94-121.77,22.34A10.7,10.7,0,0,0,0,75.11L6.28,222.36c.26,5.91,5.4,10.75,11.12,10.22a10.66,10.66,0,0,0,10.2-11.12l-6-139.93C63.48,64.81,127.43,64,127.9,64c.68,0,64.62.81,106.48,17.54l-6,139.93a10.66,10.66,0,0,0,10.2,11.12h.47a10.7,10.7,0,0,0,10.67-10.22L256,75.11A10.72,10.72,0,0,0,249.89,65Z"
                                    />
                                    <path
                                    class="cls-1"
                                    d="M140.42,277.46a10.63,10.63,0,0,0-12.27,8.77l-.15.88-.15-.85a10.66,10.66,0,1,0-21,3.5l10.67,64a10.66,10.66,0,0,0,21,0l10.67-64A10.66,10.66,0,0,0,140.42,277.46Z"
                                    />
                                </g>
                                </g>
                            </svg>
                            </span>
                        </div>
                        <span class="plugin-options">
                            <div
                            tabindex="-1"
                            class="_2hHc6 T6CTG"
                            style="transform-origin: right top; transform: scale(1); opacity: 1;"
                            >
                            <ul class="_3z3lc">
                                <li
                                tabindex="-1"
                                class="_3cfBY _2yhpw _3BqnP"
                                data-animate-dropdown-item="true"
                                style="opacity: 1;"
                                >
                                <div
                                    class="_3zy-4 Sl-9e"
                                    role="button"
                                    command="new_password"
                                    title="Define new Password"
                                >
                                    Define new Password
                                </div>
                                </li>
                                <li
                                tabindex="-1"
                                class="_3cfBY _2yhpw _3BqnP"
                                data-animate-dropdown-item="true"
                                style="opacity: 1;"
                                >
                                <div
                                    class="_3zy-4 Sl-9e"
                                    role="button"
                                    command="new_theme"
                                    title="Change your theme"
                                >
                                    Switch Theme
                                </div>
                                </li>
                                <li
                                tabindex="-1"
                                class="_3cfBY _2yhpw _3BqnP"
                                data-animate-dropdown-item="true"
                                style="opacity: 1;"
                                >
                                <div
                                    class="_3zy-4 Sl-9e"
                                    role="button"
                                    command="do_lock"
                                    title="Instant lock"
                                >
                                    Instant Lock
                                </div>
                                </li>
                                <li
                                tabindex="-1"
                                class="_3cfBY _2yhpw _3BqnP"
                                data-animate-dropdown-item="true"
                                style="opacity: 1;"
                                >
                                <div
                                    class="_3zy-4 Sl-9e"
                                    role="button"
                                    command="new_timer"
                                    title="Change timer for password lock"
                                >
                                    Set timer
                                </div>
                                </li>
                            </ul>
                            </div>
                        </span>
                    </div>
                    `
                )
            },
            setEvents: () => {
                let $btnOptions, $optionList, $selected;

                $btnOptions = $('[optionCaller]');
                $optionList = $('.plugin-options');

                $btnOptions.on('click', e => {
                    $optionList.toggleClass('display');
                })

                $optionList.find('._3cfBY').on('click', e => {
                    
                    $selected = $(e.currentTarget).find('[command]');

                    switch ($selected.attr('command')) {
                        case 'new_timer':
                            const localState = {
                                inputValue: '',
                                self: $selected
                            }
                            
                            localState.self.addClass('disabled');

                            this.builder.newTimer()
                                .appender()
                                .on('keyup', event => {
                                    localState.inputValue = event.currentTarget.value;

                                    if (event.keyCode === 13){
                                        this.methods.timer(
                                            parseFloat(localState.inputValue)
                                        )
                                        
                                        $(event.currentTarget).parent()
                                            .remove()

                                        localState.self.removeClass('disabled')
                                        $optionList.toggleClass('display');
                                    }

                                })
                            break;
                            default:
                                console.log('click could not find command')                            
                    }
                })
            }
        }

        this.pageLoaded(() => this.shove(this.options))

        // **
        // * Teste
        // this.methods.timer(500);
    }

    shove = function (item) {
        $('._3lq69 > span').append(item.html())
        item.setEvents()
    }

    pageLoaded = function (callback) {
        const ID = setInterval(() => {
            if (!!$('._3lq69 > span').length) {
                clearInterval(ID);
                this.done(callback)
            }
        })
    }

    done = function (callback) {
        callback.call();
    }
}

// **
// * Responsável por criar containers
class Builder {
    constructor() {

    }

    appendTo = function (target, elem) {
        $(target).append(elem)
    }

    newTimer = function () {
        const caller = {
            html:
                `
                    <div class="newTimer">
                        <input type="number" id="inputTimer" placeholder="new timer value" title="Add new timer value then press enter">
                    </div>
                `,
            appender: function () {
                if (!!$('.newTimer').length) return $('.newTimer input')
                
                $('._2hHc6').append(this.html)

                return (
                    $('.newTimer input')
                )
            }
        }

        return caller;
    }
}