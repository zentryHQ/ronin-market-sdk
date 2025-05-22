# Mavis market core

## Installation

With yarn

```
 yarn add @zentry/mavis-market-sdk
```

With npm

```
 npm install @zentry/mavis-market-sdk --save
```

## Usage

### Environment Variables

The SDK supports using the API Gateway endpoint for mainnet by setting the `MARKETPLACE_API_KEY` environment variable. When this variable is set, requests to mainnet will automatically use the API Gateway endpoint instead of the default GraphQL endpoint.


### Fetch data

#### _Get all collections_

```javascript
import { ChainId, getCollections } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  from: 0,
  size: 10,
};

const { erc721Collections, erc1155Collections } = await getCollections(params);
```

#### _Get collection detail_

```javascript
import { ChainId, getCollection } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
};

const collection = await getCollection(params);
```

#### _Get token metadata_

```javascript
import { ChainId, getTokenMetadata } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  showAttributes: true, // Optional
};

const tokenMetadata = await getTokenMetadata(params);
```

#### _Get all tokens_

```javascript
import {
  ChainId,
  AuctionType,
  ListingSortBy,
  getAllTokens,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  owner: "0xce21e5ed74935379eda4d9120c3887423f960aac",
  from: 0,
  size: 1,
  auctionType: AuctionType.ForSale, // Optional
  sort: ListingSortBy.PriceAsc, // Optional
  tokenAddresses: ["0x3fe52e39c3241ee5440a57edbb553563356b770c"], // Optional
};

const { total, tokens } = await getAllTokens(params);
```

#### _Get erc721 tokens_

```javascript
import {
  ChainId,
  AuctionType,
  SortBy,
  getErc721Tokens,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  from: 0,
  size: 10,
  owner: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional
  auctionType: AuctionType.NotForSale, // Optional
  criteria: [{ name: "attribute_1", values: ["value_1", "value_2"] }], // Optional
  sort: SortBy.SortBy, // Optional
  name: "Cyberkongz", // Optional
  priceRange: {
    from: "1000000000000000000",
    to: "1000000000000000000",
  }, // Optional
  rangeCriteria: [
    {
      name: "attribute_1",
      range: {
        from: "1000000000000000000",
        to: "1000000000000000000",
      },
    },
  ], // Optional
};

const { total, results } = await getErc721Tokens(params);
```

#### _Get erc721 token detail_

```javascript
import { ChainId, getErc721Token } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  tokenId: "982",
};

const data = await getErc721Token(params);
```

#### _Get erc721 token transfer history_

```javascript
import {
  ChainId,
  getErc721TokenTransferHistory,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  tokenId: "982",
  from: 0,
  size: 10,
};

const { total, results } = await getErc721TokenTransferHistory(params);
```

#### _Get erc1155 tokens_

```javascript
import {
  ChainId,
  AuctionType,
  SortBy,
  getErc1155Tokens,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  from: 0,
  size: 10,
  owner: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional
  auctionType: AuctionType.NotForSale, // Optional
  criteria: [{ name: "attribute_1", values: ["value_1", "value_2"] }], // Optional
  sort: SortBy.PriceAsc, // Optional
  name: "Cyberkongz", // Optional
};

const { total, results } = await getErc1155Tokens(params);
```

#### _Get erc1155 token detail_

```javascript
import { ChainId, getErc1155Token } from "@zentry/mavis-market-sdk";
const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
};

const data = await getErc1155Token(params);
```

#### _Get erc1155 token with orders_

```javascript
import { ChainId, getErc1155TokenWithOrders } from '@sky-mavis/mavis-market-core';

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
};

const data = await getErc1155TokenWithOrders(params);
```

#### _Get erc1155 tokens list_

```javascript
import {
  ChainId,
  getErc1155TokensList,
  AuctionType,
  SortBy,
} from '@sky-mavis/mavis-market-core';

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  from: 0,
  size: 10,
  owner: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional
  auctionType: AuctionType.NotForSale, // Optional
  criteria: [{ name: "attribute_1", values: ["value_1", "value_2"] }], // Optional
  sort: SortBy.PriceAsc, // Optional
  name: "Cyberkongz", // Optional
  rangeCriteria: [
    {
      name: "attribute_1",
      range: {
        from: "1000000000000000000",
        to: "1000000000000000000",
      },
    },
  ], // Optional
};

const { total, results } = await getErc1155TokensList(params);
```

#### _Get erc1155 token transfer history_

