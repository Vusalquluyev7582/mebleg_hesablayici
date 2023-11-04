let hesab1 = {
    adSoyad: "Asif Eliyev",
    id: 5623,
    mebleg: 3000
}
let hesab2 = {
    adSoyad: "Ehmed Babayev",
    id: 2347,
    mebleg: 2894
}

let x = prompt("Ad və soyadınızı daxil edin")
let idDogrulama;
let sual;
let cek;
if (x === hesab1.adSoyad) {
    idDogrulama = prompt("id nömrənizi daxil edin")
    if (idDogrulama == 5623) {
        sual = prompt("Nə qədər məbləğ çəkmək istəyirsiz?")
        cek = parseInt(sual)
        if (cek < 3000) {
            function netice() {
                return 3000 - cek
            }
            alert(`Qalan məbləğiniz ${netice(3000, cek)} manat`);
        } else if (cek === 3000) {
            function netice() {
                return 3000 - cek
            }
            alert(`Sizin kartınızda məbləğ qalmadı. Məbləğ : ${netice(3000, cek)}`)
        } else {
            function netice() {
                return 3000 - cek
            }
            alert(`Sizin kartınızda yetəri qədər məbləğ yoxdur. Çatmayan məbləğ : ${netice(3000, cek)}`)
        }
    }
    else {
        alert('Id yanlışdır')
    }
}
else if (x === hesab2.adSoyad) {
    let kecid2 = prompt("(id)nizi daxil edin")
    if (Number(kecid2) == 2347) {
        sual = prompt("Nə qədər məbləğ çəkmək istəyirsiz?")
        cek = parseInt(sual)
        if (cek < 2000) {
            function netice() {
                return 2000 - cek
            }
            alert(`Qalan məbləğiniz ${netice(3000, cek)} manat`);
        } else if (cek === 2000) {
            function netice() {
                return 2000 - cek
            }
            alert(`Sizin kartınızda məbləğ qalmadı. Məbləğ : ${netice(3000, cek)}`)
        } else {
            function netice() {
                return 2000 - cek
            }
            alert(`Sizin kartınızda yetəri qədər məbləğ yoxdur. Çatmayan məbləğ : ${netice(2000, cek)}`)
        }
    }
    else {
        alert('Id yanlışdır')
    }
}
if (x !== hesab1.adSoyad && x !== hesab2.adSoyad) {
    alert('Hesab adı yanlışdır');
}