import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// get a preconfigured url-builder from your sanity client
const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export default urlFor;