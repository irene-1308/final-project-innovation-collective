import Link from "next/link";
import Styles from "./Menu.module.css";
import { Button } from "../../ui/button.tsx";

function Menu() {
  return (
    <div className={Styles.container}>
      {/* <Link href={"/protected/profile"} className={Styles.link}>
        Profile
      </Link>
      <Link href={"/protected/chat"} className={Styles.link}>
        Chat
      </Link> */}
      <Button asChild className={Styles.button} variant={"ghost"}>
        <Link href="/protected/chat">Chat</Link>
      </Button>
      <Button asChild className={Styles.button} variant={"ghost"}>
        <Link href="/protected/profile">Profile</Link>
      </Button>
    </div>
  );
}

export default Menu;
