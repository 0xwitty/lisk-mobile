import { apiClient } from './apiClient';

const account = {
  address: 'lskebd9zfkhz6ep9kde24u8h7uxarssxxdnru2xgw',
  balance: '10000',
  publicKey: 'cfc390b6e2dea236db4bfa8c7921e845e8fd54ab07e7c2db0af7ee93ef379b19',
  unconfirmedBalance: '10000',
  initialized: true
};

describe('apiClient', () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAccount', () => {
    it('Retrieve accounts by address', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => ({
            data: [
              {
                sequence: { nonce: 0 },
                summary: account,
                dpos: {
                  unlocking: [{ amount: '100000' }],
                  sentVotes: []
                }
              }
            ]
          })
        })
      );
      const result = await apiClient.getAccount(account.address);
      expect(result).toEqual({
        ...account,
        nonce: 0,
        lockedBalance: 100000,
        sentVotes: [],
        unlocking: [{ amount: '100000' }]
      });
    });

    it('Throw error for all other errors', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: false,
          status: 500
        })
      );
      try {
        await apiClient.getAccount(account.address);
      } catch (e) {
        expect(e.message).toEqual('Failed to request account from server.');
      }
    });
  });

  describe('getNetworkState', () => {
    const data = {
      height: 2912982123,
      blockTime: 10
    };

    it('Retrieve a transaction by id', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => ({
            data: {
              height: 2912982123,
              blockTime: 10
            }
          })
        })
      );
      const result = await apiClient.getNetworkInfo();
      expect(result).toEqual(data);
      expect(fetch).toHaveBeenCalledWith(
        'https://service.lisk.com/api/v3/network/status',
        expect.anything()
      );
    });

    it('Throw error for all other errors', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: false,
          status: 500
        })
      );
      try {
        await apiClient.getNetworkInfo();
      } catch (e) {
        expect(e.message).toEqual('Failed to request network info from server.');
      }
    });
  });

  describe('getFees', () => {
    const fees = {
      low: 0.0001,
      medium: 0.0003,
      high: 0.0008
    };

    it('Retrieves the latest fees', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => ({ data: fees })
        })
      );
      const { data: result } = await apiClient.getFees();
      expect(result).toEqual(fees);
      expect(fetch).toHaveBeenCalledWith('https://service.lisk.com/api/v3/fees', expect.anything());
    });

    it('Throw error for all other errors', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: false,
          status: 500
        })
      );
      try {
        await apiClient.getFees();
      } catch (e) {
        expect(e.message).toEqual('Failed to request fees from server.');
      }
    });
  });

  describe('getLatestBlock', () => {
    const data = {
      height: 2912982123,
    };

    it('should get latest blocks', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => ({
            data: [{
              height: 2912982123,
            }]
          })
        })
      );
      const result = await apiClient.getLatestBlock();
      expect(result).toEqual(data);
      expect(fetch).toHaveBeenCalledWith(
        'https://service.lisk.com/api/v3/blocks',
        expect.anything()
      );
    });

    it('should throw error when failed to fetch latest blocks', async () => {
      global.fetch.mockReturnValue(
        Promise.resolve({
          ok: false,
          status: 500
        })
      );
      try {
        await apiClient.getLatestBlock();
      } catch (e) {
        expect(e.message).toEqual('Failed to retrieve the latest block from server.');
      }
    });
  });
});
