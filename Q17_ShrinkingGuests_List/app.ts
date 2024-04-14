let guest_list : string [] = ['huma','sana','abdullah','rehan','maliha','ali'];
// for(let i=0; i<guest_list.length; i++)
//     {
//         console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all to the dinner today night.\n\nThank you \n\n')
// }
let not_presntguest  :string = 'huma';
let new_presntguest  :string = 'Shahrukh Khan';
guest_list[0] = new_presntguest ;
// for(let i=0; i<guest_list.length; i++)
//     {
//     console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all on dinner today night.\n\nThank you \n\n') 
// }
console.log(`Ms. ${not_presntguest} is not coming to the dinner.` );
console.log('Good News! I find a Big table ,So im inveiting more 3 Guests for dinner .')
guest_list.unshift('Sir Kamran Tessori');
guest_list.splice(2 , 0 , 'Sir Zia Khan');
guest_list.push('Imran Khan');
for(let i=0; i<guest_list.length; i++)
 {
    console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all on dinner today night.\n\nThank you \n\n')
}
 console.log ('\nSorry i can not arrange a big table, only Two peoples will be invited for dinner');
 while(guest_list.length > 2){
   let remove_guest =  guest_list.pop()
   console.log(`Sorry Dear Sir/Madam. ${remove_guest}, you are not invited for Dinner`);
 }
 for(let i=0; i<guest_list.length; i++)
 {
    console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nYou are still invited for today Dinner. \n\nThank You!\n\n')
}
guest_list.splice(0 , 2);
console.log(guest_list);