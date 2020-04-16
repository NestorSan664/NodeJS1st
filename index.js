const express = require('express')

const port = process.env.PORT || 3000
const App = express()

App.get('/tarea', (req, res) => {
    res.status(200).json({
       message: "te amo bebe mucho"
    })
})

App.listen(port, () => {
    console.log("Server init on port 3000")
})