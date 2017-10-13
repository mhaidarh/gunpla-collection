const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

let gunplaCollection = [
  {
    id: 0,
    model: "DUMMY",
    year: 2000,
    price: 100000
  },
  {
    id: 1,
    model: "Gundam Barbatos",
    year: 2015,
    price: 800000
  },
  {
    id: 2,
    model: "Gundam Unicorn",
    year: 2010,
    price: 1200000
  },
  {
    id: 3,
    model: "Gundam RX",
    year: 2000,
    price: 3200000
  }
]

const addItemToCollection = (collection, item) => {
  collection.push(item)
  return collection // updated collection
}

app.get("/", (req, res) => {
  res.send(gunplaCollection)
})

app.post("/", (req, res) => {
  const newItem = req.body
  const newCollection = addItemToCollection(gunplaCollection, newItem) // store updated collection to new variable
  gunplaCollection = newCollection // replace current collection with the new collection
  res.send(gunplaCollection) // send the updated collection
})

app.listen(3000, () => {
  console.log("API running on localhost:3000")
})
