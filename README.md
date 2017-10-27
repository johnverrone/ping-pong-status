# Ping Pong Status

This is a utility to show the status of the ping pong tables in the D10 rec room based off of a raspberry pi motion sensor.

## Getting Started

How to get project running locally.

### Prerequisites

Must have node and npm installed.

### Installing

1. `git clone https://github.homedepot.com/jxv5520/ping-pong-status.git`
2. `cd ping-pong-status && npm install`

### Running locally

1. `node server.js`

## Deployment

This app is hosted on PCF on the Google Cloud Platform in the np foundation. Simply `cf push` to deploy.

## Built With

* [Express](https://expressjs.com/) - web framework
* [Socket.io](https://socket.io/) - real time engine
* [Raspbery Pi](https://www.raspberrypi.org/) - connected to network with PIR motion sensor

## Authors

* **John Verrone** - @john.verrone

