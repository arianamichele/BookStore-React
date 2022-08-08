<<<<<<< HEAD
yuntian testing push
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
=======
# LETS TALK ABOUT BOOKS!!
>>>>>>> 530ce9d45bef11656ab8d080824f9c0dfc98dc66

### PROJECT PROMPT
A full-stack application utilizing React(front-end) and Express(back-end) for users to start and join conversations about books. 

### USER STORY
1. Unregistered user will be able to navigate to book index (Tagged Books) as home page
2. Unregistered user will be able to sign up(register) using their email
3. Unregistered user can search books, but not Tag them, comment, or like, until login
4. Unregistered user will be able to click on any book on home page (Tagged Books) and go to a show page of that book
5. Unregistered user will be able to enter a book title in a search box and view a show page of the searched book
6. Unregistered user will get feedback saying their search is invalid if they type in an invalid title to a book
7. Unregistered user can view any other credentialed user’s comments from a book’s show page
8. Registered user will be able to sign in
9. Credentialed user will be able to sign out
10. Credentialed user will be able to update password
11. Credentialed user will be able to click on any book on Tagged Books and go to a show page of that book
12. Credentialed user will be able to enter a book title in a search box and view a show page of the searched book
Credentialed user will get feedback saying their search is invalid if they type in an invalid title to a book
12. Credentialed user can add any searched book to the index page with the click of an “Tag” button
13. Credentialed user can choose to delete their own book they added from the via the book’s show page
14. Credentialed user can post comments about a book from the book’s show page
15. Credentialed user can view any other credentialed user’s comments from a book’s show page
16. Credentialed user can delete their own comments from a book’s show page
17. Credentialed user can edit their own past comments on a book’s show page
18. Credentialed user will be redirected to “Tagged Books” page upon login

### WIRE FRAMES

![](Images/photo1.png)
![](Images/photo2.png)
![](Images/photo3.png)
![](Images/photo4.png)
![](Images/photo5.png)
![](Images/photo6.png)
![](Images/photo7.png)
![](Images/photo8.png)
![](Images/photo9.png)
![](Images/photo10.png)

### ERD (entity relationship diagram)
![](Images/WireFrame.png)

### API
##### GOOGLE BOOKS
##### "https://developers.google.com/books/"

### CREATED BY:
| Role | Name |
| -----|------|
| Team Manager | Ariana Briceno |
| Front End SME | Casey Jones |
| Back End SME(s) | Terrance Wells & Yuntian Zheng |

<<<<<<< HEAD
Refer to react deployment documentation for more info.

## About

This template is derived from `create-react-app` and has minimal additional dependencies. The main additions are:

```json
"axios": "^0.24.0",
"react-bootstrap": "^2.0.3",
"react-router-dom": "^6.0.2",
"sass": "^1.44.0",
```

It includes all the components and routes needed to sign up, sign in, change
passwords, and sign out of an API built with either template linked above, with
no need for modification.

**NOTE**: You should customize the included components to suit you app! They're
provided as a guide and a bare minimum of functionality and style. Consider
changing the provided CSS styles, modifying the auth code, improving the flash
messages, etc.

## Structure

