/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import type { AppProps /* , AppContext */ } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";

interface child {
  name: string;
  link?: string;
}

interface Menu {
  name: string;
  children?: Array<child>;
  active?: boolean;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [menuList, setMenuList] = useState<Menu[]>([]);
  console.log("layout render");
  useEffect(() => {
    setMenuList([
      {
        name: "programming",
        children: [
          { name: "test", link: "1" },
          { name: "ab", link: "2" },
          { name: "ac" },
          { name: "ad" },
        ],
      },
      {
        name: "TIL",
        children: [
          { name: "b" },
          { name: "bb" },
          { name: "bc" },
          { name: "bd" },
        ],
      },
      {
        name: "메뉴3",
      },
    ]);
  }, []);

  const handleMenuClick = (clickIdx: number) => {
    console.log(clickIdx);
    const newMenuList = menuList.map((menu, idx) => {
      if (idx === clickIdx) {
        return menu.active
          ? { name: menu.name, children: menu.children, active: false }
          : {
              name: menu.name,
              children: menu.children ? [...menu.children] : [],
              active: true,
            };
      }
      return {
        name: menu.name,
        children: menu.children ? [...menu.children] : [],
        active: false,
      };
    });

    setMenuList(newMenuList);
  };

  return (
    <Layout handleMenuClick={handleMenuClick} menulist={menuList}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
