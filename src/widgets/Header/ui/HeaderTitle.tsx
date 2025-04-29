import { format } from "date-fns";

interface HeaderTitleProps {
  title: string;
  description?: string;
}

export const HeaderTitle = ({ title, description }: HeaderTitleProps) => {
  return (
    <div>
      <h1 className="font-mulish text-2xl leading-8 font-bold pb-2">{title}</h1>
      <p className="font-mulish text-sm leading-5 text-gray-500">{format(new Date(), "MMMM d, yyyy")}</p>
      {description && (
        <p className="font-mulish text-sm leading-5 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
};
