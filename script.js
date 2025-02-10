const webhookURL = "https://discord.com/api/webhooks/1338323862877638748/LIdce-wBjI6CxHefd2PHvAG0xber8J1NDbE5Zy8Bt_PJkniVasCVHd3NmwNmZMhEOecY";

function getCurrentTimestamp() {
    return new Date().toISOString();
}

function clickYes() {
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "Yes!",
                    description: "Feb 14 ka sa akin",
                    color: 16514816,
                    footer: { text: "missyou" },
                    author: { name: "Tugon Ni Cheska" },
                    fields: [],
                    timestamp: getCurrentTimestamp(),
                    thumbnail: { url: "https://raw.github.com/R-uru/cheskeyk/main/cheskeyk.jpg" }
                }
            ],
            content: ""
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Yes message sent successfully!");
    })
    .catch(error => {
        console.error("Error sending yes message:", error);
    });
}

function clickNo() {
    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "No :<",
                    description: "sakit mo boss",
                    color: 16711680,
                    footer: { text: "missyou" },
                    author: { name: "Tugon Ni Cheska" },
                    fields: [],
                    timestamp: getCurrentTimestamp(),
                    thumbnail: { url: "https://raw.github.com/R-uru/cheskeyk/main/cheskeyk.jpg" }
                }
            ],
            content: ""
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("No message sent successfully!");
    })
    .catch(error => {
        console.error("Error sending no message:", error);
    });
}

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    clickNo();
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    clickYes();
    window.location.href = "yes_page.html";
}