```javascript
import {
  ChainId,
  getErc1155TokenTransferHistory,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  from: 0,
  size: 10,
};

const { total, results } = await getErc1155TokenTransferHistory(params);
```

#### _Get erc1155 balance_

```javascript
import { ChainId, getErc1155Balance } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  owner: "0xce21e5ed74935379eda4d9120c3887423f960aac",
};

const balance = await getErc1155Balance(params);
```

#### _Get erc721 order_

```javascript
import { ChainId, getErc721Order } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  tokenId: "982",
};

const order = await getErc721Order(params);
```

#### _Get erc721 active orders of tokens_

```javascript
import { ChainId, getActiveOrdersOfTokens } from "@zentry/mavis-market-sdk";

const tokenIds = [
  {
    tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
    tokenId: "1460",
  },
  {
    tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
    tokenId: "508",
  },
];

const params = { chainId: ChainId.testnet, tokenIds };

const activeOrdersOfTokens = await getActiveOrdersOfTokens(params);
```

#### _Get erc1155 orders_

```javascript
import {
  ChainId,
  Erc1155SortBy,
  getErc1155Orders,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  from: 0,
  size: 10,
  maker: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional,
  showInvalid: true, // Optional
  sort: Erc1155SortBy.PriceAsc, // Optional
};

const orders = await getErc1155Orders(params);
```

#### _Get order by hash_

```javascript
import { ChainId, getOrderByHash } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  hash: "f7c91f6f72b3fc2c19efea6abf34a6e713abc67c3beab9b152fa1f591b4472c8",
};

const order = await getOrderByHash(params);
```

#### _Get orders by address_

```javascript
import {
  ChainId,
  ListingSortBy,
  Erc,
  getOrdersByAddress,
} from "@zentry/mavis-market-sdk";

const params = {
  accessToken: '',
  chainId: ChainId.testnet,
  account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
  from: 0,
  size: 10,
  sort: ListingSortBy.PriceAsc, // Optional
  isValid: true, // Optional
  collectibleFilters: {
    tokenAddresses: ["0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09"],
    erc: Erc.Erc1155,
  }, // Optional
};

const { total, quantity, data } = await getOrdersByAddress(params);
```

#### _Get offers_

```javascript
import { ChainId, getOffers } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  tokenId: "982",
  from: 0,
  size: 10,
};

const offers = await getOffers(params);
```

#### _Get offer detail_

```javascript
import { ChainId, getOffer } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  hash: "1c91a5a0d8ef022344166e60e3da96ba819278fe496c4008bc0d028e8c9ab690",
};

const offer = await getOffer(params);
```

#### _Get sent offers_

```javascript
import {
  ChainId,
  getSentOffers,
  Erc,
  OfferSortBy,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  from: 0,
  size: 10,
  account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
  collectibleFilters: {
    tokenAddresses: ["0x3fe52e39c3241ee5440a57edbb553563356b770c"],
    erc: Erc.Erc721,
  }, // Optional
  isValid: true, // Optional
  sort: OfferSortBy.ExpiredAtAsc, // Optional
};

const { total, data } = await getSentOffers(params);
```

#### _Get received offers_

```javascript
import {
  ChainId,
  Erc,
  OfferSortBy,
  getReceivedOffers,
} from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  from: 0,
  size: 10,
  account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
  collectibleFilters: {
    tokenAddresses: ["0x3fe52e39c3241ee5440a57edbb553563356b770c"],
    erc: Erc.Erc721,
  }, // Optional
  isValid: true, // Optional
  sort: OfferSortBy.ExpiredAtAsc, // Optional
};

const { total, data } = await getReceivedOffers(params);
```

#### _Get offers amount_

```javascript
import { ChainId, getOffersAmount } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
};

const { receivedOffersAmount, sentOffersAmount } = await getOffersAmount(
  params
);
```

#### _Get offer by address_

```javascript
import { ChainId, getOfferByAddress } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  tokenId: "982",
  account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
};

const offer = await getOfferByAddress(params);
```

#### _Get exchange rate_

```javascript
import { ChainId, getExchangeRate } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
};

const exchangeRate = await getExchangeRate(params);
```

#### _Get collection analytics_

```javascript
import { ChainId, getCollectionAnalytics } from '@sky-mavis/mavis-market-core';

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
};

const analytics = await getCollectionAnalytics(params);
```

### Main actions

#### _Buy token_

