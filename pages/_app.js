import { useState, useEffect } from "react";
import '../styles/globals.css'
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  const [menuList, setMenuList] = useState([]);
  console.log('layout render');
  useEffect(() => {
    setMenuList([
      {
        name: "programming",
        children: [
          { name: "test", link: 1 },
          { name: "ab", link: 2 },
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

  const handleMenuClick = (clickIdx) => {
    console.log(clickIdx);
    const newMenuList = menuList.map((menu, idx) => {
      if (idx === clickIdx) {
        return menu.active
          ? { name: menu.name, children: [...menu.children], active: false }
          : {
              name: menu.name,
              children: menu.children ? [...menu.children] : [],
              active: true,
            };
      } else {
        return {
          name: menu.name,
          children: menu.children ? [...menu.children] : [],
          active: false,
        };
      }
    });
    
    setMenuList(newMenuList);
  };
  
  return <Layout handleMenuClick={handleMenuClick} menulist={menuList}>
    <Component {...pageProps} />
    
    </Layout>
}

export default MyApp
