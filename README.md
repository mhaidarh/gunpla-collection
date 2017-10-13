# Gunpla Collection

![Gundam](gundam.jpg)

Simple app that displays gunpla collection.

## Features

- List all my gunpla collection
- Add new item to my collection
- Remove existing item from my collection
- Update existing item information in my collection

### List

From frontend, request data to backend with endpoint `/`. That response will be processed as an array. Then, loop over that array. Each item will be appended to the table body.

### Add

From frontend, request to add data with a payload via form.
Get data from that from, then send that to the backend with an endpoint '/add'
