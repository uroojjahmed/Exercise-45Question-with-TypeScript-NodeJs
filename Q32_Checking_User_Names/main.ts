let  current_users:string[] =  ["Ali" , "tom" ,"Hina" ,"TaHa" , "sultan" ,"Yumna"];
let new_users: string[] = ["Zayan","taha", "Minhal" ,"yumna" ,"Shareq"];

new_users.forEach(new_names => {
    if (current_users.some(current_names => current_names.toLowerCase()
    === new_names.toLowerCase())){
    console.log(`The user name ${new_names} alrady taken!will need to enter a new user name.`);
}
else{
    console.log(`The user name ${new_names} is available.`);
}
});