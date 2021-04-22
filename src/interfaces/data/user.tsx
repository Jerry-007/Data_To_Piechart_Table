import useSWR from 'swr';
import {fetcher, SERVER_URL} from "@data";

export const getUser = () => useSWR(`${SERVER_URL}/user/1`,fetcher);