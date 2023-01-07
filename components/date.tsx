import { parseISO, format } from "date-fns";
import { hu } from "date-fns/locale";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-[#343a40] text-sm uppercase font-bold text-opacity-70"
    >
      {format(date, "yyyy.	LLLL d", { locale: hu })}
    </time>
  );
}
