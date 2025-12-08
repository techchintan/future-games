import {createClient} from "next-sanity";
import {projectId, dataset, apiVersion} from "@/sanity/lib/api";
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});
