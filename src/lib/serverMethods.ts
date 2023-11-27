import Env from "@/config/env";
import { headers } from "next/headers";

export async function getPosts() {
  const res = await fetch(`${Env.APP_URL}/api/post`, {
    cache: "no-cache",
    headers: headers(),
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUserPosts() {
  const res = await fetch(`${Env.APP_URL}/api/user/post`, {
    cache: "no-cache",
    headers: headers(),
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUsers() {
  const res = await fetch(`${Env.APP_URL}/api/user`, {
    cache: "no-cache",
    headers: headers(),
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}
