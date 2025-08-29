let counter = 0;
const heartButtons = document.getElementsByClassName('heart-btn')
for(let button of heartButtons){
    button.addEventListener('click',()=>{
        counter = counter + 1;
        document.getElementById('heart-count').textContent =counter;
    });
}

// Function to get id
const getId= (id)=>{
    const getId = document.getElementById(id).textContent;
    return getId.trim();
}

//call history create 
let callHistoryData =[];
// card-box season //QuerySelector Use
const callButtons = document.querySelectorAll('.call-btn');
for(const button of callButtons){
    button.addEventListener('click',()=>{
    const card = button.closest('.card');
    const serviceName = card.querySelector('.card-title').textContent.trim();
    const serviceNumber = card.querySelector('.call-number').textContent.trim();


    const coin =parseInt(getId('coin-count'));
    const digit = 20;
    const coinElement =document.getElementById('coin-count');
    if(coin >= digit){
        alert(`Calling ${serviceName} ${serviceNumber}...`);
        const min = coin - digit;
        coinElement.textContent= min;

    }else{
        return alert(`You don't have enough coins, you need at least 20 coins to make a call.`);
    }
    const data= {
    name: `${serviceName}`,
    Number: `${serviceNumber}`,
    date: new Date().toLocaleTimeString()
}
    callHistoryData.push(data);  
    // history submit
    updateCallHistory();
})
}

// function update call history data
const updateCallHistory = ()=>{
const callHistory = document.getElementById('call-history');
    callHistory.innerText = '';
    for(const data of callHistoryData){
        const div =document.createElement('div');
        div.innerHTML =
        `
        <div class="p-4 bg-[#fafafa] flex justify-between rounded-lg mb-2">
            <div>
                <p class="text-lg font-semibold">${data.name}</p>
                <p class="text-gray-500">${data.Number}</p>
            </div>
            <p>${data.date}</p>
        </div>
        `;
        callHistory.appendChild(div);
    }
}

//clear call history
document.getElementById('clear-call').addEventListener('click',()=>{
    callHistoryData = [];
    updateCallHistory();
})

// Copy Button
let counterCopy = 0;
const copyButtons = document.getElementsByClassName('copy-btn');

for (let button of copyButtons) {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const textCopy = card.querySelector('.call-number').textContent;
        counterCopy += 1;
        document.getElementById('copy-count').textContent = counterCopy;
        navigator.clipboard.writeText(textCopy)
        .then(() => {
            alert("Text copied to clipboard: " + textCopy);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
});
}