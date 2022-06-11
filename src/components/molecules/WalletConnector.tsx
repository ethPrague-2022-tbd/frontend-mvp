import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { DDMItem, DropDownMenu } from "./DropDownMenu";

export function WalletConnector() {
  const { data: account } = useAccount();
  const { connect, connectors, isConnected } = useConnect();
  const { data: ensName } = useEnsName({ address: account?.address });
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  let ddmItem: DDMItem[] = [];

  connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  // useEffect(() => {
  //   navigate(isConnected ? "/my-feed" : "");
  // }, [isConnected]);

  if (account) {
    return (
      <DropDownMenu
        items={[
          {
            label: "Settings",
            action: () => navigate("/settings"),
          },
          {
            label: "Logout",
            action: async () => {
              disconnect();
            },
          },
        ]}
        label={
          ensName
            ? `${ensName} (${
                account.address?.substring(0, 5) +
                "..." +
                account.address?.substring(account.address?.length - 3)
              })`
            : account.address?.substring(0, 8) +
              "..." +
              account.address?.substring(account.address?.length - 3)
        }
      ></DropDownMenu>
    );
  } else {
    return <DropDownMenu label="Connect Wallet" items={ddmItem}></DropDownMenu>;
  }
}
