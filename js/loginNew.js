document.addEventListener('DOMContentLoaded', (event) => {

    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const users = [
            {
                username: 'Gerd',
                password: 'GerdConen1000='
           }
       ]
        
        const user = users.find(function(user) {
            return user.username === username
        })

        if (user && user.password === password) {
            window.localStorage.setItem('loggedIn', true)
            window.location.pathname = '/index.html'
        } else {
            document.getElementById('login-failed').classList.remove('d-none')
        }

    })

})
