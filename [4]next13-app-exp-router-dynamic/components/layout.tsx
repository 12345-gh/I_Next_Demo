import Link from "next/link";
import styles from "./layout.module.scss";
import classnames from "classnames"


export type TProps = {
  params?: { slug: string };
  children: React.ReactNode;
};

interface ILayuot {
  (props: TProps & { prefix: string }): JSX.Element;
}

const arr = Array.from(Array(5), (x, index) => index + 1);

export const Layout: ILayuot = (props) => {

  return (
    <>
      <div>{props.children}</div>
      <div className={styles.centeredText}>Choose one of the dynamic routes from the suggested ones below, Red pre-generated by the generateStaticParams function:</div>
      <div className={styles.linksBox}>
        {arr.map((e) => (
          <Link key={e} href={`/${props.prefix}/${e}`} className={classnames(styles.link, { [styles.active]: e < 3 })}>
            {e}
          </Link>
        ))}
      </div>
    </>
  );
};