/* eslint-disable no-underscore-dangle */
class Cycled {
  constructor(args) {
    this.array = args;
    this._index = 0;
  }

  current() {
    return this.array[this._index];
  }

  checkNextIndex() {
    if (this._index === this.array.length - 1) this._index = 0;
    else this._index += 1;
  }

  checkPrevIndex() {
    if (this._index === 0) this._index = (this.array.length - 1);
    else this._index -= 1;
  }

  next() {
    console.log(this._index);
    this.checkNextIndex();
    console.log(this.array[this._index].value);

    return this.array[this._index];
  }

  previous() {
    this.checkPrevIndex();
    return this.array[this._index];
  }

  step(changeIndex) {
    const tempIndex = (Math.abs(this._index + changeIndex) % (this.array.length));
    this._index = tempIndex;
    return (this.array[tempIndex]);
  }

  get index() {
    return this._index;
  }

  set index(index) {
    const tempIndex = (Math.abs(this._index + index) % (this.array.length));
    this._index = tempIndex;
    return this._index;
  }

  reversed() {
    this.array = this.array.reverse();
    return {
      next: () => ({ value: this.array[0] }),
    };
  }

  indexOf(index) {
    return this.array.indexOf(index);
  }
}

export { Cycled };
