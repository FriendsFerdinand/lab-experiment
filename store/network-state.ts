import { atom } from "jotai";
import { networkAtom, userStxAddressesAtom } from "micro-stacks/react";
import { atomWithStorage } from "jotai/utils";

export interface Network {
  index: number;
  name: string;
  label: string;
  chain: string;
  url: string;
}

import {
  DEFAULT_NETWORK_LIST,
  DEFAULT_NETWORK_INDEX,
  DEFAULT_MAINNET_SERVER,
  DEFAULT_TESTNET_SERVER,
  DEFAULT_REGTEST_SERVER,
  DEFAULT_LOCALNET_SERVER,
  DEFAULT_MAINNET_EXPLORER,
  DEFAULT_TESTNET_EXPLORER,
  DEFAULT_REGTEST_EXPLORER,
  DEFAULT_LOCALNET_EXPLORER,
  DEFAULT_MAINNET_GUINEA_CONTRACT,
  DEFAULT_REGTEST_GUINEA_CONTRACT,
  DEFAULT_TESTNET_GUINEA_CONTRACT,
  DEFAULT_LOCALNET_GUINEA_CONTRACT,
  DEFAULT_LOCALNET_BITCOIN_EXPLORER,
  DEFAULT_TESTNET_BITCOIN_EXPLORER,
  DEFAULT_MAINNET_BITCOIN_EXPLORER,
} from "../utils/constants";

export const currentGuineaContractState = atom((get) => {
  const network = get(networkAtom);
  const guineaContract =
    network.getCoreApiUrl() === DEFAULT_LOCALNET_SERVER
      ? DEFAULT_LOCALNET_GUINEA_CONTRACT
      : network.getCoreApiUrl() === DEFAULT_REGTEST_SERVER
      ? DEFAULT_REGTEST_GUINEA_CONTRACT
      : network.getCoreApiUrl() === DEFAULT_TESTNET_SERVER
      ? DEFAULT_TESTNET_GUINEA_CONTRACT
      : DEFAULT_MAINNET_GUINEA_CONTRACT;
  console.log(guineaContract);
  return guineaContract;
});

export const currentStacksExplorerState = atom((get) => {
  const network = get(networkAtom);
  const defaultStacksExplorer =
    network.getCoreApiUrl() === DEFAULT_LOCALNET_SERVER
      ? DEFAULT_LOCALNET_EXPLORER
      : network.getCoreApiUrl() === DEFAULT_REGTEST_SERVER
      ? DEFAULT_REGTEST_EXPLORER
      : network.getCoreApiUrl() === DEFAULT_TESTNET_SERVER
      ? DEFAULT_TESTNET_EXPLORER
      : DEFAULT_MAINNET_EXPLORER;
  return defaultStacksExplorer;
});

export const currentBitcoinExplorerState = atom((get) => {
  const network = get(networkAtom);
  const defaultBitcoinExplorer =
    network.getCoreApiUrl() === DEFAULT_LOCALNET_SERVER
      ? DEFAULT_LOCALNET_BITCOIN_EXPLORER
      : network.getCoreApiUrl() === DEFAULT_REGTEST_SERVER
      ? ""
      : network.getCoreApiUrl() === DEFAULT_TESTNET_SERVER
      ? DEFAULT_TESTNET_BITCOIN_EXPLORER
      : DEFAULT_MAINNET_BITCOIN_EXPLORER;
  return defaultBitcoinExplorer;
});

export const currentChainState = atom((get) => {
  const network = get(networkAtom);
  const defaultChain =
    network.getCoreApiUrl() === DEFAULT_MAINNET_SERVER ? "mainnet" : "testnet";
  return defaultChain;
});

// getting mainnet or testnet address
export const accountAddressAtom = atom((get) => {
  const network = get(networkAtom);
  const defaultChain =
    network.getCoreApiUrl() === DEFAULT_MAINNET_SERVER
      ? get(userStxAddressesAtom)?.mainnet
      : get(userStxAddressesAtom)?.testnet;
  return defaultChain;
});

// defaulting to mainnet, but not sure that's operative here
export const currentNetworkAtom = atomWithStorage<Network>(
  "network",
  DEFAULT_NETWORK_LIST[DEFAULT_NETWORK_INDEX]
);
