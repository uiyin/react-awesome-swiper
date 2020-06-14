export default function createHash(hashLength = 16) {
    if (typeof (Number(hashLength)) !== 'number') { hashLength = 16; }
    const ar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const hs = [];
    const hl = Number(hashLength);
    const al = ar.length;
    for (var i = 0; i < hl; i++) {
        hs.push(ar[Math.floor(Math.random() * al)]);
    }

    return hs.join('');
}