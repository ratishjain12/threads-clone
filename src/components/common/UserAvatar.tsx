import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { twMerge } from "tailwind-merge";

const UserAvatar = ({
  image,
  name,
  style,
  textStyle,
}: {
  image?: string;
  name: string;
  style?: string;
  textStyle?: string;
}) => {
  return (
    <Avatar className={twMerge("", style)}>
      <AvatarImage src={image} />
      <AvatarFallback className={textStyle}>
        {name[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
