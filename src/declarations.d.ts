export interface INodeInfo {
  data: {
    id: string;
    parent: string;
    type?: string;
    source?: string;
    target?: string;
  };
}

export interface IRabbitMQInfo {
  rabbit_version?: string;
  rabbitmq_version?: string;
  product_name?: string;
  product_version?: string;
  users?: {
    name: string;
    password_hash: string;
    hashing_algorithm: string;
    tags: string[];
    limits: object;
  }[];
  vhosts: any;
  permissions?: {
    user: string;
    vhost: string;
    configure: string;
    write: string;
    read: string;
  }[];
  topic_permissions?: any[];
  parameters?: any[];
  global_parameters?: { name: string; value: string }[];
  policies?: any[];
  queues: any;
  exchanges?: {
    name: string;
    vhost: string;
    type: string;
    durable: boolean;
    auto_delete: boolean;
    internal: boolean;
    arguments: object;
  }[];
  bindings: { routing_key: string; vhost: string; destination: string }[];
}

export interface IRabbitMQConfig {
  user: string;
  password: string;
  managementURL: string;
}
