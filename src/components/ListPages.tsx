import { createClient } from "@/prismicio";
import Link from "next/link";
import styles from "./list.module.scss"


export default async function ListPages({type} : {type: "rannsoknir" | "sigga" | "skipulagsradgjof"}) {
	const client = createClient();
	const allPosts = await client.getAllByType(type);
	return <div>
	  {allPosts && <ul className={styles.card}>{allPosts.map((stak,nr) => <li key={nr}><Link href={stak.url || '/'}>{stak.uid}</Link></li>)}</ul>}
	</div>;
  }