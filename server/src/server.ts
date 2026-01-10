import setup from "./setup"



setup("staticRainGen").then(async ({app, db}) => {

  
  app.post("/echo", (req, res) => {
    res.send(req.body)
  })
})
