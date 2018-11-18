import gpl from "graphql-tag";

export const NOTE_FRAGMENT = gpl`
fragment NoteParts on Note {
    id
    title
    content
}`;
