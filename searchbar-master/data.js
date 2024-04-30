'use strict';

const states = {
    tamilnadu: {
        chennai: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FT0MvatNCo98qat-ELslDYT6AH5A06RZI4j7hgR0LeVTN1xMac4hgEffMpvnuF8RjN0&usqp=CAU',
        coimbatore: 'https://t3.ftcdn.net/jpg/04/88/61/24/360_F_488612473_8AZMkE3mi1yWyfdQQcLZfKkU8pwZqAAm.jpg',
        madurai: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3h0DKj-aL8pKzf2R4G61OpoINhUTeCIpOF1Y1R39Vs4oq3yjJMoLfGuZWkO6iLAxBC4&usqp=CAU',
        trichy: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAm7QdMRjWjRR8l1dbHnAMF9k8PuqD54TunFMAl1q6GtT797KuBykh_qtE0WgGdVjFktk&usqp=CAU'
    },
    kerala: {
        trivandrum: 'https://t4.ftcdn.net/jpg/01/21/11/91/360_F_121119120_fxbjO3RVzLsUEijdlC19gnwSycgjCNpi.jpg',
        kozhikode: 'https://www.traveldealsfinder.com/wp-content/uploads/Aerial-View-of-Calicut.jpg',
        allepey: 'https://media.istockphoto.com/id/1311786286/photo/stunning-view-of-a-boat-sailing-on-the-alleppeys-backwaters-during-a-beautiful-sunset-kerala.webp?b=1&s=170667a&w=0&k=20&c=mHCOJryFzL06L6gnF-vJniAbPEVFVnFJVzIzRehc4Eo=',
        kochi: 'https://media.istockphoto.com/id/1206387491/photo/traditional-chinese-fishing-nets-in-kochi-india-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=tf8JZtxPoELUWTpMShCJYBkEAHzQMC8jNLQM4z0CBR4='
    },
    karnataka: {
        gokarna: "https://media.istockphoto.com/id/1299344131/photo/gokarna-beash-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=Tf3uge3w3S1BUwGfbVa7Yji4Uycfge3w9uCjlEBSCVM=",
        hampi: 'https://media.istockphoto.com/id/1343698748/photo/ancient-stone-ruins-at-hampi-karnataka-india.webp?b=1&s=170667a&w=0&k=20&c=NITY48nbVqPt5FUMjKy06YC48aO6BrnN_hNNcECWvg4=',
        bangalore: 'https://t3.ftcdn.net/jpg/02/68/05/88/360_F_268058852_WfyJ6ZywzBVTLoejioBqjUcbtyqm8KkV.jpg',
        mysore: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH2RBbfSwKT2ugYRyQ8N5rRRvD8QeC-2dZZ8T341-pp5cTLd4dopEHcFxe9rYsYJ1uuo&usqp=CAU'
    },
    ladakh: {
        leh: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.webp?b=1&s=170667a&w=0&k=20&c=UknVe9ZullBVMA6MQ_wG-SHzqYIR0H6BVVS4p6-tQ40=',
        kargil: 'https://c4.wallpaperflare.com/wallpaper/406/662/523/mountains-valley-india-jammu-and-kashmir-wallpaper-thumb.jpg',
        keylong: 'https://c0.wallpaperflare.com/preview/472/652/23/india-lahaul-and-spiti-keylong-leh-rd-cycling.jpg',
        pangong: 'https://c4.wallpaperflare.com/wallpaper/794/346/510/jammu-kashmir-pangong-lake-wallpaper-preview.jpg'
    },
    maharastra: {
        mumbai: 'https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_640.jpg',
        nashik: 'https://media.istockphoto.com/id/880969326/photo/ramkund-in-nashik-india-with-dramatic-colorful-clouds-in-the-sky.webp?b=1&s=170667a&w=0&k=20&c=vi5DDoGSLcpeb-hVeamifNIv7l21W5yTBpBbpv8chcQ=',
        pune: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MizEqeO3wjvLtQbAN5xdZqvOzvBTt2NpHWQJv5h_UyoFJYF9S77Cnyyqcebfl9EF6Mo&usqp=CAU',
        nagpur: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GGe7-AJfJBEsD0I5EWGEesgo5lUHQxAbgiDZ2uNeRfTyWTvfsGLRGsYqUeOjt6XHzcA&usqp=CAU'
    }
}

const searchIcon = document.querySelector(".searchIcon");
const input = document.getElementById("searchBar");

const result = document.querySelector(".result");

let s, place

searchIcon.addEventListener('click', function () {
    let inputValue = input.value.toLowerCase();

    console.log(inputValue)
    result.textContent = "";
    if (Object.entries(states).some(([state]) => state === inputValue)) {
        let op = Object.entries(states[inputValue]).filter(filteredLocation(inputValue));
    } else {
        for (let city in states) {
            if (Object.entries(states[city]).some(([place]) => place === inputValue)) {
                const op = Object.entries(states[city]).filter(([place]) => place === inputValue).map(([place, imgUrl]) => [place, imgUrl]);
                create(op[0], op[1], city);
            } else {

            }
        }
    }
});

const create = (name, imgUrl, state) => {
    const contain = document.createElement("div");
    const image = document.createElement("img");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");

    result.appendChild(contain);
    image.src = name[1];
    contain.classList.add("placeName");
    contain.append(image);
    h1.textContent = name[0].toUpperCase();
    h3.textContent = `STATE : ${state.toUpperCase()}`;
    contain.appendChild(h1);
    contain.appendChild(h3);
    console.log(result)
}

const filteredLocation = (place) => {
    for (let i in states[place]) {
        create([i, states[place][i]], states[place], place)
    }
}

const noResult = () => {
    const resultText = document.createElement("h1");
    resultText.textContent = "No results Found";
}
