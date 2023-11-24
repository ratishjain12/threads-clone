import { Button } from "../ui/button";
import { X } from "lucide-react";

const ImagePreviewCard = ({
  image,
  Callback,
}: {
  image: string;
  Callback: () => void;
}) => {
  return (
    <div
      className="w-full h-72 bg-cover mb-2"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-right mr-2">
        <Button size="icon" className="mt-2" onClick={Callback}>
          <X />
        </Button>
      </div>
    </div>
  );
};
export default ImagePreviewCard;
