const express = require('express')

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  return res.status(200).json('Hello world'); 
})
app.listen(PORT, () => console.log(`server listening at port ${PORT}`))