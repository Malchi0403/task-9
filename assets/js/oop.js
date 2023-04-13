class Testimonials {
    #image = ""
    #qoute = ""
    #author = ""

    constructor(author, qoute, image) {
        this.#qoute = qoute
        this.#author = author
        this.#image = image
    }

    get qoute() {
        return this.#qoute
    }
    get author() {
        return this.#author
    }
    get image() {
        return this.#image
    }

    get forHTML() {
        return `
        <div class="testi-card">
            <img src="${this.image}" alt="" class="profile-testi">
            <p class="qoute-testi">${this.qoute}</p>
            <p class="author">${this.#author}</p>
        </div>
        `
    }
}

const first_testi = new Testimonials("Malchiram", "belajar OOP", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
const second_testi = new Testimonials("Timpolas", "belajar javascript", "https://media.istockphoto.com/id/1421613362/id/foto/pria-yang-fokus-membaca-sesuatu-secara-online-membuat-catatan.jpg?s=612x612&w=is&k=20&c=N8W0dttqsWGcvu6sDWACgp3As_U3n_1XzGcwWtM2q1Y=")
const third_testi = new Testimonials("Malchi", "belajar Golang", "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")


let data = [first_testi, second_testi, third_testi];
let testiForHTML = "";

for (let i = 0; i < data.length; i++) {
    testiForHTML += data[i].forHTML
}

document.getElementById('cardTesti').innerHTML = testiForHTML