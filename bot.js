const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "halo,perkenalkan nama saya ikybot. nama kamu siapa..?",
        `halo ${data?.nama}, umur kamu berapa..?`,
        `ohhh ${data?.umur}, makanan favorit kamu apa?`,
        `wahhh makanan favorit kamu ${data?.makanan}, btw udah punya pacar belum..?`,
        `owhhh ${data?.pacar}, yaudah kalo gitu`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("di isi dong pertanyaanya")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    }   else if (init === 2) {
        botDelay({ umur: jawaban.value })
    }   else if (init === 3) {
        botDelay({ makanan: jawaban.value })
    }   else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    }   else if ( init === 5) {
        finishing()
    }   else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loading.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout( () => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loading.style.display = "none"
    container[0].style.filter = "none"
    }, [1000 ])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank you yah ${usersData[0]} udah main di ikybot kali-kali makan ${usersData[2]} bareng yuk`
    jawaban.value = "siap thanks juga!"
}

function botEnd() {
    alert(`thanks ${usersData[0]} udah main di ikybot, anda akan kembali ke halaman utama`)
    window.location.reload()
}