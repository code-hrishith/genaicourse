
async function sendMessageHitesh() {
  const input = document.getElementById("userInputHitesh");
  const chatboxHitesh = document.getElementById("chatboxHitesh");
  const message = input.value.trim();

  if (message === "") return;

  // Create user message element
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message userhitesh";
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatboxHitesh.appendChild(userMsg);
  input.value = "";

  chatboxHitesh.scrollTop = chatboxHitesh.scrollHeight;



  try {
    const response = await fetch("/users/reply/hitesh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();



    setTimeout(() => {
      const aiMsgHitesh = document.createElement("div");
      aiMsgHitesh.className = "chat-message ai";
      aiMsgHitesh.innerHTML = `<strong>Hitesh :</strong> ${data.reply.content}`;

      chatboxHitesh.appendChild(aiMsgHitesh);
      chatboxHitesh.scrollTop = chatboxHitesh.scrollHeight;
    }, 10);
  } catch (err) {
    console.error("Error:", err);
  }
}




async function sendMessagePiyush(){
  const input = document.getElementById("userInputPiyush");
  const chatboxPiyush = document.getElementById("chatboxPiyush");
  const message = input?.value?.trim();

  if (message === "") return;

  // Create user message element
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message userPiyush";
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatboxPiyush.appendChild(userMsg);
  input.value = "";

  chatboxPiyush.scrollTop = chatboxPiyush.scrollHeight;



  try {
    const response = await fetch("/users/reply/piyush", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    setTimeout(() => {
      const aiMsgPiyush = document.createElement("div");
      aiMsgPiyush.className = "chat-message ai";
      aiMsgPiyush.innerHTML = `<strong>Piyush : </strong> ${data.reply.content}`;

      chatboxPiyush.appendChild(aiMsgPiyush);
      chatboxPiyush.scrollTop = chatboxPiyush.scrollHeight;
    }, 10);
  } catch (err) {
    console.error("Error:", err);
  }
}

window.onmessage = sendMessagePiyush;
window.onmessage = sendMessageHitesh;



