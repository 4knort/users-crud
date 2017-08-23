export function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

export function addUser(arr, obj) {
  const array = arr.slice(0);

  array.push(obj);
  return array;
}

export function deleteUser(arr, id) {
  const array = arr.filter(user => {
    if (user.id !== id) {
      return user;
    }
  });

  return array
}
