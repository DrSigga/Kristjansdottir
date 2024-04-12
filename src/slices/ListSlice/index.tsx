import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ListSlice`.
 */
export type ListSliceProps = SliceComponentProps<Content.ListSliceSlice>;

/**
 * Component for "ListSlice" Slices.
 */
const ListSlice = ({ slice }: ListSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for list_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default ListSlice;
