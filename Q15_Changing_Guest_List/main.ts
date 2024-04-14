let guest_list : string [] = ['huma','sana','abdullah','rehan','maliha','ali'];
for(let i=0; i<guest_list.length; i++)
    {
        console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\nI invite you all to the dinner today night.\n\nThank you \n\n')
     
}
let not_presntguest  :string = 'huma';
let new_presntguest  :string = 'Shahrukh Khan';
guest_list[0] = new_presntguest ;
for(let i=0; i<guest_list.length; i++)
    {
    console.log('Dear Sir/Madam ' + guest_list[i] + ' ,\n\ni invite you all on dinner today night.\n\nThank you \n\n')
     
}
console.log(`Ms. ${not_presntguest} is not coming to the dinner.`)