```javascript
import {
  ChainId,
  paymentTokens,
  Token,
  ApproveTokenType,
  fetchPaymentTokenBalance,
  getOrder,
  checkIsErc721OrderValid,
  getTokensNeedToApprove,
  checkIsErc20Approved,
  buyToken,
} from "@zentry/mavis-market-sdk";

const wethAddress = paymentTokens[chainId][Token.WETH].address;
const ronAddress = paymentTokens[chainId][Token.RON].address;
const account = "0xce21e5ed74935379eda4d9120c3887423f960aac";
const chainId = ChainId.testnet;
const amount = "1000000000000000000";
const hash = "f7c91f6f72b3fc2c19efea6abf34a6e713abc67c3beab9b152fa1f591b4472c8";

const wallet = createWalletClient();

// token balances
const wethBalance = await fetchPaymentTokenBalance(
  chainId,
  wethAddress,
  account
);
const isInsufficientBalance = await checkIsInsufficientBalance(
  chainId,
  wethAddress,
  account,
  amount
);

// check order is valid
const checkIsOrderValid = async () => {
  const order = await getOrder({ chainId, hash });
  const isValid = await checkIsErc721OrderValid(chainId, order);
};

// approve token
const checkIsTokenApproved = async () => {
  const tokens = await getTokensNeedToApprove(
    chainId,
    account,
    wethAddress,
    ronAddress,
    amount,
    spenderContract: SpenderContractType.MarketGatewayMultiSendContract // optional: default value is SpenderContractType.MarketGatewayContract
  );
  const isFirstTokenApproved = await checkIsErc20Approved(
    chainId,
    account,
    tokens[0].address,
    amount,
    spenderContract: SpenderContractType.MarketGatewayMultiSendContract // optional: default value is SpenderContractType.MarketGatewayContract
  );
};

const params = {
  wallet,
  chainId,
  address: wethAddress,
  tokenType: ApproveTokenType.Erc20,
  spenderContract: SpenderContractType.MarketGatewayMultiSendContract // optional: default value is SpenderContractType.MarketGatewayContract
};
const tx = await approveToken(params);

// buy
const deadline = parseInt(`${new Date().getTime() / 1000 + 30 * 60}`); // 30 minutes

const params = {
  wallet,
  chainId,
  hash,
  selectedTokenAddress: wethAddress,
  deadline, // seconds,
};
const tx = await buyToken(params);
```

#### _Bulk buy ERC721 tokens_

```javascript
import {
  BulkBuyOrderData,
  bulkBuyToken,
  ChainId,
  Erc,
  Erc1155SortBy,
  getActiveOrdersOfTokens,
  getErc1155Orders,
  paymentTokens,
  Token,
} from "@zentry/mavis-market-sdk";

import { getOrdersByQuantity } from "./src/services/order/getOrdersByQuantity";

const chainId = ChainId.testnet;
const wallet = createWalletClient();
const paymentTokenAddress = paymentTokens[chainId][Token.WETH].address;
const deadline = parseInt(
  `${new Date().getTime() / 1000 + 30 * 60}`
).toString(); // 30 minutes

const tokenIds = [
  {
    tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
    tokenId: "1460",
  },
  {
    tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
    tokenId: "508",
  },
];

const getActiveOrdersOfTokenParams = { chainId: ChainId.testnet, tokenIds };
const activeOrdersOfTokens = await getActiveOrdersOfTokens(
  getActiveOrdersOfTokenParams
);

const selectedOrders: BulkBuyOrderData[] = activeOrdersOfTokens.map(
  (order) => ({
    order,
    quantity: 1,
  })
);

const tokensNeedToApproveByOrders = await getTokensNeedToApproveByOrders(
  chainId,
  wallet,
  selectedOrders,
  paymentTokenAddress
);

const bulkBuyErc721TokenParams = {
  chainId,
  wallet,
  data: selectedOrders,
  selectedTokenAddress: paymentTokenAddress,
  deadline, // seconds,
  tokenType: Erc.Erc721,
  requiredAllSuccess: false,
};

const tx = await bulkBuyToken(bulkBuyErc721TokenParams);
```

#### _Bulk buy ERC1155 tokens_

