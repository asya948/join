const DB = {
    students: [
        { id: 1, name: "Narek", group: "JS-1" },
        { id: 2, name: "Anna",  group: "JS-1" },
        { id: 3, name: "Gevorg",group: "JS-2" },
        { id: 4, name: "Meri",  group: "JS-2" },
        { id: 5, name: "Arman", group: "JS-3" },
        { id: 6, name: "Lilit", group: "JS-3" },
    ],
    payments: [
        { id: 1, student_id: 1, amount: 55000, month: "January" },
        { id: 2, student_id: 2, amount: 55000, month: "January" },
        { id: 3, student_id: 3, amount: 70000, month: "January" },
        { id: 4, student_id: 2, amount: 55000, month: "February" },
        { id: 5, student_id: 7, amount: 55000, month: "January" }, // ❗ Unknown student (no student with id=7)
        { id: 6, student_id: 1, amount: 55000, month: "February" },
    ]
};
const $=s=>document.querySelector(s);

fetch('http://localhost:3000/students').then(res=>res.json()).then(data=>{
$('#grid').innerHTML=data.map(item=>` <div class="card">
            <div class="card-top">
                <h3 class="card-title">${item.name}</h3>
                <span class="badge paid">paid</span>
            </div>
            <div class="card-mid">
                <div class="kv"><span>Group:</span><span>${item.group}</span></div>
                <div class="kv"><span>Amount:</span><span>${item.amount}</span></div>
                <div class="kv"><span>Month:</span><span>${item.month}</span></div>
            </div>
        </div>`).join('');
})










