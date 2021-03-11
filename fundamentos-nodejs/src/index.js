const express = require('express')

const app = express()

app.get("/", (req, res) => {
   return res.json({mensagem: "Hello word"})
})

app.listen(3333)