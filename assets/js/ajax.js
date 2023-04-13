const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
        } else {
            reject("ERROR DATA")
        }
    }
    xhr.onerror = () => {
        reject("Network Error")
    }
    xhr.open('GET', 'https://api.npoint.io/e0f831f80ba373442843', true)
    xhr.send();
})




// start (all testimonial)
async function showTestimonial() {
    const response = await testimonial
    console.log(response)

    let testimonialForHTML = '';

    response.forEach(item => {
        testimonialForHTML += `
        <div class="testi-card">
            <img src="${item.image}" alt="" class="profile-testi">
            <p class="qoute-testi">~${item.qoute}</p>
            <p class="author">${item.name}</p>
            <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
        `
    })

    document.getElementById('cardTesti').innerHTML = testimonialForHTML
}

showTestimonial()

// end (all testimonial)

// start (filter rating testimonial)

async function filterData(rating) {
    const response = await testimonial
    let testimonialForHTML = '';

    const testimonialFilterData = response.filter(function (item) {
        return item.rating === rating
    })

    if (testimonialFilterData.length === 0) {
        testimonialForHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFilterData.forEach(item => {
            testimonialForHTML += `
            <div class="testi-card">
            <img src="${item.image}" alt="" class="profile-testi">
            <p class="qoute-testi">~${item.qoute}</p>
            <p class="author">${item.name}</p>
            <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
            `
        })
    }
    document.getElementById('cardTesti').innerHTML = testimonialForHTML
}
