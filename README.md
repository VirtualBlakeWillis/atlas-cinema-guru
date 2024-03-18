## Overview
 \*insert overview here\*
## Tasks
###  0. Cloning the Figma project

Create an account in [Figma](/rltoken/nq3cXX07u5eAmv8iTOzBvg "Figma") if you don’t have one and open [this project](/rltoken/vCrxNZGTzGgATxlLfPl09g "this project") and “Duplicate to your Drafts” to have access to all design details.

* GitHub repository: `atlas-cinema-guru`

None- GitHub repository: `atlas-cinema-guru`
---
###  1. Setting up the workspace

In this project, we will use the `yarn` package manager instead of npm.

* Using `yarn create` create your React app.
* Remove all the unnecessary files and their respective imports.
`src/App.test.js`,`src/reportWebVitals.js`, `src/setupTests.js`, `src/logo.svg`
* Make sure your App component returns an empty `div` with `className="App"`

None- Make sure your App component returns an empty `div` with `className="App"`
---
###  2. Adding the general use components

In this task we will add various general components that we will be using almost in every major component.

* The file should import `general.css`
* The file should export a functional component named `Input` as default:
	+ Input must accept these props:
		- `label`: String – The input label
		- `type`: String – Input type
		- `className`: String – Input custom classes
		- `value`: Any – The controlled state
		- `setValue`: Function – The setState function of the above state.
		- `icon`(optional): FontAwesomeIcon – An icon to decorate the input with.
		- `inputAttributes`(optional): Object – Other input attributes
* Input’s return value must contain a html input with the appropriate attributes from the props.
* Create `handleInput` function that takes the `onChange` event as parameter and sets the value to the event target value using the `setValue` prop and pass it to the input `onChange` event.

None- Create `handleInput` function that takes the `onChange` event as parameter and sets the value to the event target value using the `setValue` prop and pass it to the input `onChange` event.
---
###  3. Initialize the main App component

Now we will add the main App comonent that will host all of the others.

* The file should import `App.css`
* The file should export a functional component named `App` as default:
	+ Add the following state to the component using the `useState` hook:
		- `isLoggedIn`Boolean default: `false`
		- `userUsername`string default: `""`
	+ use the `useEffect` hook to do the following whenever the component mounts:
		- Get the value of `accessToken` item from the `localStorage`
		- Send a post request to `/api/auth/` with the `authorization` header set to `Bearer <accessToken>`
			* `onSuccess` set the isLoggedin and the userUsername state to true and the username from the response object respectively
	+ App must return depending on the isLoggedIn state :
		- `true`: The Dashboard component (Will be built in later tasks)
		- `false`: The Authentication component (Will be built in later tasks)

None- The file should export a functional component named `App` as default:
	* Add the following state to the component using the `useState` hook:
		+ `isLoggedIn`Boolean default: `false`
		+ `userUsername`string default: `""`
	* use the `useEffect` hook to do the following whenever the component mounts:
		+ Get the value of `accessToken` item from the `localStorage`
		+ Send a post request to `/api/auth/` with the `authorization` header set to `Bearer <accessToken>`
			- `onSuccess` set the isLoggedin and the userUsername state to true and the username from the response object respectively
	* App must return depending on the isLoggedIn state :
		+ `true`: The Dashboard component (Will be built in later tasks)
		+ `false`: The Authentication component (Will be built in later tasks)
---
###  4. Authentification - Component behavior

In this task we will add the three main authentication components `Authentication Login Register`

* The file should import `auth.css`
* The file should export a functional component named `Authentication` as default:


	+ Authentication must accept these props:
		- `setIsLoggedIn`: function – The setState for the isLoggedin state
		- `setUserUsername`: function –The setState for the userUsername state
	+ Add the following state to the component using the `useState` hook:
		- `_switch`Boolean default: `true`
		- `username`string default: `""`
		- `password`string default: `""`
	+ Authentication must return a html `form` in which there’s two `Buttons`:
		- Sign In: When clicked sets the `_switch` state to `true`
		- Sign Up: When clicked sets the `_switch` state to `false`**Login**

None- The file should export a functional component named `Authentication` as default:


	* Authentication must accept these props:
		+ `setIsLoggedIn`: function – The setState for the isLoggedin state
		+ `setUserUsername`: function –The setState for the userUsername state
	* Add the following state to the component using the `useState` hook:
		+ `_switch`Boolean default: `true`
		+ `username`string default: `""`
		+ `password`string default: `""`
	* Authentication must return a html `form` in which there’s two `Buttons`:
		+ Sign In: When clicked sets the `_switch` state to `true`
		+ Sign Up: When clicked sets the `_switch` state to `false`**Login**
