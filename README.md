# Fast Growing Trees Shop Page using Next.js, Redux Toolkit, TypeScript, & Tailwind

## Background & Overview

### Page Rendering, State Management & Data Fetching

For this exercise I decided to use two technologies in combination that I had 
not previously: Next.js and Redux Toolkit Query.

The **Redux Toolkit** is a standardized way to write Redux logic (create actions
and reducers, setup the store with some default middlewares like redux devtools
extension).  In this app, both Redux tool kit's API and client-side only state 
management tooling are utilized to demonstrate how data-fetching related global 
state management concerns might interact with strictly derived state concerns.

A number of approaches were attempted here before the current approach was
arrived at. What was not immediately obvious but is suggested by the designs
and requirements is the need for a server to host the shop data, exposing it
through a variety of API endoints, a client-side strategy for fetching that
data and persisting it as application state, and additionally the need for
"derived", purely client-side global state for representing the users shopping
cart. To this end the current approach was devised.

The backend server utilizes Next.js's built-in page/API directories approach.
This uses the data provided in the example requirements as a mock for database
store for the shop data. Whenever a page utilizes the shop data next JS
features the data via get server side props using the exported utility message
from redux tool kit for fetching those data and syncing them to the store.

This allows us to build the shop pages with all non-user specific UI in place.
User specific UI refers to anything derived from the Cart state. These elements
have all been wrapped in an export function opting them out of Next.js's SSR,
to prevent collisions between their markup and what mounts on load client-side.

All the cart state is tracked in a cart-specific "slice" of Redux store. As
subscription to state changes syncs the client state to localStorage as
serialized data. On any hard reload or page refresh, the client-side store is
configured to build from the last snapshot of state there.

### Styles & UI

For styling, Tailwind.css has been used to both speed up development time and
support the use of server side rendering -- as much as possible, all
the data needed by the page has been captured server side for it is sent over
to the client.  using till when CSS also allows us to take a vantage of its
other performance, features such as tree, shaking, unused styles, and it's
sophisticated approach to supporting a design systems approach to UI development.

Though they are listed as out of scope mobile styles have been considered.

### Tests

No tests have been included here. This isn't to suggest that I wouldn't usually
write tests for a project like this, but given the scope of these requirements,
the type of tests that would be appropriate for this type of application are
much too heavy of a lift. For this type of application, the recommended testing
strategy would be to set up Cypress tests that are running on pipelines for
every deployment that test a number of happy paths central to user flows on the
site, or which cover past instances of significant bugs.

## Use

To run the project, use the standard Next.js scripts listed in the package.json 
"scripts" section. 

First after installing, 

```bash
npm install
```

Simply run for the dev build:

```bash
npm run dev
```

And for a production build (which still assumes hosting on localhost:3000), run:

```bash
npm run build && npm run start
```
