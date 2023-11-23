import { bytesToMB } from "@/lib/utils";

export function imageValidator(
  type: string | undefined,
  size: number | undefined
): string | null {
  let flag: string | null = null;
  if (type) {
    const getImgExt = type;
    const imgExtType: Array<string> = ["svg", "png", "jpeg", "jpg", "gif"];
    if (!imgExtType.includes(getImgExt[1])) {
      flag = "image must be .png , .jpg , .gif, .jpeg, .svg type";
    } else {
      flag = null;
    }
  }

  if (size) {
    const ImageInMB = bytesToMB(size);
    if (ImageInMB > 2) {
      flag = "Image size should be less than 2 MB";
    } else {
      flag = null;
    }
  }

  return flag;
}