```javascript
import {
  BulkBuyOrderData,
  bulkBuyToken,
  ChainId,
  Erc,
  Erc1155SortBy,
  getErc1155Orders,
  paymentTokens,
  Token,
} from "@zentry/mavis-market-sdk";

import { getOrdersByQuantity } from "./src/services/order/getOrdersByQuantity";

const chainId = ChainId.testnet;
const wallet = createWalletClient();
const paymentTokenAddress = paymentTokens[chainId][Token.WETH].address;
const quantity = 20;
const deadline = parseInt(
  `${new Date().getTime() / 1000 + 30 * 60}`
).toString(); // 30 minutes

const getErc1155OrdersParams = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  from: 0,
  size: 10,
  maker: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional,
  showInvalid: true, // Optional
  sort: Erc1155SortBy.PriceAsc, // Optional
};
const chosenErc1155Orders = await getErc1155Orders(getErc1155OrdersParams);

const selectedOrders: BulkBuyOrderData[] = getOrdersByQuantity(
  chosenErc1155Orders,
  quantity
);

const tokensNeedToApproveByOrders = await getTokensNeedToApproveByOrders(
  chainId,
  wallet,
  selectedOrders,
  paymentTokenAddress
);

const bulkBuyErc1155TokenParams = {
  chainId,
  wallet,
  data: selectedOrders,
  selectedTokenAddress: paymentTokenAddress,
  deadline, // seconds,
  tokenType: Erc.Erc1155,
  requiredAllSuccess: false,
};
const tx = await bulkBuyToken(bulkBuyErc1155TokenParams);
```

#### _Bulk buy ERC1155 tokens by criteria_

```javascript
import { parseEther } from 'ethers/lib/utils';
import {
  approveToken,
  BulkBuyOrderData,
  bulkBuyToken,
  ChainId,
  Erc,
  getOrdersByCriteria,
  GetOrdersByCriteriaParams,
  getOrdersByQuantity,
  getTokensNeedToApproveByOrders,
  ApproveTokenType,
  paymentTokens,
  getConfig
} from '@zentry/mavis-market-sdk';

const paymentTokenAddress = '0x0000000000000000000000000000000000000000';
const chainId = ChainId.testnet;
const config = getConfig(chainId);
const wallet: any = {}; // signer wallet
const deadline = Math.floor(Date.now() / 1000) + 300; // 300 seconds from now
const spenderAddress = config.contractsAddress.marketGatewayMultisend
const availableOrders = await getOrdersByCriteria({
  chainId: ChainId.testnet,
  tokenAddress: '0x2f2c1d8fc5c242d6c9fc14b9e9997f55eff2d61a',
  maxPrice: BigInt(parseUnits('10', 6).toString()), // 10 ION
  criteria: [
    {
      name: 'Item ID',
      values: ['656'],
    },
  ],
  from: 0,
  size: 10,
});

const quantity = 10;

const selectedOrders: BulkBuyOrderData[] = getOrdersByQuantity(availableOrders, quantity);

const tokensNeedToApproveByOrders = await getTokensNeedToApproveByOrders(
  chainId,
  wallet,
  selectedOrders,
  paymentTokenAddress,
  spenderAddress,
);

if (tokensNeedToApproveByOrders.length > 0) {
  //approve any token
  const approveTx = await approveToken({
    address: tokensNeedToApproveByOrders[0].address,
    chainId,
    wallet,
    tokenType: ApproveTokenType.Erc20,
    spenderAddress,
  });
}

const bulkBuyErc1155TokenParams = {
  chainId,
  wallet,
  data: selectedOrders,
  selectedTokenAddress: paymentTokenAddress,
  deadline: deadline.toString(), // seconds,
  tokenType: Erc.Erc1155,
  requiredAllSuccess: false,
};
const tx = await bulkBuyToken(bulkBuyErc1155TokenParams);

```

#### _Create order_

```javascript
import {
  ChainId,
  ApproveTokenType,
  checkIsErc721Approved,
  approveToken,
} from "@zentry/mavis-market-sdk";
import * as functions from "@zentry/mavis-market-sdk";

const wethAddress = paymentTokens[chainId][Token.WETH].address;
const tokenAddress = "0x3fe52e39c3241ee5440a57edbb553563356b770c";
const chainId = ChainId.testnet;

const wallet = createWalletClient();

// check token is approved
const isApproved = await functions.checkIsErc721Approved(
  chainId,
  account,
  tokenAddress
);

//approve token
const params = {
  wallet,
  chainId,
  address: tokenAddress,
  tokenType: ApproveTokenType.Erc721,
};

const tx = await approveToken(params);

// create order
const params = {
  wallet,
  chainId,
  tokenAddress,
  tokenId: "982",
  paymentToken: wethAddress,
  price: "1000000000000000000",
  duration: 1000000, // seconds
};
const order = await createOrder(params);
```

