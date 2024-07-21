# Navigator: sendBeacon() method Example

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)

The `navigator.sendBeacon()` method asynchronously sends an HTTP POST request containing a small amount of data to a web server.

It's intended to be used for sending analytics data to a web server when the user navigates away from the page.

> Avoid using **unload** and **beforeunload** events to send analytics at the end of a session.

## Usage

Download the repository, install dependencies with `npm install`, and run the server with `node server.js`.

```sh
git clone https://github.com/sushantrahate/send-beacon-nodejs.git
cd send-beacon-nodejs
npm install
node server.js
```

## Access the App

Open a browser and navigate to http://localhost:3000/index.html. When you leave the page, the sendBeacon API gets called.
