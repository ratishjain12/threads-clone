"use client";

import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ExploreSearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    router.replace(`/explore?query=${query}`);
  };
  return (
    <div className="mt-5">
      <form onSubmit={submit}>
        <Input
          className="w-full rounded-xl outline-none h-14 p-3 focus-visible:ring-transparent bg-muted"
          placeholder="Search users with their name or username.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
export default ExploreSearchBar;
