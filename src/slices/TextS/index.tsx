import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for text_s (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextS;
