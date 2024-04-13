import { Content, createClient } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./list.module.scss"

/**
 * Props for `List`.
 */
export type ListProps = SliceComponentProps<Content.ListSlice>;

/**
 * Component for "List" Slices.
 */
const List = async ({ slice }: ListProps): Promise<JSX.Element> => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
	  className={styles.card}
    >
		<PrismicRichText field={slice.primary.h1label} />
		{slice.items.length > 0 ? 
		(<ul>
			{slice.items.map((item,nr) => <li key={nr}>
				<PrismicNextLink field={item.siggahl}>
					<PrismicRichText field={item.titill} />
					<></>
</PrismicNextLink>
			</li>)}
		</ul> 
) : ''}
</section>
  );
};

export default List;