---
###  5. Authentification - Api integration

In this task, will add the necessary logic to finalize the authentication process.

* in `src/routes/auth/Authentication.js`:
	+ Create `handleSubmit` function:
		- handleSubmit takes the `onSubmit` event as parameter.
		- use the `preventDefault` event method to disable the default behavior of the form
		- Depending on the \_switch state:
			* `true`: using `axios` send a post request to `/api/auth/login` route with `username` and `password` from the component state as body data.
			* `false`: using `axios` send a post request to `/api/auth/register` route with `username` and `password` from the component state as body data.
			* `onSuccess` we will get a response containing a jwt access token.
				+ Store the token in the `localStorage`
				+ Set the userUsername state to username
				+ Set the isLoggedIn state to true
	+ Bind the `handleSubmit` function to the form `onSubmit` event

None- in `src/routes/auth/Authentication.js`:
	* Create `handleSubmit` function:
		+ handleSubmit takes the `onSubmit` event as parameter.
		+ use the `preventDefault` event method to disable the default behavior of the form
		+ Depending on the \_switch state:
			- `true`: using `axios` send a post request to `/api/auth/login` route with `username` and `password` from the component state as body data.
			- `false`: using `axios` send a post request to `/api/auth/register` route with `username` and `password` from the component state as body data.
			- `onSuccess` we will get a response containing a jwt access token.
				* Store the token in the `localStorage`
				* Set the userUsername state to username
				* Set the isLoggedIn state to true
	* Bind the `handleSubmit` function to the form `onSubmit` event
---
###  6. Navigation - Adding the header

In this task we will start building the Dashboard component.

* The file should import `navigation.css`
* The file should export a functional component named `Header` as default:
	+ Header must accept these props:
		- `userUsername`: string – The state for the username
		- `setIsLoggedIn`: function –The setState for the isLoggedin state
	+ Header must return a html `nav` containing these elements and others:
		- `img`: `src="https://picsum.photos/100/100"` for random avatars
		- `p`: Welcoming the user using the `userUsername` state
		- `span`: with an icon and logout text
	+ Create `logout` function in which:
		- Remove the `accessToken` item from `localStorage`
		- Set isLoggedIn state to false
	+ Bind the `logout` function the the logout span’s `onClick` event.

None- The file should export a functional component named `Header` as default:
	* Header must accept these props:
		+ `userUsername`: string – The state for the username
		+ `setIsLoggedIn`: function –The setState for the isLoggedin state
	* Header must return a html `nav` containing these elements and others:
		+ `img`: `src="https://picsum.photos/100/100"` for random avatars
		+ `p`: Welcoming the user using the `userUsername` state
		+ `span`: with an icon and logout text
	* Create `logout` function in which:
		+ Remove the `accessToken` item from `localStorage`
		+ Set isLoggedIn state to false
	* Bind the `logout` function the the logout span’s `onClick` event.
---
###  7. Navigation - Sidebar

In this task we will add another component to facilitate navigating through the app even more

* The file should import `components.css`
* The file should export a functional component named `Activity` as default:
	+ Activity must return a html `li` containing these elements and others:
		- `p`: Formatted sentence according to the activity (see design)

None- The file should export a functional component named `Activity` as default:
	* Activity must return a html `li` containing these elements and others:
		+ `p`: Formatted sentence according to the activity (see design)
---
###  8. Dashboard routing

Now we’ll add the routing.

* Import `BrowserRouter`, `Routes`, `Route`, `Navigate` from `react-router-dom`
* Wrap the return value of the Dashboard component in a `BrowserRouter`
* Add a Routes component. Inside it add:
	+ `Route` to path `/home` that should render the `HomePage` component (Will be created in a later task)
	+ `Route` to path `/favorites` that should render the `Favorites` component (Will be created in a later task)
	+ `Route` to path `/watchlater` that should render the `WhatchLater` component (Will be created in a later task)
	+ `Route` for all other paths that redirects the user to `/home` using the `Navigate` component

