/* eslint-disable @typescript-eslint/no-explicit-any */
import {createClient} from "next-sanity";

import {apiVersion, dataset, projectId} from "@/sanity/lib/api";
import {token} from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  perspective: "published",
  stega: {
    studioUrl: "/studio",
    filter: (props: any) => {
      if (props.sourcePath.at(-1) === "title") {
        return true;
      }

      return props.filterDefault(props);
    },
  },
});
