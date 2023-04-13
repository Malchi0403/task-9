function takeData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // check validation

    if (name == "") {
        return alert("Nama tidak boleh kosong")
    } else if (email == "") {
        return alert("Email tidak boleh Kosong")
    }
    else if (phone == "") {
        return alert("Nomor telfon harus di isi")
    }
    else if (subject == "") {
        return alert("Subject harus di pilih")
    }
    else if (message == "") {
        return alert("harap isikan pesan anda")
    }

    const destination = "misaeltimpolas04@gmail.com"
    let a = document.createElement("a")
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${destination}&su=${subject}&body= Halo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di nomor tersebut ${phone}`
    a.click()

    let data = {
        nama: name,
        email: email,
        phone: phone,
        subject: subject,
        message
    }

    console.log(data)
}

// form project html


let blog = []

function getData(e) {
    e.preventDefault()

    // check & getID
    let project = document.getElementById('project').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let desc = document.getElementById('desc').value;
    let image = document.getElementById('image').files;

    // checkbox 
    const ikon1 = '<i class="fa-brands fa-react"></i>'
    const ikon2 = '<i class="fa-brands fa-html5"></i>'
    const ikon3 = '<i class="fa-brands fa-css3"></i>'
    const ikon4 = '<i class="fa-brands fa-python"></i>'
    const ikon5 = '<i class="fa-brands fa-golang"></i>'
    const ikon6 = '<i class="fa-brands fa-laravel"></i>'

    let reactJs = document.getElementById('icon1').checked ? ikon1 : "";
    let html = document.getElementById('icon2').checked ? ikon2 : "";
    let css = document.getElementById('icon3').checked ? ikon3 : "";
    let python = document.getElementById('icon4').checked ? ikon4 : "";
    let golang = document.getElementById('icon5').checked ? ikon5 : "";
    let laravel = document.getElementById('icon6').checked ? ikon6 : "";

    // imgblob
    image = URL.createObjectURL(image[0])

    startDate = new Date(startDate);
    endDate = new Date(endDate);


    let allProject = {
        project,
        startDate,
        endDate,
        desc,
        image,
        reactJs,
        html,
        css,
        python,
        golang,
        laravel
    }

    blog.push(allProject);
    console.log(blog);
    domProject();
}



function domProject() {
    document.getElementById("contain1").innerHTML = ""
    for (let i = 0; i <= blog.length; i++) {
        document.getElementById("contain1").innerHTML += `
             <div class="card-project">
            <div class="content">
                <img src="${blog[i].image}" alt="image">
                <a onClick="resultdetails()">
                    <h3>${blog[i].project}</h3>
                </a>
                <span>
                    <p>${duration(blog[i].startDate, blog[i].endDate)}</p>
                    
                </span>
                <div class="text">
                    <p>${blog[i].desc}</p>
                </div>

                
                
                <div class="tech">
                   ${blog[i].reactJs}
                   ${blog[i].html}
                   ${blog[i].css}
                   ${blog[i].python}
                   ${blog[i].golang}
                   ${blog[i].laravel}
                </div>
                
                <div class="btngr">
                    <button class="btn1">Edit</button>
                    <button class="btn2">Delete</button>

                </div>
                </div>
            </div>
            
            `
    }
}

const duration = (startDate, endDate) => {
    const dateStart = new Date(startDate).getTime();
    const dateEnd = new Date(endDate).getTime();
    const selisih = dateEnd - dateStart;

    let day = selisih / (1000 * 60 * 60 * 24);
    const month = Math.floor(selisih / (1000 * 60 * 60 * 24 * 30));

    const result =
        day < 30
            ? day === 1
                ? ` ${day} day`
                : ` ${day} days`
            : month === 1
                ? ` ${month} month`
                : ` ${month} months`;

    return result;
};


// hamburger


const animasi1 = document.getElementById('span1');
const animasi2 = document.getElementById('span2');
const animasi3 = document.getElementById('span3');
const hamburger = document.getElementById('menu');
let menuHamburger = false;



const menu = document.getElementById('toogle-menu');

menu.addEventListener('click', () => {
    animasi1.classList.toggle('span1');
    animasi3.classList.toggle('span3');
    animasi2.classList.toggle('span2');
    if (!menuHamburger) {
        hamburger.style.display = "block";
        menuHamburger = true;
    } else {
        hamburger.style.display = "none";
        menuHamburger = false;
    }
})



