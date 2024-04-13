import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./TextS.module.scss"

/**
 * Props for `TextS`.
 */
export type TextSProps = SliceComponentProps<Content.TextSSlice>;

/**
 * Component for "TextS" Slices.
 */
const TextS = ({ slice }: TextSProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     {slice.items.length > 0 ? 
		(<div className={styles.card}>
			{slice.items.map((item,nr) => 
				<div key={nr}>
					<PrismicRichText field={item.teksti} />
					<PrismicNextImage field={item.mynd} />
					{/* <div dangerouslySetInnerHTML={{ __html: item.embed.html }} /> */}
					<PrismicNextLink field={item.meida}>Link</PrismicNextLink>
				</div>
			)}
		</div> 
) : ''}
    </section>
  );
};

export default TextS;
