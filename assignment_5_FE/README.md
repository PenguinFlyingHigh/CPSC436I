# Assignment 5

React Redux Message List Hosted.

[Assignment PDF](http://blogs.ubc.ca/cpsc436i2019s/files/2019/07/Assignment-5.pdf)

## Basic functionality:

- Uses MongoDB
- Initial data loaded into DB
- New data added into DB
- Hosted on GCP

## Bonus functionality:

- Delete Messages
- Edit Messages

## Deployment on Google Cloud Platform

1. Download, Move, and Install gcloud sdk to root directory
2. Run `gcloud init`
3. Deploy with `gcloud app deploy app.yml`

## Development

### Frontend Development

For local development against local server, run `npm run local`

For testing production build against hosted server, run `npm run build` followed by `npm run start`

### Backend Development

Start server with `npm run start`, by default, server is connected to hosted MongoDB.
