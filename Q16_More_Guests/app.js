var guest_list = ['huma', 'sana', 'abdullah', 'rehan', 'maliha', 'ali'];
// for(let i=0; i<guest_list.length; i++)
//     {
//         console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all to the dinner today night.\n\nThank you \n\n')
// }
var not_presntguest = 'huma';
var new_presntguest = 'Shahrukh Khan';
guest_list[0] = new_presntguest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all on dinner today night.\n\nThank you \n\n');
}
console.log("Ms. ".concat(not_presntguest, " is not coming to the dinner."));
console.log('Good News! I find a Big table ,So im inveiting more 3 Guests for dinner .');
guest_list.unshift('Sir Kamran Tessori');
guest_list.splice(2, 0, 'Sir Zia Khan');
guest_list.push('Imran Khan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all on dinner today night.\n\nThank you \n\n');
}
