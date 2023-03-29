import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from 'sanity/desk';

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
        { schemaType }
    ) => {
    if (schemaType === 'post') {
        return S.document().views([
            S.view.form(),

            S.view
                .component(Iframe)
                .options({
                    // Required: Accepts an async function
                    // OR a string
                    url: `${
                        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                    }/api/preview-blog-list`,
                    // optionalL Set the default size
                    defaultSize: `desktop`, //default desktop
                    // Optional: Add a reload button, or rleoad on new document revisions
                    reload: {
                        button: true, // Default 'undefined'
                    },
                    // optional: Pass attributes to the underlying ifram element:
                    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
                    attributes: {},
                })
                .title("Preview Blog List"),
            // S.view
            //     .component(Iframe)
            //     .options({
            //         // Required: Accepts an async function
            //         // OR a string
            //         url: `${
            //             process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
            //         }/api/preview-blog-post`,
            //         // optionalL Set the default size
            //         defaultSize: `desktop`, //default desktop
            //         // Optional: Add a reload button, or rleoad on new document revisions
            //         reload: {
            //             button: true, // Default 'undefined'
            //         },
            //         // optional: Pass attributes to the underlying ifram element:
            //         // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
            //         attributes: {},
            //     })
            //     .title("Preview Blog Post")
        ]);
    }
}