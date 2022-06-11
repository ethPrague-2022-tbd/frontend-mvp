import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { DDMItem, DropDownMenu } from "./DropDownMenu";

export function WalletConnector() {
  const { data: account } = useAccount();
  const { connect, connectors } = useConnect();
  const { data: ensName } = useEnsName({ address: account?.address });
  const { disconnect } = useDisconnect();

  let ddmItem: DDMItem[] = [];

  connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  if (account) {
    return (
      <DropDownMenu
        items={[
          {
            label: "logout",
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
            : account.address?.substring(0, 5) +
              "..." +
              account.address?.substring(account.address?.length - 3)
        }
      ></DropDownMenu>
    );
  } else {
    return <DropDownMenu label="Connect Wallet" items={ddmItem}></DropDownMenu>;
  }
}
