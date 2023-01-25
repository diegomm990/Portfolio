import { DARK_MODE, LIGTH_MODE } from "./actionNames";

export function turnDark(){
    return {
        type: DARK_MODE
      };
}
export function turnLigth(){
  return {
      type: LIGTH_MODE
    };
}