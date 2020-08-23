const chatText=document.getElementById("chat-text");
const mainChat=document.getElementById("main-chat");
var today = new Date();
var curtime = today.getHours() + ":" + today.getMinutes();


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
                console.log("Text entered");
                var chatRow=document.createElement("div");
                const text=document.createElement("div");
                text.appendChild(document.createTextNode(chatText.value));
                const time=document.createElement("div");
                time.appendChild(document.createTextNode(curtime));
                chatRow.appendChild(text);
                chatRow.appendChild(time);
                mainChat.appendChild(chatRow);
                chatRow.classList.add("chat-row","my");
                text.classList.add("text");
                time.classList.add("time");
                chatText.value='';
                
            }
            else if(document.getElementById("other-radio").checked)
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
                chatRow.classList.add("chat-row","other");
                text.classList.add("text");
                time.classList.add("time");
                chatText.value='';
                
            }
            else
            {
                alert("Please Select Radio Button(My Chat / Other Chat)")
            }
           



        }
            
        
    }
})