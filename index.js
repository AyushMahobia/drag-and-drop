let draggables = document.querySelectorAll(".draggable")
let contaniers = document.querySelectorAll(".container")

//selecting all draggable element
draggables.forEach(draggable =>{
    //manipulation just after start of dragging an element 
    draggable.addEventListener('dragstart', () =>{
        // console.log("dragging start")
        draggable.classList.add("dragging")
    })

    //manipulation after the end of dragging event 
    draggable.addEventListener('dragend', () =>{
        // console.log("dragging end")
        draggable.classList.remove("dragging")
        draggable.classList.add("dragged")
        // alert("successfully element dragged")
    })
});

contaniers.forEach(container =>{
    //positioning an element from one container to another
    container.addEventListener('dragover', (e) =>{
        e.preventDefault();
        const draggable = document.querySelector(".dragging")
        container.append(draggable)
    })
})

const reset = document.querySelector("button")
//reseting the container
reset.addEventListener('click', ()=>{
    window.location.reload();
})
