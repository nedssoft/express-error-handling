const express = require('express')
const { handleError, ErrorHandler } = require('./helpers/error')
const app = express()

app.use(express.json())
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  return res.status(200).json('Hello world');
})

app.get('/error', (req, res) => {
  throw new ErrorHandler(500, 'Internal server error');
})

app.use((err, req, res, next) => {
  handleError(err, res);
});
app.listen(PORT, () => console.log(`server listening at port ${PORT}`))