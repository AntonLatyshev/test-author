import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header";
import carousel from "./carousel";

$(() => {
  header();
  carousel();
});
