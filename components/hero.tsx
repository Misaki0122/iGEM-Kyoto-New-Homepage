import styles from 'src/styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }:
  {title:any; subtitle:any; imageOn:any;})
  {
    return (
        <div>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {imageOn && <figure> [画像] </figure>}
        </div>
    )
  }