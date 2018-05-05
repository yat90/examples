import { Control, NodeEditor } from 'd3-node-editor';
import * as template from './input-control.template.html';

export class InputControl extends Control {

  el: HTMLInputElement;

  constructor(private editor: () => NodeEditor) {
    super(<any>template);
  }

  handler = (el: HTMLInputElement) => {
    this.el = el;
    el.value = this.getData('num') || 1;

    el.addEventListener('input', () => {
      this.update();
      this.editor().eventListener.trigger('change');
    });
    el.addEventListener('mousedown', function (e) {
      e.stopPropagation();
    });
    // prevent node movement when selecting text in the input field
    this.update();
  }

  update() {
    this.putData('num', parseFloat(this.el.value));
  }
}