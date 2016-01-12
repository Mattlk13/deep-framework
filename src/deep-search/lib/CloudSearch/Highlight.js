/**
 * Created by AlexanderC on 1/12/16.
 */

'use strict';

import {NativeParameter} from './NativeParameter';
import {Item} from './Highlight/Item';

export class Highlight extends NativeParameter {
  /**
   * @param {Item|*} highlights
   */
  constructor(...highlights) {
    this._items = highlights;
  }

  /**
   * @param {String} field
   * @param {Function} closure
   * @returns {Highlight}
   *
   * @example highlight.add('year', (highlight) => {
   *  highlight.maxOccurrences(2).plain();
   * })
   */
  add(field, closure) {
    closure(new Item(field));

    return this;
  }

  /**
   * @returns {Item[]}
   */
  items() {
    return this._items;
  }

  /**
   * @returns {String}
   */
  export() {
    let highlights = {};

    this._items.forEach((highlight) => {
      highlights[highlight.field] = highlight.options;
    });

    return JSON.stringify(highlights);
  }
}
