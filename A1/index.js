let messages_json = "[{\"message\":\"This is the first test message!\",\"timestamp\":\"Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)}\"},{\"message\":\"Would you look at that, here's another!\",\"timestamp\":\"Tue May 21 2019 03:15:52 GMT-0700 (Pacific Daylight Time)}\"},{\"message\":\"Three's a crowd!\",\"timestamp\":\"Tue May 21 2019 09:16:52 GMT-0700 (Pacific Daylight Time)}\"}]"
let messages = JSON.parse(messages_json);
let doc = document.getElementById("message-display-container");

loadMessages = () => {
    messages.forEach(message_obj => {
        addMessage(message_obj)
    });
}

clearMessages = () => {
    doc.innerHTML = ""
    messages = [];
    alert("What have you done!")
}

document.getElementById("message-form").onsubmit = () => {
    let data = document.getElementById("message-content");
    let message = {
        "message": data.value,
        "timestamp": new Date + ""
    }
    addMessage(message);
    messages.push(message);
    data.value = "";
    return false;
};

addMessage = (message) => {
    let newMessage = document.createElement('div');
    newMessage.id = messages.length;
    newMessage.className = "message-box";
    newMessage.innerHTML = message.message;

    doc.appendChild(newMessage);
}