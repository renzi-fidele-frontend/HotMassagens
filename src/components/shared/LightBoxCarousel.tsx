"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";

const LightBoxCarousel = ({ fotos }: { fotos: string[] }) => {
   const [open, setOpen] = useState(false);
   const [index, setIndex] = useState(0);

   const updateIndex = ({ index: current }: { index: number }) => setIndex(current);

   return (
      <>
         {/* Carousel */}
         <Lightbox
            index={index}
            slides={fotos.map((v) => {
               return { src: v, height:900 };
            })}
            
            plugins={[Inline]}
            on={{
               view: updateIndex,
               click: () => setOpen(true),
            }}
            carousel={{
               padding: 0,
               spacing: 0,
               imageFit: "cover",
            }}
            inline={{
               style: {
                  width: "100%",
                  maxWidth: "900px",
                  aspectRatio: "1",
                  margin: "0 auto",
               },
            }}
         />
         {/* LightBox */}
         <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={fotos.map((v) => {
               return { src: v };
            })}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
         />
      </>
   );
};
export default LightBoxCarousel;