None- Add a Routes component. Inside it add:
	* `Route` to path `/home` that should render the `HomePage` component (Will be created in a later task)
	* `Route` to path `/favorites` that should render the `Favorites` component (Will be created in a later task)
	* `Route` to path `/watchlater` that should render the `WhatchLater` component (Will be created in a later task)
	* `Route` for all other paths that redirects the user to `/home` using the `Navigate` component
---
###  9. Dashboard - Setting up child components

For the dashboard we will need four essential components which will be used in each of our pages.

* The file should import `movies.css`
* The file should export a functional component named `Tag` as default:
	+ Tag must accept these props:
		- `genre`: string – The genre name
		- `filter`: boolean – Indicates if the Tag is used in a filter
		- `genres`: array – The state containing the list of genres
		- `setGenres`: function – The setState for the above state
	+ Tag must return a html `li` with the genre name displayed
	+ Add the following state to the component using the useState hook:
		- `selected`: Boolean – Indicates if the tag is selected
	+ Create `handleTag` function in which:
		- If `selected` is `true` removes the genre from `genres` using the `setGenres` then sets the selected state to `false`
		- If `selected` is `false` adds the genre in the `genres` using the `setGenres` then sets the `selected` state to `true`
	+ Bind the `handleTag` function to the li’s `onClick` event

None- The file should export a functional component named `Tag` as default:
	* Tag must accept these props:
		+ `genre`: string – The genre name
		+ `filter`: boolean – Indicates if the Tag is used in a filter
		+ `genres`: array – The state containing the list of genres
		+ `setGenres`: function – The setState for the above state
	* Tag must return a html `li` with the genre name displayed
	* Add the following state to the component using the useState hook:
		+ `selected`: Boolean – Indicates if the tag is selected
	* Create `handleTag` function in which:
		+ If `selected` is `true` removes the genre from `genres` using the `setGenres` then sets the selected state to `false`
		+ If `selected` is `false` adds the genre in the `genres` using the `setGenres` then sets the `selected` state to `true`
	* Bind the `handleTag` function to the li’s `onClick` event
---
###  10. Dashboard - Main pages

Now that we have all the necessary components to structure our up, all what is needed is to build our main pages.

* The file should import `dashboard.css`
* The file should import MovieCard, Filter, Button components
* The file should export a functional component named `HomePage` as default:
	+ Add the following state to the component using the useState hook:
		- `movies`: array, default: `[]`
		- `minYear`: number, default: `1970`
		- `maxYear`: number, default: `2022`
		- `genres`: array, default: `[]`
		- `sort`: string, default: `""`
		- `title`: string, default: `""`
		- `page`: number, default: `1`
	+ Dashboard must return a html `div` containing these elements and others:
		- Filter with all it’s necessary props passed from state
		- Map each object of the movies state to MovieCard component
		- Button with the text`"Load More.."` for loading more titles
	+ Create `loadMovies`:
		- `loadMovies` takes a page parameter which refer to which page to query
		- Send a get request to `/api/titles/advancedsearch` route with the following states as parameters:
			* `minYear` Filter for the minimum year
			* `maxYear` Filter for the maximum year
			* `genres` Filter for the genres
			* `title` Filter for the movie/show title
			* `sort` Sort by
		- Use the `useEffect` hook to call `loadMovies` on component mount
		- Make sure that the `useEffect` fires on every filtering/sorting state change
		- Bind the `onClick` event of the `Load More..` button

None- The file should export a functional component named `HomePage` as default:
	* Add the following state to the component using the useState hook:
		+ `movies`: array, default: `[]`
		+ `minYear`: number, default: `1970`
		+ `maxYear`: number, default: `2022`
		+ `genres`: array, default: `[]`
		+ `sort`: string, default: `""`
		+ `title`: string, default: `""`
		+ `page`: number, default: `1`
	* Dashboard must return a html `div` containing these elements and others:
		+ Filter with all it’s necessary props passed from state
		+ Map each object of the movies state to MovieCard component
		+ Button with the text`"Load More.."` for loading more titles
	* Create `loadMovies`:
		+ `loadMovies` takes a page parameter which refer to which page to query
		+ Send a get request to `/api/titles/advancedsearch` route with the following states as parameters:
			- `minYear` Filter for the minimum year
			- `maxYear` Filter for the maximum year
			- `genres` Filter for the genres
			- `title` Filter for the movie/show title
			- `sort` Sort by
		+ Use the `useEffect` hook to call `loadMovies` on component mount
		+ Make sure that the `useEffect` fires on every filtering/sorting state change
		+ Bind the `onClick` event of the `Load More..` button
---
