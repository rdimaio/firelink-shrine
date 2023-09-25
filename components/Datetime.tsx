export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
      <span className={`font-mono items-center space-x-2 opacity-80 ${className} inline ${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toISOString().split("T")[0];

  /*
  const time = myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  */

  return <>{date}</>;
};
