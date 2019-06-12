const a = null;
const b = undefined;

const girl = {
    get whenMarry() {
        happiness--;
    },
    get happiness() {
        return happiness;
    }
};

console.log(a === void 0);
console.log(b === void null);