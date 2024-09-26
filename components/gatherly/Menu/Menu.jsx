import Link from "next/link";
import Styles from './Menu.module.css';

function Menu() {
    return (
        <div className={Styles.container}>
            <Link href={"/protected/profile"} className={Styles.link}>Profile</Link>
            <Link href={"/protected/chat"} className={Styles.link}>Chat</Link>
        </div>
    )
}

export default Menu; 
