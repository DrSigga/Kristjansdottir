import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import styles from "./home.module.scss"

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return <div className={styles.container}>
	<SliceZone slices={page.data.slices} components={components} />
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
