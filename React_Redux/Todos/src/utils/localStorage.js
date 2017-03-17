export function storageGetItem(itemName) {
    try {
        return JSON.parse(localStorage.getItem(itemName) || '[]')
    } catch (e) {
        return [];
    }
}

export function storageSetItem(itemName, data) {
    localStorage.setItem(itemName, JSON.stringify(data));
}
