class Container {
    constructor() {
        this.step = 'NULL';   

        this.blocker = {
            chance: function(){
                return(
                    parseFloat(localStorage.getItem('loginChance'))
                )
            },
            time: 120,
            html: function () {
                this.defineStep();
                return (
                    `
                    <div class="container" id="blockedContent">
                        <h3>Blocked Content</h3>
                        <input type="password" result placeholder="Password" />
                        <label id="status">You have ${this.chance()} chances until self-destruct</label>
                        <div class="controller">
                            <a class="btn btn-primary" login>Login</a>
                            <a class="btn btn-secondary" logout>Logout</a>
                        </div>
                    </div>
                    `
                );
            },
            passwordTyped: '',
            setEvents: () => {
                $('#blockedContent [logout]').on('click', e => {
                    this.forceLogout();
                })

                $('#blockedContent [result]').on('keyup', e => {
                    this.blocker.passwordTyped = e.currentTarget.value
                })
            },
            defineStep: () => {
                this.step = 'blocker';
            }
        }

        this.auth = {
            running: false,
            interval: false,
            countDown: () => {
                let counter = 0;
                setInterval(() => {
                    if (!!this.auth.interval){
                        counter++
                    }

                    if (counter === 10 && this.auth.interval){
                        counter = 0;
                        this.block();
                    }
                }, this.blocker.time * 100)
            }
        }

        this.definePassword = {
            auth: localStorage.getItem('auth'),
            html: function () {
                this.step = 'definePassword'
                return (
                    `
                    <div class="container" id="register">
                        <h3>Registre sua senha</h3>
                        <div class="wrap">
                            <input type="password" placeholder="nova senha" />
                            <input type="password" placeholder="digite novamente" />
                        </div>
                        <a href="#" class="btn btn-primary" id="submit">Registrar</a>
                        <label for="error"></label>
                    </div>
                    `
                )
            },
            setEvents: () => {
                $('#register').find('.toggle-view')
                    .on('click', (e) => {
                        let $self, type;
                        e.preventDefault()

                        $self = $(e.currentTarget);
                        $self = $self.parent().find('input');

                        type = $self.attr('type');
                        type = type === 'password'
                            ? 'text'
                            : 'password';

                        $self.attr('type', type);
                    })

                $('#register').find('#submit')
                    .on('click', (e) => {
                        let $inputs;
                        e.preventDefault()
                        $('#register').find('label')
                            .text('')

                        $inputs = $('#register').find('input');
                        if ($inputs.eq(0).val() === $inputs.eq(1).val() && $inputs.eq(0).val().length >= 4 && $inputs.eq(1).val() >= 4) {
                            this.setPassword($inputs.eq(0).val());
                            this.breakStep();
                        } else {
                            $('#register').find('label')
                                .text('A senha não bate ou é muito curta')
                        }
                    })
            }
        }

        this.refreshHandler = {
            blocker: function () {
                $('#blockedContent').remove()
                this.block()
            },
            definePassword: function () {
                $('#register').remove();
                this.block()
            }
        }

        this.block();
    }

    base = function () {
        let $app, app

        $app = $('#controllerApp');
        if (!!$app.length) {
            return $app
        } else {
            app = document.createElement('div');
            app.id = 'controllerApp';
            $('body').append(app);

            $app = $('#controllerApp');
            return $app
        }
    }

    shove = function (to, newDom) {
        $(to).html(newDom);
    }

    timeout = function () {
        if (!this.auth.running){
            this.auth.running = true;
            this.auth.countDown();
        }
    }

    block = function () {
        let bool;

        bool = localStorage.getItem('auth');
        bool = bool.includes('true')
            ? true
            : false;

        this.auth.interval = false;

        if (bool) {
            this.shove(this.base(), this.blocker.html());
            this.blocker.setEvents();
        } else {
            this.shove(this.base(), this.definePassword.html());
            this.definePassword.setEvents();
        }
    }

    forceLogout = function () {
        localStorage['remember-me'] = false;
        localStorage.setItem('auth', 'false');
        window.location.href = window.location.href;
    }

    refresh = function () {
        let status;
        if (this.step === 'blocker'){
            $('#blockedContent').remove();
            this.block()
        }
    }

    badLogin = function () {
        let $container, chances;

        if (!localStorage.getItem('loginChance')){
            localStorage.setItem('loginChance', 3)
        }
        
        chances = function(command){
            let value;
            
            if (command === 'sub'){
                value = localStorage.getItem('loginChance');
                value = parseFloat(value);
                value--
            } else {
                value = parseFloat(localStorage.getItem('loginChance'));
            }

            return value
        }

        localStorage.setItem('loginChance', chances('sub'))

        if (this.blocker.chance === 0) {
            this.forceLogout()
            return
        }

        this.refresh();
    }

    setPassword = function (password) {
        chrome.storage.sync.set({
            userPassword: password
        })
        localStorage.setItem('auth', true);
        localStorage.setItem('loginChance', 3)
    }

    breakStep = function () {
        let $container;
        this.auth.interval = true;

        $container = $('#controllerApp').remove();

        this.timeout();
        localStorage.setItem('loginChance', 3);
    }

    getInputPassword = function () {
        let $container, $input;

        $container = $('#blockedContent');
        if (!$container.length) {
            return (
                'Algo deu errado.'
            )
        }

        $input = $container.find('input');
        return $input.val();
    }
}