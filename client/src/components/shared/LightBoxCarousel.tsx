"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Plugins
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { StrapiImage } from "@/types/strapi";
import { processarFoto } from "@/services/strapi";

const LightBoxCarousel = ({ fotos }: { fotos: StrapiImage[] }) => {
   return (
      <Lightbox
         slides={fotos?.map((v) => {
            return { src: processarFoto(v.url), height: 900 };
         })}
         inline={{
            style: {
               width: "100%",
               maxWidth: "1000px",
               aspectRatio: "1 / 1",
               margin: "0 auto",
               height: "100%",
            },
         }}
         plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
   );
};
export default LightBoxCarousel;
