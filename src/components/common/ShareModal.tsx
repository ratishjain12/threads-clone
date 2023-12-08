"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  WhatsappIcon,
  WhatsappShareButton,
  InstagramIcon,
  InstapaperShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { ClipboardCheck, Copy, SendHorizonal } from "lucide-react";
import { useState } from "react";
const ShareModal = ({ url }: { url: string }) => {
  const [copystate, setCopyState] = useState<boolean>(false);
  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SendHorizonal width={20} height={20} className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Share</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex mb-2 gap-2">
              <WhatsappShareButton url={url}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <InstapaperShareButton url={url}>
                <InstagramIcon size={32} round />
              </InstapaperShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div className="flex rounded-md justify-between  p-2 border-2 border-muted">
              <strong>{url}</strong>
              {copystate ? (
                <ClipboardCheck height={20} width={20} />
              ) : (
                <Copy className="cursor-pointer" onClick={() => copyUrl(url)} />
              )}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ShareModal;
