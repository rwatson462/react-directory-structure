# API SDK connection demo

This demo explores these concepts:
1. Routing
2. Suspense
3. Fetching from an external API
4. Custom Hooks
5. Directory structure for pages and supporting components

## Routing

* A simple React Router setup with routes defined in a single file, imported in the base App component (in `components/router/Router`)
* Top level page components are located in `pages`, named as "object-action" with suffix of "Page"
* Page components get data from a Hook, then delegate rendering to a component located in `components/pages`

## Fetching from external API

* Using Tanstack Query to manage caching and as an easy way to handle loading external data
* The queryClient instance is in a separate file in `lib/api/queryClient`
* A shortcut to load json from a remote resource (`lib/api/getJson`)
* Accessing the API is sectioned into "query" hooks in `lib/queries`

## Suspense
* using `useSuspenseQuery` from Tanstack Query that supports Suspense boundaries
* Default layout component automatically wraps its Outlet in a Suspense
