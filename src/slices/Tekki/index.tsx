import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Tekki`.
 */
export type TekkiProps = SliceComponentProps<Content.TekkiSlice>;

/**
 * Component for "Tekki" Slices.
 */
const Tekki = ({ slice }: TekkiProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for tekki (variation: {slice.variation}) Slices
    </section>
  );
};

export default Tekki;
