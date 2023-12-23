console.log("I'm ready");
// Iteration 1: Names and Input
let hacker1="Rahisa";
console.log("The driver's name is " +hacker1);
let hacker2="Neroly";
console.log("The navigator's name is "+ hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has" + "${hacker1.length}"+"characters"); 
}else if(hacker2.length>hacker1.length){
  console.log("The navigator has the longest name, it has" + "${hacker2.length}"+"characters");
}else if(hacker2.length===hacker1.length){
  console.log("Wow, you both have equally long names," + hacker1.length +" characters!");
}
// Iteration 3: Loops
for (let i=0;i<hacker1.length;i++){
   console.log(hacker1[i].toUpperCase()+" ");
  
}

for(let i=hacker2.length-1;i>=0;i--){
  console.log(hacker2[i] +" ");
}
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
let paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet risus nisl. Aliquam elementum, massa ac luctus congue, eros leo interdum ligula, faucibus lacinia turpis purus in lectus. Morbi ultricies sagittis egestas. Suspendisse suscipit velit id odio malesuada, ac sollicitudin ante pulvinar. Nunc volutpat mauris posuere, commodo sapien in, dictum leo. Suspendisse pellentesque sodales porta. In feugiat rutrum elit. Phasellus egestas iaculis nisl, sed placerat magna lobortis in. Phasellus eros augue, scelerisque vel gravida convallis, sollicitudin sit amet nisl. Donec varius, augue eu tristique maximus, quam eros tincidunt ante, nec pretium diam urna sed ligula. Maecenas laoreet nunc mollis, tristique orci et, pulvinar nisl. Mauris rutrum quam nec urna facilisis, non condimentum lectus pulvinar. Integer in interdum dolor.Sed lacinia molestie porttitor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis arcu magna, vitae varius arcu pharetra ac. Aenean fringilla vitae quam in varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula tellus, rutrum nec augue sodales, convallis laoreet magna. Nulla condimentum purus massa, id pulvinar odio aliquet quis. Ut dui nisi, fermentum vitae commodo eget, scelerisque non nunc. Cras pulvinar porttitor massa, ut porttitor est. Duis leo enim, lobortis eget nisi vehicula, fermentum bibendum felis. Nulla augue nisi, eleifend lobortis diam tristique, tincidunt placerat magna.Duis commodo metus ante, convallis suscipit ligula dignissim in. Quisque ut luctus erat, quis suscipit mi. Sed pellentesque luctus maximus. Nullam turpis turpis, feugiat et orci in, mattis posuere enim. Duis quis rutrum lectus, sit amet eleifend leo. Fusce augue enim, auctor eu semper nec, vehicula vel dui. Duis elementum mauris suscipit est elementum egestas. Nunc mollis massa at elit maximus ornare. Aenean tempus, quam finibus efficitur tempor, ipsum est eleifend leo, eu aliquet nisl dolor at risus. Aenean ut ullamcorper dolor. Sed rutrum ornare volutpat. Nunc in consequat turpis.Proin dictum est eget velit vehicula, quis ultricies libero semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sit amet euismod arcu. Proin a justo at sem vestibulum cursus. Duis et imperdiet quam. Maecenas facilisis lacus id nisl lobortis, eget sodales massa consectetur. Vivamus eu suscipit nisl. Nam sit amet porttitor ante.Phasellus ultricies augue convallis bibendum blandit. Phasellus eu ullamcorper lacus. Aliquam cursus eleifend molestie. Proin accumsan convallis felis eu tempor. Cras congue purus egestas eros dictum, ut fermentum est dictum. Vivamus aliquet nibh eget nulla lacinia, eget eleifend ligula commodo. Pellentesque augue orci, lacinia non tincidunt eget, pharetra id lectus. Mauris semper laoreet rhoncus. Morbi lobortis ipsum in mauris sodales, nec eleifend tellus condimentum. Nunc aliquam venenatis sagittis. Ut hendrerit neque imperdiet aliquam placerat. Nullam eu lacus ac justo ullamcorper cursus. Cras vel viverra tellus, id gravida libero. Phasellus vitae felis quis massa bibendum scelerisque. Sed velit risus, eleifend vel ultrices id, consectetur commodo magna. Sed in egestas massa.";
console.log(paragraph.length);
console.log(paragraph.indexOf("et"));

