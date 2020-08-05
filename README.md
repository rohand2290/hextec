# hextec

A new web framework for building web applications.

## Installation

To use hextec in your Node.js project, just run

```
hextec new app
```

and then you can use it. This would give you a file directory. You should edit the `App.js` file to make any meaningful changes.

### Building from source

Clone the repo and then run

```
npm install
```

to get all of the dependencies. The typescript sources are located in the `src` folder.

## Purpose

I was dissatisfied with Express and it's relatively bad workflow (at least for me), so I decided to write my own web framework using the HTTP module. This project however is currently in **extreme** beta, so I would not recommend using it yet.

Currently, this only functions as a REST API type service, but without any of the cool things like DB integration (I suppose you could use Mongoose or the official MongoDB driver if you wanted). I recommend using a frontend framework such as React or Vue to go along with this (React integration might be added in a future update, no promises though). Soon proper documentation will be added once I am satisfied enough with the actual functionality.

## License

This project is licensed under the GNU General Public License v3.0. This means you can practically do anything with it **except** distribute closed source versions. Look in `LICENSE.md` for more details.
