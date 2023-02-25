$(document).ready(function () {
    $('#profile__ripple').ripples({
        resolution: 512,
        dropradius: 10
    })

    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach((bar) => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%"
    })

    const year = (new Date()).getFullYear();
    $('#copyright').html(`&#169; ${year}. All rights reserved`);

    $('#print-btn').click(() => window.print())
})