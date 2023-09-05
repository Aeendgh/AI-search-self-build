const ul = document.querySelector("ul div"),
inputbox = document.querySelector("input");
const txtinput = document.querySelector("in")
let tags = [];
 

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove(),);  
    tags.forEach(tag =>{
        let Litag = `<li class="defualt">${tag}<img src="assets/images/xIcon.svg" onclick="remove(this, '${tag}')" alt=""></li>`;
        ul.insertAdjacentHTML("afterbegin", Litag);
    });
}


function remove(element,tag){
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0,index),...tags.slice(index+1)];
    element.parentElement.remove();

    console.log(tags)
}
function addList(e){
    if(e.key == "Enter"){

        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            tag.split('-').forEach(tag => {
                tags.push(tag);
                console.log(tags);
                createTag();
            });
        }

    }
    
}
inputbox.addEventListener('keyup' , addList);


// // Create a function to add text to an array after each enter
// function addTextToArray(input, array) {
//     // Split the input text into an array of lines
//     const tags = input.split();
//     // Loop through each line of text
//     lines.forEach((line) => {
//       // Add the line of text to the array
//       array.push(line);
//     });
//   }
//   // Example usage
//   const input = "This is some text.\nThis is another line of text.";
//   const array = [];
//   addTextToArray(input, array);
//   console.log(array);
//   // Output: ["This is some text.", "This is another line of text."]
  