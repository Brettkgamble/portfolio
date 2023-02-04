import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import {media, mediaAssetSource} from 'sanity-plugin-media'

export default defineConfig({
  title: "Brett Gamble Portfolio",
  projectId: "52vufthe",
  dataset: "production",
  plugins: [deskTool(), visionTool(), media()],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
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
});