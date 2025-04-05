import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";

import SettingSection from "./SettingSection";

const ACCS_DATA = [
  {
    id: 1,
    name: "Google",
    connected: true,
    icon: "/google.png",
  },
  {
    id: 2,
    name: "Facebook",
    connected: false,
    icon: "/facebook.svg",
  },
  {
    id: 3,
    name: "Twitter",
    connected: true,
    icon: "/x.png",
  },
];

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(ACCS_DATA);

  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((acc) => (
        <div key={acc.id} className="flex items-center justify-between py-3">
          <div className="flex gap-1">
            <img
              src={acc.icon}
              alt="Icon of social"
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{acc.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              acc.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((account) => {
                  if (account.id === acc.id) {
                    return {
                      ...account,
                      connected: !account.connected,
                    };
                  }
                  return account;
                })
              );
            }}
          >
            {acc.connected ? "Disconnect" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" />
        Add Account
      </button>
    </SettingSection>
  );
};

export default ConnectedAccounts;
