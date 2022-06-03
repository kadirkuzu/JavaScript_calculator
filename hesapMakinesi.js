const ekran = document.getElementById('SonuçEkranı')
function ekranSilme(){
    ekran.innerHTML = 0
}

function geriGit(){
    ekran.innerHTML = ekran.innerHTML.slice(0,-1)
}
function kareAlma(){
    ekran.innerHTML = Number(ekran.innerHTML)**2
}
function kökAlma(){
    ekran.innerHTML = Number(ekran.innerHTML)**(1/2)
}
function ÇarpmayaGöreTers(){
    ekran.innerHTML = 1/Number(ekran.innerHTML)
}
function negatifPozitif(){
    ekran.innerHTML = Number(ekran.innerHTML)*(-1)
}
function yüzdeBulma(){
    ekran.innerHTML = Number(ekran.innerHTML)/100
}
function sonuçYazdirma(){
    ekran.innerHTML = eval(ekran.innerHTML)
}
function ekrandaYazdirma(sayi){
    if (ekran.innerHTML !=0) {
        ekran.innerHTML = ekran.innerHTML + sayi
    }
    else {
        ekran.innerHTML = sayi
    }

}

function sayıİşlemleri(sayi){
    ekrandaYazdirma(sayi) ;
}
function sonuçİşlemleri(işlem){
    ekrandaYazdirma(işlem) ;

}