The top-level `App` function component stores the currently authenticated
user in state, as well as data related to the flash messages, via hooks. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/components`. The `src/api` directory has a component file, `auth.js`, which
contains all the needed `axios` calls pertaining to authentication.

It is recommended that you follow this pattern in your app as well. For instance, if you are making
an app that keeps track of books, you might want a `src/api/books.js`, which
contains its own `axios` call pertaining to your books resource CRUD actions.
Using a separate directory within `components` for each individual component you
add makes it easy to locate and update components and has the added benefit of
making it easy to create custom styles that apply to that specific component.
To apply component specific styles, add a file to the component's directory such
as `ComponentName.scss` and then import it directly into the component with
`import './ComponentName.scss'`. This will keep your styles modularized and
make it easier to make changes at the component level.

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint           | Component        | `AuthenticatedRoute`? |
| ------------------ | ---------------- | --------------------- |
| `/sign-up`         | `SignUp`         | No                    |
| `/sign-in`         | `SignIn`         | No                    |
| `/change-password` | `ChangePassword` | Yes                   |
| `/sign-out`        | `SignOut`        | Yes                   |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will use the `AuthenticatedRoute` component instead of the regular
`Route`. This custom component is provided as part of the template, and is not
a part of the React library (see more below).

## Features

### `<RequireAuth />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/shared/RequireAuth.js` and is already required in `App`.

It was built with the latest version of React Router(v6) in mind.
It's a thin wrapper for a component in the element prop of React Router's `<Route/>` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/sign-in`. **To use
it, you must pass it the user as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component passed as a child, the `user` prop, for instance, must be passed manually to the children. See the `/change-password` route as an example here:

```js
<Route
  path="/change-password"
  element={
    <RequireAuth user={user}>
      <ChangePassword msgAlert={msgAlert} user={user} />
    </RequireAuth>
  }
/>
```

### `<AutoDismissAlert />` Component

This template also already contains a component that displays user messages.
Messages are configurable via redux actions. This component can be found in
`src/components/shared/AutoDismissAlert/AutoDismissAlert.js`. **There is no need to add
this component to your app. It is already required in `App`.** A single
component instance is used to manage all alerts application-wide.

The alert can be used by passing the `alertMsg` method to a rendered route. The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/). The types it
will accept are: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
'light', and 'dark'.

To change the duration of the message, replace `5000` with a value of your
choice (in milliseconds) in this component's `componentDidMount` method.

The AutoDismissAlert is called by calling the `msgAlert()` as seen here in the SignUp Component, on the second `.then()` and the `.catch()`:

```js
signIn(credentials)
  .then((res) => setUser(res.data.user))
  .then(() =>
    msgAlert({
      heading: "Sign In Success",
      message: messages.signInSuccess,
      variant: "success",
    })
  )
  .then(() => navigate("/"))
  .catch((error) => {
    setEmail("");
    setPassword("");
    msgAlert({
      heading: "Sign In Failed with error: " + error.message,
      message: messages.signInFailure,
      variant: "danger",
    });
  });
```

### `src/apiConfig.js`

This file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

### Bootstrap

This template includes two different implementations of the classic Bootstrap
library we know and love.

#### `bootstrap`

The first implementation of Bootstrap comes from the `bootstrap` npm package,
and provides all of the normal Bootstrap classes and styling we were able to
use with the liquid template. This package is included in the
`src/index.js` file at the very top of the file. That means JSX in this
template can utilize Bootstrap classes like `btn`, `container`, `row`, etc.

See an example below:

```jsx
import React from "react";

const AboutPage = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title">About Page</h1>
      <p className="card-text">There is a Bootstrap card on this page!</p>
    </div>
  </div>
);

export default AboutPage;
```

> Note: Remember to use `className` not `class` in your JSX!

#### `react-bootstrap`

In addition to the classic Bootstrap classes we can plug into our JSX, this
template also comes with a special package called [`react-bootstrap`](https://react-bootstrap.github.io/).
This package allows us to use special React components that have been pre-built
according to the Bootstrap library.

Import components from the `react-bootstrap` library, then use them just like
regular components in your JSX!

See an example below:

```jsx
import React from "react";
import Card from "react-bootstrap/Card";

const AboutPage = () => (
  <Card>
    <Card.Body>
      <Card.Title>The About Page</Card.Title>
      <Card.Text>There is a Bootstrap card on this page!</Card.Text>
    </Card.Body>
  </Card>
);

export default AboutPage;
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
=======
##### STRETCH GOALS
- auto completing search box that provides suggestions as the user input changes
>>>>>>> 530ce9d45bef11656ab8d080824f9c0dfc98dc66
