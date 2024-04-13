import { GetStaticPropsContext, GetStaticPropsResult, Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";

// import styles from "./home.module.scss"


export default async function Page() {
  const client = createClient();
  const allPosts = await client.getAllByType("rannsoknir",);
  console.log(allPosts)
  return <div>
	{allPosts && <ul>{allPosts.map((stak,nr) => <li key={nr}><Link href={stak.href}>{stak.id}</Link></li>)}</ul>}
  </div>;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
  