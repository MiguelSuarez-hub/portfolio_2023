import { createClient } from "next-sanity";

const projectId = 'xh2y8t0e';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});