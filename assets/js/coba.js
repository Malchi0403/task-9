// coba ajax menggunakan onReadyStateChange

// const testimonial = new Promise((resolve) => {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             resolve(JSON.parse(this.responseText))
//         }
//     }
//     xhr.open('GET', 'https://api.npoint.io/e0f831f80ba373442843', true)
//     xhr.send();
// })

// end coba (on ready state change)

// // start (all testimonial)
// async function showTestimonial() {
//     const response = await testimonial
//     console.log(response)

//     let testimonialForHTML = '';

//     response.forEach(item => {
//         testimonialForHTML += `
//         <div class="testi-card">
//             <img src="${item.image}" alt="" class="profile-testi">
//             <p class="qoute-testi">~${item.qoute}</p>
//             <p class="author">${item.name}</p>
//             <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
//         </div>
//         `
//     })

//     document.getElementById('cardTesti').innerHTML = testimonialForHTML
// }

// showTestimonial()

// // end (all testimonial)

// // start (filter rating testimonial)

// async function filterData(rating) {
//     const response = await testimonial
//     let testimonialForHTML = '';

//     const testimonialFilterData = response.filter(function (item) {
//         return item.rating === rating
//     })

//     if (testimonialFilterData.length === 0) {
//         testimonialForHTML = `<h1> Data not found! </h1>`
//     } else {
//         testimonialFilterData.forEach(item => {
//             testimonialForHTML += `
//             <div class="testi-card">
//             <img src="${item.image}" alt="" class="profile-testi">
//             <p class="qoute-testi">~${item.qoute}</p>
//             <p class="author">${item.name}</p>
//             <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
//         </div>
//             `
//         })
//     }
//     document.getElementById('cardTesti').innerHTML = testimonialForHTML
// }
// // end filter testimonial

// coba jquery dan menggunakan async & await

async function showTestimonial() {
    const response = await $.getJSON('https://api.npoint.io/e0f831f80ba373442843');
    let testimonialForHTML = '';
    // loop untuk ke browser
    $.each(response, (index, item) => {
        testimonialForHTML += `
       <div class="testi-card">
        <img src="${item.image}" alt="" class="profile-testi">
        <p class="qoute-testi">~${item.qoute}</p>
        <p class="author">${item.name}</p>
        <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>
        `
    })
    // dom selector menggunakan jquery ('#cardTesti')
    // dan .html metode untuk memasukan string html . sama seperti .innerHTML
    $('#cardTesti').html(testimonialForHTML);
}
showTestimonial()



async function filterData(rating) {
    const response = await $.getJSON('https://api.npoint.io/e0f831f80ba373442843');
    let testimonialForHTML = '';

    // filter menggunakan $.grep = metode yang diberikan pada jquery untuk memfilter data
    const testimonialFilterData = $.grep(response, item => {
        return item.rating === rating
    });

    if (testimonialFilterData.length === 0) {
        testimonialForHTML = `<h1> Data not found! </h1>`
    } else {
        $.each(testimonialFilterData, (index, item) => {
            testimonialForHTML += `
        <div class="testi-card">
          <img src="${item.image}" alt="" class="profile-testi">
          <p class="qoute-testi">~${item.qoute}</p>
          <p class="author">${item.name}</p>
          <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
      `;
        })
    }
    $('#cardTesti').html(testimonialForHTML);
}
