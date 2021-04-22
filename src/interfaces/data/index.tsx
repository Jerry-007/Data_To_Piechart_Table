import useSWR from 'swr';

export const fetcher = (url) => fetch(url).then(res => res.json())

export const SERVER_URL = "https://6069cbf1e1c2a10017544ef0.mockapi.io";

