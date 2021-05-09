import Link from "next/link";
import styles from "./leftPanel.module.css";


import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function leftPanel(props) {
  console.log("props.menulist", props.menulist);

  const handleMenuClick = (idx) => {
    props.handleMenuClick(idx);
  };

  const getExpandIcon = (item) => {
    if (!item.children) {
      return null;
    } else if (item.children.length === 0) {
      return null;
    } else {
      return item.active ? (
        <ExpandLessIcon style={{ fontSize:'15' }} classes={styles.padding} />
      ) : (
        <ExpandMoreIcon style={{ fontSize:'15' }}/>
      );
    }
  };

  const handleClickLinkIcon =  (location) =>{

    window.open(location);

  }

  return (
    <nav className={styles.nav}>
    
      <div className={styles.desc}>
          <div className={styles.circle}></div>
        <h2>Injae Woo</h2>
        <div>
          <a onClick={()=>{handleClickLinkIcon('https://github.com/wooinjae2')}}> <GitHubIcon style={{fontSize: '20'}}/></a>
        </div>
      </div>

      <div className={styles.menuList}>
        {props.menulist
          ? props.menulist.map((item, idx) => {
              return (
                <div key={item.name} className={styles.menuItem}>
                  <div
                    onClick={() => {
                      handleMenuClick(idx);
                    }}
                  >
                    {item.name}
                    {getExpandIcon(item)}
                  </div>
                  <div
                    className={`${styles.transition} ${
                      item.active ? styles.active : ""
                    } `}
                  >
                    <ul>
                      {item.children
                        ? item.children.map((child) => {
                            return (
                              <li key={child.name}>
                                <Link href={`/${item.name}/${child.link}`}>
                                  {child.name}
                                </Link>
                              </li>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </nav>
  );
}
