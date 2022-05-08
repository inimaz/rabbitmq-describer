const DEFAULT_COLOR = "#999";
const QUEUE_COLOR = "#a0d427";
const ROUTING_KEY_COLOR = "#251630";
const VHOST_COLOR = "#edf7f1";
const defaultStyle = {
  width: 50,
  height: 50,
  "font-size": "30px",
  content: "data(id)",
};

module.exports = [
  {
    selector: "node",
    style: {
      ...defaultStyle,
      "font-size": "50px",
      "background-color": DEFAULT_COLOR,
    },
  },
  {
    selector: `node[type = "queue"]`,
    style: {
      ...defaultStyle,
      "background-color": QUEUE_COLOR,
      "text-outline-color": QUEUE_COLOR,
      "text-valign": "bottom",
    },
  },
  {
    selector: `node[type = "routing_key"]`,
    style: {
      ...defaultStyle,
      "background-color": ROUTING_KEY_COLOR,
      "text-outline-color": ROUTING_KEY_COLOR,
    },
  },
  {
    selector: `node[type = "vhost"]`,
    style: {
      ...defaultStyle,
      "background-color": VHOST_COLOR,
      "text-outline-color": VHOST_COLOR,
    },
  },
  {
    selector: "edge",
    style: {
      width: 5,
      "curve-style": "straight",
      "target-arrow-shape": "triangle",
    },
  },
];
