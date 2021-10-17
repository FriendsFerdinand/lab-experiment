import { useCallback } from "react";
import { useAtom } from "jotai";
import { userStxAddressesAtom, useTransactionPopup } from "micro-stacks/react";
import { useAuth } from "micro-stacks/react";
import { LOADING_KEYS } from "../store/loading";
import { loadingAtom } from "../store/loading";
import {
  accountAddressAtom,
  currentGuineaContractState,
} from "../store/network-state";
import { MINT_FUNCTION } from "../utils/constants";
import {
  createAssetInfo,
  createContractPrincipal,
  createNonFungiblePostCondition,
  createSTXPostCondition,
  FungibleConditionCode,
  NonFungibleConditionCode,
} from "micro-stacks/transactions";
import { bufferCVFromString } from "micro-stacks/clarity";

export function useHandleMint() {
  const [address] = useAtom(accountAddressAtom);
  const [guineaContract] = useAtom(currentGuineaContractState);
  const [contractAddress, contractName] = guineaContract.split(".");
  const [isWalletPopup, setIsWalletPopup] = useAtom(
    loadingAtom(LOADING_KEYS.WALLETPOPUP)
  );
  const { handleContractCall } = useTransactionPopup();
  console.log(address);

  const onFinish = useCallback(() => {
    void setIsWalletPopup(false);
  }, [setIsWalletPopup]);

  const onCancel = useCallback(() => {
    void setIsWalletPopup(false);
  }, [setIsWalletPopup]);

  return useCallback(() => {
    void setIsWalletPopup(true);
    void handleContractCall({
      contractAddress,
      contractName,
      functionName: MINT_FUNCTION,
      functionArgs: [],
      postConditions: [
        createSTXPostCondition(
          address as string,
          FungibleConditionCode.LessEqual,
          50
        ),
        createNonFungiblePostCondition(
          createContractPrincipal(contractAddress, contractName),
          NonFungibleConditionCode.Owns,
          createAssetInfo(contractAddress, contractName, "random-nft"),
          bufferCVFromString("random-nft")
        ),
      ],
      onFinish,
      onCancel,
    });
  }, [
    setIsWalletPopup,
    handleContractCall,
    contractAddress,
    contractName,
    address,
    onFinish,
    onCancel,
  ]);
}
