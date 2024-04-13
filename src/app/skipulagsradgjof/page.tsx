import { GetStaticPropsContext, GetStaticPropsResult, Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";
import ListPages from "@/components/ListPages";

// import styles from "./home.module.scss"


export default async function Page() {
  return <ListPages type="skipulagsradgjof"/>
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
  