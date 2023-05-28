import React from "react";
import TabMenu from "../Components/tabMenu";
import RightMenuList from "../Components/rightMenuList";

const tabs = [
  {
    label: "Properties",
    content: <RightMenuList />,
  },
  {
    label: "Variables",
    content: <></>,
  },
];

export default function RightSideMenu() {
  return (
    <div>
      <TabMenu tabs={tabs} initialTab={0} />
    </div>
  );
}
