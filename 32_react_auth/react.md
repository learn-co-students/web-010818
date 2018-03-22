## Authenticating a user and sending a JWT Client-Side

Lets take a few minutes to checkout what was given to us on the client.

>Explain local storage.


```
localStorage.getItem('key')
localStore.setItem(object)
```

> View in application to in dev tools

Now lets write the code for the authAdapter, what should this class do for us?

>static anyone?

Here is the completed code:

```javascript
const baseUrl = 'http://localhost:3000/api/v1'

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json())
  }
}

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}
```

Our App.js will contain the main logic for `login` `logout` and checking for a logged in user.

#### Login

```javascript

  logIn(loginParams){
    Auth.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth: { isLoggedIn: true, user: user}
          })
          localStorage.setItem('jwt', user.jwt )
        }
      })
  }

```


#### Logout

```javascript
  logout(){
    localStorage.removeItem('jwt')
    this.setState({ auth: { isLoggedIn: false, user:{}}})
  }

  //Navigation.js
  <Menu.Item name='logout' onClick={logout} />
```

Next we want to grab and validate the user on initiale mount. Lets add:

```javascript
componentWillMount(){
      if (localStorage.getItem('jwt')) {
       Auth.currentUser()
         .then(user => {
           if (!user.error) {
             console.log("fetch user");
             this.setState({
               auth: {
                 isLoggedIn: true,
                 user: user
               }
             })
           }
         })
     }
   }
```


### Authorization

I want to restrict users from going to the cards or home page unless the are logged in.

There are a few different ways I can do this. For now we will stay away from HOCs.

First method using Redirect component:

```jsx
<Route exact path='/' render={()=>{
return this.state.auth.isLoggedIn ? <Home /> : <Redirect to="/login"/>
}} />
```
Second method using browser history component:

**App.js**

```jsx
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

<Router history={history}>
```

__OR__

```jsx
import PropTypes from 'prop-types'

static ContextTypes ={ router: PropTypes.Object }
```


>explain how all route components now have this.props.history

**Component to authorize**

```jsx
  componentWillMount () {
    console.log('Mounting')
    if (!localStorage.getItem('jwt')) this.props.history.push('/login')
  }
  componentWillUpdate () {
    console.log('Updating')
    if (!localStorage.getItem('jwt')) this.props.history.push('/login')
  }
```

## HOC


```
import React from 'react'
import PropTypes from 'prop-types'


export default function (RenderedComponent, inheritedProps) {
  return class extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentDidMount() {
      if (!localStorage.getItem('jwt')) {
        this.context.router.history.push('/')
      }
    }

    render() {
      return (
        <RenderedComponent {...inheritedProps} />
      )
    }
  }
}

```


## Conclusion

- What is a JWT? Why is useful for authorizing an API?
- How do you create a JWT?
- How do you secure a react component?