#### _Cancel order_

```javascript
import { ChainId, cancelOrder } from "@zentry/mavis-market-sdk";
import * as functions from "@zentry/mavis-market-sdk";

const wallet = createWalletClient();
const params = {
  wallet,
  chainId: ChainId.testnet,
  hash: "f7c91f6f72b3fc2c19efea6abf34a6e713abc67c3beab9b152fa1f591b4472c8",
};

const tx = await cancelOrder(params);
```

#### _Gift_

```javascript
import { ChainId, giftToken } from "@zentry/mavis-market-sdk";

const wallet = createWalletClient();

const params = {
  wallet,
  chainId: ChainId.testnet,
  tokenId: "982",
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  receiverAddress: "0x1ef7a5fefc14fd7f48c31cca651741549a692183",
};
const tx = await giftToken(params);
```

#### _Wrap ron, unwrap ron_

```javascript
import { ChainId, wrapRon, unwrapRon } from "@zentry/mavis-market-sdk";

// wrap RON
const wallet = createWalletClient();
const params = {
  wallet,
  chainId: ChainId.testnet,
  amount: "10",
};
const tx = await functions.wrapRon(params);

// unwrap RON
const wallet = createWalletClient();
const params = {
  wallet,
  chainId: ChainId.testnet,
  amount: "10",
};
const tx = await functions.unwrapRon(params);
```

#### Create offer

```javascript
import {
  ChainId,
  checkIsInsufficientOfferBalance,
  checkIsWRonTokenApproved,
  approveToken,
} from "@zentry/mavis-market-sdk";

const chainId = ChainId.testnet;
const account = "0xce21e5ed74935379eda4d9120c3887423f960aac";
const amount = "1000000000000000000";
const wRonAddress = wRonToken[chainId].address;

const isInsufficientOfferBalance =
  await functions.checkIsInsufficientOfferBalance(chainId, account, amount);
const isWronApproved = await checkIsWRonTokenApproved(chainId, account, amount);
if (!isWronApproved) {
  const params = {
    wallet,
    chainId,
    address: wRonAddress,
    tokenType: ApproveTokenType.WRon,
  };
  const tx = await approveToken(params);
}

// create offer
const wallet = createWalletClient();
const params = {
  wallet,
  chainId,
  tokenId: "529",
  tokenAddress: "0x3fe52e39c3241ee5440a57edbb553563356b770c",
  price: "1000000000000000000",
  duration: 10000, // seconds
};
const offer = await functions.makeOffer(params);
```

#### _Accept offer_

```javascript
import { ChainId, acceptOffer } from "@zentry/mavis-market-sdk";

const wallet = createWalletClient();
const params = {
  wallet,
  chainId: ChainId.testnet,
  hash: "1c91a5a0d8ef022344166e60e3da96ba819278fe496c4008bc0d028e8c9ab690",
};
const tx = await functions.acceptOffer(params);
```

#### _Cancel offer_

```javascript
import { ChainId, cancelOffer } from "@zentry/mavis-market-sdk";
import * as functions from "@zentry/mavis-market-sdk";

const cancelOffer = async () => {
  const wallet = createWalletClient();

  const params = {
    wallet,
    chainId: ChainId.testnet,
    hash: "1c91a5a0d8ef022344166e60e3da96ba819278fe496c4008bc0d028e8c9ab690",
  };

  const tx = await functions.cancelOffer(params);
};
```

#### _Refresh metadata_

```javascript
import { ChainId, refreshMetadata } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
};
refreshMetadata(params);
```

#### _Get my ERC1155 tokens list_

```javascript
import {
  ChainId,
  getMyErc1155TokensList,
  AuctionType,
  SortBy,
} from '@sky-mavis/mavis-market-core';

const params = {
  chainId: ChainId.testnet,
  owner: "0xe59471222b8c2b47aa2fee80026bfbf0ba3c57bb",
  tokenAddress: "0xf6fe00893eea4d47f0cba303ef518fe4ab1c9dd6",
  auctionType: AuctionType.All,
  sort: SortBy.PriceAsc,
  from: 0,
  size: 50,
};

const { total, results } = await getMyErc1155TokensList(params);
```

### Utilities functions

#### _Create wallet client_

