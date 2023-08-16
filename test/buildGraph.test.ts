import { generateNodesAndEdges } from '../src/buildGraph';
import testJson from './test_data/rabbitmqInfo.json';
describe('buildGraph', () => {
  it('should generate correct nodes and edges', () => {
    // Prepare

    // Call
    const response = generateNodesAndEdges(testJson);
    // Expect
    const expectedResponse = {
      nodes: [
        { data: { id: 'my-vhost', parent: 'rabbitMQ', type: 'vhost' } },
        { data: { id: 'custom-agent', parent: 'my-vhost', type: 'queue' } },
        {
          data: {
            id: 'my-vhost-manager-consolidate',
            parent: 'my-vhost',
            type: 'queue',
          },
        },
        { data: { id: 'my-vhost-manager', parent: 'my-vhost', type: 'queue' } },
        {
          data: {
            id: 'my-vhost-manager-SMS',
            parent: 'my-vhost',
            type: 'queue',
          },
        },
        {
          data: {
            id: 'amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            parent: 'my-vhost',
            type: 'queue',
          },
        },
        {
          data: { id: 'custom-agent-call', parent: 'my-vhost', type: 'queue' },
        },
        { data: { id: 'test-queue', parent: 'my-vhost', type: 'queue' } },
        {
          data: { id: 'my-vhost-payments', parent: 'my-vhost', type: 'queue' },
        },
        {
          data: {
            id: 'amq.gen-MWWgkt1EWU0MhUEEz-2TxQ',
            parent: 'my-vhost',
            type: 'queue',
          },
        },
        {
          data: {
            id: 'amq.gen--e4RhtFd1IIOkoifNCQkbA',
            parent: 'my-vhost',
            type: 'queue',
          },
        },
        { data: { id: 'SMS.*.SKIP', parent: 'my-vhost', type: 'routing_key' } },
        {
          data: {
            id: 'SMS.*.SUCCESS',
            parent: 'my-vhost',
            type: 'routing_key',
          },
        },
        { data: { id: 'SMS.CREATE', parent: 'my-vhost', type: 'routing_key' } },
        { data: { id: 'SMS.UPDATE', parent: 'my-vhost', type: 'routing_key' } },
        {
          data: {
            id: 'CALL.TERMINATE',
            parent: 'my-vhost',
            type: 'routing_key',
          },
        },
        {
          data: { id: 'TEST.CREATE', parent: 'my-vhost', type: 'routing_key' },
        },
        {
          data: { id: 'TEST.SUCCESS', parent: 'my-vhost', type: 'routing_key' },
        },
        {
          data: { id: 'TASK.CANCEL', parent: 'my-vhost', type: 'routing_key' },
        },
        {
          data: {
            id: 'TASK.CALL.CREATE',
            parent: 'my-vhost',
            type: 'routing_key',
          },
        },
        {
          data: {
            id: 'TASK.TEST.CREATE',
            parent: 'my-vhost',
            type: 'routing_key',
          },
        },
        {
          data: {
            id: 'PAYMENT.REFUND',
            parent: 'my-vhost',
            type: 'routing_key',
          },
        },
        { data: { id: 'rabbitMQ' } },
      ],
      edges: [
        {
          data: {
            id: 'eSMS.*.SKIP-my-vhost-manager-SMS',
            source: 'SMS.*.SKIP',
            target: 'my-vhost-manager-SMS',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eSMS.*.SKIP-test-queue',
            source: 'SMS.*.SKIP',
            target: 'test-queue',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eSMS.*.SUCCESS-my-vhost-manager-SMS',
            source: 'SMS.*.SUCCESS',
            target: 'my-vhost-manager-SMS',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eSMS.*.SUCCESS-amq.gen-MWWgkt1EWU0MhUEEz-2TxQ',
            source: 'SMS.*.SUCCESS',
            target: 'amq.gen-MWWgkt1EWU0MhUEEz-2TxQ',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eSMS.CREATE-custom-agent',
            source: 'SMS.CREATE',
            target: 'custom-agent',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eSMS.UPDATE-custom-agent',
            source: 'SMS.UPDATE',
            target: 'custom-agent',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eCALL.TERMINATE-my-vhost-manager-consolidate',
            source: 'CALL.TERMINATE',
            target: 'my-vhost-manager-consolidate',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eCALL.TERMINATE-amq.gen--e4RhtFd1IIOkoifNCQkbA',
            source: 'CALL.TERMINATE',
            target: 'amq.gen--e4RhtFd1IIOkoifNCQkbA',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTEST.CREATE-custom-agent',
            source: 'TEST.CREATE',
            target: 'custom-agent',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTEST.CREATE-custom-agent-call',
            source: 'TEST.CREATE',
            target: 'custom-agent-call',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTEST.SUCCESS-my-vhost-manager',
            source: 'TEST.SUCCESS',
            target: 'my-vhost-manager',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTEST.SUCCESS-amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            source: 'TEST.SUCCESS',
            target: 'amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.CANCEL-my-vhost-manager',
            source: 'TASK.CANCEL',
            target: 'my-vhost-manager',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.CANCEL-amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            source: 'TASK.CANCEL',
            target: 'amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.CALL.CREATE-my-vhost-manager',
            source: 'TASK.CALL.CREATE',
            target: 'my-vhost-manager',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.CALL.CREATE-amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            source: 'TASK.CALL.CREATE',
            target: 'amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.TEST.CREATE-my-vhost-manager',
            source: 'TASK.TEST.CREATE',
            target: 'my-vhost-manager',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'eTASK.TEST.CREATE-amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            source: 'TASK.TEST.CREATE',
            target: 'amq.gen-_cPVW0jVcVb_c7Cv4OcJlQ',
            parent: 'my-vhost',
          },
        },
        {
          data: {
            id: 'ePAYMENT.REFUND-my-vhost-payments',
            source: 'PAYMENT.REFUND',
            target: 'my-vhost-payments',
            parent: 'my-vhost',
          },
        },
      ],
    };
    expect(response).toStrictEqual(expectedResponse);
  });
});
