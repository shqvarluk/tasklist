export class CircularArray<T> {
    private readonly collection: Array<T>;
    private pointer: number;

    constructor(initialArray: Array<T> = []) {
        this.collection = initialArray;
        this.pointer = 0;
    }

    private recalculateIndex(index: number | undefined = undefined) {
        this.pointer = ((index ?? this.pointer) + 1) % this.collection.length;
    }

    public next(): T {
        const result = this.collection[this.pointer];
        this.recalculateIndex();

        return result;
    }

    public setPointer(index: number) {
        this.recalculateIndex(index);
    }
}