```javascript
import { ChainId } from "@zentry/mavis-market-sdk";

const createWalletClient = () => {
  const web3Provider = new ethers.providers.Web3Provider(window.ronin.provider);
  const { signer, provider } = web3Provider;

  return {
    account: "0xce21e5ed74935379eda4d9120c3887423f960aac",
    signer,
    provider,
  };
};
```

#### _Get rate_

```javascript
import {
  ChainId,
  paymentTokens,
  Token,
  getRate,
} from "@zentry/mavis-market-sdk";

const exchangeRate = await getExchangeRate();
const ronSymbol = paymentTokens[chainId][Token.RON].symbol;

const rate = getRate(ronSymbol, exchangeRate);
```

#### _Get config_

```javascript
import { getConfig } from "@zentry/mavis-market-sdk";

const configs = getConfig(ChainId.testnet);
```

#### _Get swap config_

```javascript
import {
  ChainId,
  paymentTokens,
  Token,
  getSwapConfig,
} from "@zentry/mavis-market-sdk";

const chainId = ChainId.testnet;
const ronAddress = paymentTokens[chainId][Token.RON].address;

const swapConfig = getSwapConfig(chainId, ronAddress);
```

#### _Get payment tokens_

```javascript
import { ChainId, getPaymentTokens } from "@zentry/mavis-market-sdk";

const chainId = ChainId.testnet;

const tokens = getPaymentTokens(chainId);
```

#### _Get offer token_

```javascript
import { ChainId, wRonToken } from "@zentry/mavis-market-sdk";

const chainId = ChainId.testnet;
const offerToken = wRonToken[chainId].address;
```

#### _Get swap token data_

```javascript
import {
  ChainId,
  paymentTokens,
  Token,
  getSwapTokenData,
} from "@zentry/mavis-market-sdk";

const wethAddress = paymentTokens[chainId][Token.WETH].address;
const ronAddress = paymentTokens[chainId][Token.RON].address;

const params = {
  chainId: ChainId.testnet,
  inputTokenAddress: wethAddress,
  outputTokenAddress: ronAddress,
  amount: "1000000000000000000",
};

const {
  swappedAmount,
  maximumSent,
  liquidityProviderFee,
  liquidityProviderFeePercent,
  priceImpactPercent,
  slippageTolerance,
} = await getSwapTokenData(params);
```

#### _Get orders by quantity_

```javascript
import { getOrdersByQuantity } from "@zentry/mavis-market-sdk";

const params = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  from: 0,
  size: 10,
  maker: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional,
  showInvalid: true, // Optional
  sort: Erc1155SortBy.PriceAsc, // Optional
};
const quantity = 50;
const orders = await getErc1155Orders(params);
const ordersByQuantity = getOrdersByQuantity(orders, quantity);
```

#### _Get orders total price_

```javascript
import {
  BulkBuyOrderData,
  ChainId,
  Erc1155SortBy,
  getErc1155Orders,
  getOrdersByQuantity,
  getOrdersTotalPrice,
  paymentTokens,
  Token,
} from "@zentry/mavis-market-sdk";

const chainId = ChainId.testnet;
const wallet = createWalletClient();
const selectedToken = paymentTokens[chainId][Token.RON];
const quantity = 20;
const getErc1155OrdersParams = {
  chainId: ChainId.testnet,
  tokenAddress: "0xb987afb62f67a317b5ddbc05c4ddba528a5dbd09",
  tokenId: "5",
  from: 0,
  size: 10,
  maker: "0xce21e5ed74935379eda4d9120c3887423f960aac", // Optional,
  showInvalid: true, // Optional
  sort: Erc1155SortBy.PriceAsc, // Optional
};
const chosenErc1155Orders = await getErc1155Orders(getErc1155OrdersParams);
const selectedOrders: BulkBuyOrderData[] = getOrdersByQuantity(
  chosenErc1155Orders,
  quantity
);
const { totalPrice, totalPriceOfEachOrder } = await getOrdersTotalPrice({
  chainId,
  wallet,
  data: selectedOrders,
  token: selectedToken,
});
```

#### _Convert amount to usd_

```javascript
import {
  ChainId,
  paymentTokens,
  Token,
  getExchangeRate,
  convertAmountToUsd,
} from "@zentry/mavis-market-sdk";
import * as functions from "@zentry/mavis-market-sdk";

const amount = "1000000000000000000";
const ronSymbol = paymentTokens[chainId][Token.RON].symbol;

const exchangeRate = await getExchangeRate(ChainId.testnet);

const usdPrice = convertAmountToUsd(amount, ronSymbol, exchangeRate);
```
