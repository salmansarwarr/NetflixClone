const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");


// Listen for tab click
for(i of tabItems) {
    i.addEventListener('click', selectItem);
}

// Select tab content item
function selectItem() {
    removeBorder();
    removeShow();
    // Add border to current item
    this.classList.add('tab-border')
    // Add tab content
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');   
}

function removeBorder() {
    for(i of tabItems) {
        i.classList.remove('tab-border');
    }
}

function removeShow() {
    for(i of tabContentItems) {
        i.classList.remove('show');
    }
}
