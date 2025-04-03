import { Contract, ContractInterface, ethers } from 'ethers';

import { getConfig } from '../configs';
import { wRonToken } from '../services/tokens/data';
import { ChainId, Signer, WalletClient, WalletProvider } from '../types';
import ERC20_ABI from './abis/erc20.json';
import ERC721_ABI from './abis/erc721.json';
import ERC1155_ABI from './abis/erc1155.json';
import KATANA_ABI from './abis/katana.json';
import MARKET_COMMISSION_ABI from './abis/market-commission.json';
import MARKET_GATEWAY_ABI from './abis/market-gateway.json';
import MARKET_GATEWAY_MULTISEND_ABI from './abis/market-gateway-multisend.json';
import { Erc20, Erc721, Erc1155, MarketCommission, Wron } from './abis/types/v5';
import WRON_ABI from './abis/wron.json';
import { KatanaContract } from './KatanaContract';
import { Erc1155MarketGatewayContract, MarketGatewayContract, MarketGatewayMultisendContract } from './market-gateway';

export const createContract = <Type>(
  contractAddress: string,
  ABI: ContractInterface,
  signerOrProvider?: Signer | WalletProvider,
) => {
  return new Contract(contractAddress, ABI, signerOrProvider) as Type;
};

export const createErc721Contract = (contractAddress: string, provider?: WalletProvider) => {
  return createContract<Erc721>(contractAddress, ERC721_ABI, provider);
};

export const createErc1155Contract = (contractAddress: string, provider?: WalletProvider) => {
  return createContract<Erc1155>(contractAddress, ERC1155_ABI, provider);
};

export const createErc20Contract = (contractAddress: string, provider?: WalletProvider) => {
  return createContract<Erc20>(contractAddress, ERC20_ABI, provider);
};

export const createKatanaContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<KatanaContract>(config.contractsAddress.katana, KATANA_ABI, provider);
};

export const createMarketCommissionContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<MarketCommission>(config.contractsAddress.marketCommission, MARKET_COMMISSION_ABI, provider);
};

export const createMarketGatewayContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<MarketGatewayContract>(config.contractsAddress.marketGateway, MARKET_GATEWAY_ABI, provider);
};

export const createErc1155MarketGatewayContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<Erc1155MarketGatewayContract>(config.contractsAddress.marketGateway, MARKET_GATEWAY_ABI, provider);
};

export const createMarketGatewayMultiSendContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<MarketGatewayMultisendContract>(config.contractsAddress.marketGatewayMultisend, MARKET_GATEWAY_MULTISEND_ABI, provider);
};

export const createWRonContract = (chainId: ChainId, provider?: WalletProvider) => {
  const config = getConfig(chainId);
  return createContract<Wron>(wRonToken[chainId].address, WRON_ABI, provider);
};

export const createReadOnlyProvider = (chainId: ChainId) => {
  const config = getConfig(chainId);
  return new ethers.providers.JsonRpcProvider(config.rpcEndpoint);
}; 