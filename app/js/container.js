class Container {
    constructor() {
        let app = document.createElement('div');
        app.id = 'controllerApp';
        $('body').append(app);

        this.controller = {
            auth: true,
            user: {
                name: 'leobezr',
                password: '12345'
            },
        }

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
                            <div class="btn btn-primary">Login</div>
                            <div class="btn btn-secondary">Logout</div>
                        </div>
                    </div>
                    `
                );
            },
            clear: false,
        }

        this.block();
        this.timeout(this.blocker.time);
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
}