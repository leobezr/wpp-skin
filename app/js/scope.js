class Scope {
    constructor() {
        // **
        // * Container
        // * Responsável por todo o controle de acesso
        this.container = new Container();

        // **
        // * Theme
        // * Responsável por opções do usuário
        this.theme = new Theme({
            methods: {
                logout : () => this.resetPassword(),
                timer : (int) => this.defineTimer(int),
                refresh: () => this.container.refreshHandler.blocker(),
            }
        });

        this.loading = false;
        this.manager = {
            userPassword: this.fetchPassword(),
            domPassword: '',
            status: 'NO_CONNECTION',
        }

        // **
        // * Adicionar Event Handler do acesso
        this.handler = function () {
            $('#blockedContent').addClass('hasEvent');
            $('#blockedContent').find('[login]')
                .on('click', e => {
                    e.preventDefault();
                    this.domPassword = this.hash(this.container.blocker.passwordTyped)

                    if (this.domPassword === this.manager.userPassword) {
                        this.container.breakStep();
                        this.container.timeout()
                    } else {
                        this.container.badLogin()
                    }
                })
        }

        // **
        // * Interval
        // * Por uma falha de planejamento eu preciso adicionar o evento por loop
        setInterval(() => {
            if (!!$('#blockedContent').length && !$('#blockedContent').hasClass('hasEvent')) {
                this.handler()
            }

            if (localStorage.getItem('auth') === 'true'){
                $('html').addClass('online')
            } else {
                $('html').removeClass('online')
            }
        }, 100)
    }

    resetPassword = function () {
        localStorage.setItem('auth', false);
        this.container.forceLogout()
    }

    fetchPassword = function () {
        let userPassword;

        this.loading = true;
        chrome.storage.sync.get(['userPassword'], result => {
            userPassword = result.userPassword;

            if (typeof userPassword !== 'undefined') {
                this.define(userPassword);
            }
        })
    }

    define = function (pass) {
        this.loading = false;
        this.manager.userPassword = pass;
        this.manager.status = 'CONNECTED';
    }

    hash = function (string) {
        var hash = 0, i, chr;
        if (string.length === 0) return hash;
        for (i = 0; i < string.length; i++) {
            chr = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash.toString();
    }

    defineTimer = function(int) {
        this.container.blocker.time = int
        this.container.auth.release();
    }
}