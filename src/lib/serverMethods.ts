import Env from "@/config/env";
import { headers } from "next/headers";

export async function getPosts() {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/post`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUserPosts() {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/user/post`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUser(id: number) {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/user/${id}`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUserComments() {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/user/comment`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUserNotifs() {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/user/notifications`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function exploreUsers(query: string) {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/explore?query=${query}`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

export async function getUsers() {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/user`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}

//individual post
export async function getPost(id: number) {
  const defaultHeaders = headers();
  const customHeaders = new Headers(defaultHeaders);
  const res = await fetch(`${Env.APP_URL}/api/post/${id}`, {
    cache: "no-cache",
    headers: customHeaders,
  });
  if (!res.ok) {
    throw new Error(`Error fetching`);
  }
  const response = await res.json();
  return response?.data;
}
