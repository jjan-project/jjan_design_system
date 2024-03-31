import { TextAreaProps } from "@/components/text-area";

type FormTextAreaOmitProps = "name";

type FormTextAreaProps = { name: string } & Omit<
  TextAreaProps,
  FormTextAreaOmitProps
>;

export type { FormTextAreaProps };
