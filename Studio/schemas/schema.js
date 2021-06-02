// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import LandingPage from "./LandingPage";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import MainImage from "./MainImage";
import Carousel from "./Carousel";
import GalleryPage from "./GalleryPage";
import ContactForm from "./ContactForm";
import BeforeAfter from "./BeforeAfter";
import MetaData from "./MetaData";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    LandingPage,
    MainImage,
    Carousel,
    GalleryPage,
    ContactForm,
    BeforeAfter,
    MetaData,
  ]),
});
