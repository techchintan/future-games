import {ConfigContext, defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {visionTool} from "@sanity/vision";
import {apiVersion, dataset, projectId} from "./sanity/env";
import {vercelDeployTool} from "sanity-plugin-vercel-deploy";
import {orderableDocumentListDeskItem} from "@sanity/orderable-document-list";
import {media} from "sanity-plugin-media";
import {schema} from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,
  schema: schema,
  plugins: [
    deskTool({
      title: "Dashboard",
      structure: (S: any, context: ConfigContext) => {
        const client = context.getClient({apiVersion: "2021-10-21"});

        return S.list()
          .title("Dashboard")
          .items([
            orderableDocumentListDeskItem({
              type: "game",
              title: "Games",
              S,
              context,
            }) as any,
            S.divider(),
            orderableDocumentListDeskItem({
              type: "gameCategory",
              title: "Category",
              S,
              context,
            }),
          ]);
      },
    }),
    visionTool({defaultApiVersion: apiVersion}),
    vercelDeployTool(),
    media(),
  ],
});
