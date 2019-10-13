class Scope {
    constructor() {
        this.container = new Container();

        this.loading = false;
        this.manager = {
            userPassword: this.fetchPassword(),
            domPassword: '',
            status: 'NO_CONNECTION',
        }

        // **
        // * Adicionar Event Handler do acesso
        this.handler = function(){
            $('#blockedContent').addClass('hasEvent');
            $('#blockedContent').find('[login]')
                .on('click', e => {
                    e.preventDefault();
    
                    if (this.container.blocker.passwordTyped === this.manager.userPassword) {
                        this.container.breakStep();
                        this.container.timeout()
                    } else {
                        this.container.badLogin()
                    }
                })
        }
        setInterval(() => { 
            if (!!$('#blockedContent').length && !$('#blockedContent').hasClass('hasEvent')){
                this.handler()
            }
        }, 100)
    }

    resetPassword = function () {
        chrome.storage.sync.set({
            password: ''
        })
        localStorage.setItem('auth', false);
    }

    fetchPassword = function () {
        let userPassword;

        this.loading = true;
        chrome.storage.sync.get(['userPassword'], result => {
            userPassword = result.userPassword;

            if ( typeof userPassword === 'string' && userPassword.length >= 4 ){
                this.define(userPassword);
            }
        })
    }

    define = function (pass) {
        this.loading = false;
        this.manager.userPassword = pass;
        this.manager.status = 'CONNECTED';
    }
}