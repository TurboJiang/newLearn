function generateHashtag(str) {
    if (str === '' || str.length > 140) { return false; }
    return '#'+str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(generateHashtag('lemon tree'));