import gpl from "graphql-tag";

export const NOTE_FRAGMENT = gpl`
fragment NotePars on Note {
    id
    title
    content
}`;
