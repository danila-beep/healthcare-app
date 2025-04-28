interface HeaderTitleProps {
  title: string;
  date: string;
}

export const HeaderTitle = ({ title, date }: HeaderTitleProps) => {
  return (
    <div>
      <h1 className="font-mulish text-2xl leading-8 font-bold pb-2">
        {title}
      </h1>
      <p className="font-mulish text-sm leading-5 text-gray-500">
        {date}
      </p>
    </div>
  );
}; 