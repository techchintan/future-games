import {type SchemaTypeDefinition} from "sanity";
import faq from "./faq";
import gameCategory from "./game-categories";
import game from "./game";
import meta from "./meta";
import thumbnail from "./thumbnail";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [faq, gameCategory, game, meta, thumbnail],
};
