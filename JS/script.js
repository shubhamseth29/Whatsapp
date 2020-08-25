const chatText=document.getElementById("chat-text");
const mainChat=document.getElementById("main-chat");
var today = new Date();
var curtime = today.getHours() + ":" + today.getMinutes();
const searchInput=document.getElementById("search-input");
const chatContainer=document.getElementById("chat-container");
const chatList=document.getElementsByClassName("chat-list");

//CODE TO ADD CHAT MESSAGE TO SCREEN FROM CHAT BOX
chatText.addEventListener("keyup",(e)=>
{
    if(e.keyCode===13)
    {   
        e.preventDefault();
        if(chatText.value==='')
        {
            alert("Please enter a message to send !");
            console.log("Nothing entered");
        }
        else
        {
           if(document.getElementById("my-radio").checked)
            {
                addNewChatMessage("my");
            }
            else if(document.getElementById("other-radio").checked)
            {
                addNewChatMessage("other");
            }
            else
            {
                alert("Please Select Radio Button(My Chat / Other Chat)")
            }
        }
    }
})
// FUNCTION TO CREATE NEW DIV AND APPEND
function addNewChatMessage(textType)
{
    console.log("Text entered");
                var chatRow=document.createElement("div");
                const text=document.createElement("div");
                text.appendChild(document.createTextNode(chatText.value));
                const time=document.createElement("div");
                time.appendChild(document.createTextNode(curtime));
                chatRow.appendChild(text);
                chatRow.appendChild(time);
                mainChat.appendChild(chatRow);
                chatRow.classList.add("chat-row",textType);
                text.classList.add("text");
                time.classList.add("time");
                chatText.value='';
}

//CODE TO SEARCH FOR CONTACT FROM SEARCH BOX
searchInput.addEventListener('keyup',(e)=>
{
       var text=searchInput.value.toLowerCase();
       var chatTitles=chatContainer.getElementsByClassName("chat-list");
       Array.from(chatTitles).forEach(function(name)
       {
           var chatName=name.textContent;
           if(chatName.toLowerCase().indexOf(text)!=-1)
           {
                name.style.display='block';
           }
           else
           {
                name.style.display='none';
           }
           
       });
   
       



})