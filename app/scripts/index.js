import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header";
import carousel from "./carousel";
import plansBox from "./plansBox";
import anchor from "./anchor";
import navMenu from "./navMenu";
import validateForm from "./validateForm";

$(() => {
  header();
  carousel();
  plansBox();
  anchor();
  navMenu();
  validateForm();
});
