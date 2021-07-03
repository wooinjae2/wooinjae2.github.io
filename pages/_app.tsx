/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/prism.css';
import Layout from '../components/Layout';

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
  console.log('layout render');

  /**
   * {
        name: 'programming',
        children: [
          { name: 'test', link: '1' },
          { name: 'ab', link: '2' },
          { name: 'ac' },
          { name: 'ad' },
        ],
      },
   */
  useEffect(() => {
    setMenuList([
      {
        name: 'TIL',
        children: [
          { name: '20210619', link: '20210619' },
          { name: '20210620', link: '20210620' },
          { name: '20210624', link: '20210624' },
          { name: '20210626', link: '20210626' },
          { name: '20210627', link: '20210627' },
          { name: '20210628', link: '20210628' },
          { name: '20210629', link: '20210629' },
        ],
      },
      // {
      //   name: 'Test',
      // },
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
