import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import {media, mediaAssetSource} from 'sanity-plugin-media';
import { myTheme } from './theme';
import StudioNavbar from '../portfolio/components/navigation/StudioNavbar';
import Logo from '../portfolio/components/navigation/logo';
import { getDefaultDocumentNode} from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "portfolio",
  title: "Brett Gamble Portfolio",
  projectId, //: "52vufthe",
  dataset, // : "production",
  plugins: [deskTool({
    defaultDocumentNode:  getDefaultDocumentNode,
  }), visionTool(), media()],
  // tools: (prev) => {
  //   // 👇 Uses environment variables set by Vite in development mode
  //   if (import.meta.env.DEV) {
  //     return prev
  //   }
  //   return prev.filter((tool) => tool.name !== 'vision')
  // },
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      },
      image:{
        assetSources: () => [mediaAssetSource],
        directUploads: true,
      }

    },
  },
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme,
});