class Container {
    constructor() {
        let app = document.createElement('div');
        app.id = 'controllerApp';
        $('body').append(app);

        this.blocker = {
            chance: 3,
            time: 10,
            html: function(){
                return (
                    `
                    <div class="container" id="blockedContent">
                        <h3>Blocked Content</h3>
                        <input type="password" placeholder="Password" />
                        <label id="status">You have ${this.chance} chances until self-destruct</label>
                        <div class="controller">
                            <a class="btn btn-primary">Login</a>
                            <a class="btn btn-secondary" id="logout" onclick="forceLogout()">Logout</a>
                        </div>
                    </div>
                    `
                );
            },
            clear: false,
            setEvents: () => {
                $('#logout').on('click', e => {
                    this.forceLogout();     
                })
            },
        }

        this.definePassword = {
            auth: localStorage.getItem('auth'),
            html: function(){
                return(
                    ''
                )
            },
            setEvents: () => {
                
            }
        }

        if (!!localStorage.get(auth)){
            this.block();

            this.timeout(this.blocker.time);
            this.blocker.setEvents();
        }
    }

    shove = function (to, newDom) {
        $(to).html(newDom);
    }

    timeout = function (int) {
        int = !!int
            ? int * 1000 * 60
            : 10 * 1000 * 60;

        setInterval(() => {
            clear = false;
        }, int)
    }

    checker = function () {
        setInterval(() => {
            if (!clear) {
                this.block();
            }
        }, 100)
    }

    block = function () {
        this.shove('#controllerApp', this.blocker.html());
    }

    forceLogout = function(){
        localStorage['remember-me'] = false;
        window.location.href = window.location.href;
        localStorage.setItem('auth', 'false');
    }
}