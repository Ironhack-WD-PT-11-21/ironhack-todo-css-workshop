let bodyColorHue = 0;
let opositeColorHue = 180;

setInterval(() => {
    bodyColorHue = (bodyColorHue + 1) % 360;
    opositeColorHue = (opositeColorHue + 1) % 360;
    document.getElementsByTagName('h2')[0].style.color = `hsl(${opositeColorHue}, 100%, 60%)`
    document.querySelector('#add-todo-form > input').style.backgroundColor = `hsl(${opositeColorHue}, 100%, 94%)`;
    document.querySelectorAll('.todo-value:not(.done)').forEach(item => {
        item.style.backgroundColor = `hsl(${opositeColorHue}, 100%, 94%)`;
        item.style.borderBottom = `1px solid hsl(${opositeColorHue}, 100%, 85%)`;
    })
    document.body.style.backgroundColor = `hsl(${bodyColorHue}, 100%, 94%)`
}, 100)