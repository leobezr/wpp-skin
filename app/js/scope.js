class Scope {
    constructor(){
        this.container = new Container();
        
        this.state = {
            loading: false,
            userPassword: ''
        }
    }

    setPassword = function(password){
        chrome.storage.sync.set({
            password
        })
        localStorage.setItem('auth', true)
    }

    fetchPassword = function(){
        this.state.loading = true;
        chrome.storage.sync.get(['password'], result => {
            this.state.userPassword = result;
            this.state.loading = false;
        })
    }
}