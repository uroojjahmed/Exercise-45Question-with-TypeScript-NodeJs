var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the location in a array.make sure the array is not in alphabetical order.
var places = ['Belgium', 'Denmark', 'Canada', 'Finland', 'Austria'];
//Print your array in its original order.
console.log('Original:' + places);
// print your array in alphabetical order without modifying the actual list.
console.log('Copy :' + __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log('Original:' + places);
//Print your array in reverse alphabetical order without changing the order f the original list.
console.log('Copy :' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('Original:' + places);
//Reverse the order of your list.print the array to show that its order has changed .
console.log('Original:' + places.reverse());
//REverse the order of your list again. print the list to show it's back to its original order.
console.log('Original:' + places.reverse());
//Sort your array so it's stored in alphabetical order.print the array to show that it's order has been changed.
console.log('Original:' + places.sort());
//sort to your change your array so it's stored in reverse alphabetical order.Print the list to show that order has changed.
console.log('Original:' + places.sort().reverse());
