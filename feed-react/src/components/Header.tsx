import styles from "./Header.module.scss"
import igniteLogo from "../assets/ignite-logo.svg"

const Logo: any = igniteLogo

export function Header() {
  return (
    <header className={styles.header}>
      <strong >Ignite Feed</strong>
      <img src={Logo} alt="Logitipo Ignite" />
    </header>
  )
}