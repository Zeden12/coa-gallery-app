function transformString(str) {
    const length = str.length;

    function reverseString(s) {
        return s.split('').reverse().join('');
    }

    function replaceWithAscii(s) {
        return s.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        return replaceWithAscii(reverseString(str));
    } else if (length % 3 === 0) {
        return reverseString(str);
    } else if (length % 5 === 0) {
        return replaceWithAscii(str);
    } else {
        return str;
    }
}

// usage example
console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
