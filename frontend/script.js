fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });


const $=s=>document.querySelector(s)


fetch("http://localhost:3000/students").then(res => res.json()).then(data => {
    $('#grid').innerHTML=data.map(res=>`<div class="card">
                            <div class="card-top">
                                <h3 class="card-title">${res.name}</h3>
                                <span class="badge paid">paid</span>
                            </div>
                            <div class="card-sub">${res.group}</div>
                            <div class="card-mid">
                                <!-- Կարող ես ավելացնել լրացուցիչ info այստեղ -->
                                <div class="kv">
                                    <span>Payments:</span>
                                    <span>50000 AMD</span>
                                </div>
                            </div>
                            <div class="card-actions">
                                <button class="add">Add to Cart</button>
                            </div>
                        </div>`).join('')
})

$("#tabs").onclick = function(event) {
    let el = event.target.closest(".tabs");
    if (!el) return;

    let tab = +el.getAttribute("data-tab");

    fetch("http://localhost:3000/students/join" + tab)
        .then(res => res.json())
        .then(data => {
           $("#tabs").onclick = function(e) {
                console.log(e.target.getAttribute("data-tab"));
            }

        });
}





