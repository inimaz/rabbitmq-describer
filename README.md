# rabbitmq-describer

> Generates a static page that describes the rabbitMQ behavior in a specific app.

It will show a graph with nodes and links, describing which routing keys are being used and which queues are listening to those routing keys.

Very useful to have a graphical overview of a complex rabbitmq system.

# How it works

It will connect to your rabbitMQ management url (default is `http://localhost:15672`) and get the basic metadata of your queues and routing keys. Then it will display the connections in a graph using [Cytoscape.js](https://js.cytoscape.org/), a graphical lib for visualization in graph theory.

# Installation

```
npm install rabbitmq-describer
```

# How to use it

You can serve it with express for instance

```
const rabbitmqDescriber = require('rabbitmq-describer');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const html = await rabbitmqDescriber({
    user: "guest",
    password: "guest",
    managementURL: "http://localhost:15672/",
  });
  res.format({
    "text/html": function () {
      res.end(html);
    },
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
```

Save that into `index.js` and run

```
npm start
```

Go to [http://localhost:3000/](http://localhost:3000/) to see the live version description of yout rabbitmq system.

# Example of the output

![Graph](resources/rabbitMQ_demo.png)
