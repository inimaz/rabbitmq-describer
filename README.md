# rabbitmq-describer

> Tool that describes the rabbitMQ behavior in an especific app

Brainstorming ideas:

- JSON input:

```json
{
  "routing_keys": [
    {
      "id": "MY.KEY"
    }
  ],
  "queues": [{ "id": "queueId" }],
  "bindings": [
    {
      "routing_key": "MY.KEY",
      "queue": "queueId"
    }
  ]
}
```

- call rabbitMQ API (`http://localhost:15672/api/definitions`)to obtain this info + consumers info from `http://localhost:15672/api/consumers`
- OPTIONAL: code-scraper to search in doc @rabbitmq-describer input -> output messages in producers

| Routing key| --> | queue| --> |consumer|
