var array = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]
function dataHandling2(array){

    const array1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]
array1.splice(1,1,'Roman Alamnsyah Elsharawy')
array1.splice(2,1, 'Provinsi Bandar Lampung')
array1.splice(4,2, 'Pria', 'SMA Internasional Metro')
console.log(array1)
let field = array1[3].split("/")

let tanggal =field[0]
let bulan =field[1]
let tahun =field[2]
let bulan1 =''
switch(bulan){
    case '01':
        bulan1 = 'Januari'
         break;
     case '02':
        bulan1 = 'Februari'
         break;
     case '03':
        bulan1 = 'Maret'
         break;
     case '04':
        bulan1 = 'April'
         break;
     case '05':
        bulan1 = 'Mei'
         break;
     case '06':
        bulan1 = 'Juni'
         break;
     case '07':
        bulan1 = 'Juli'
         break;
     case '08':
        bulan1 = 'Agustus'
         break;
     case '09':
        bulan1 = 'September'
         break;
     case '10':
        bulan1 = 'Oktober'
         break;
     case '11':
        bulan1 = 'November'
         break;
     case '12':
        bulan1 = 'Desember'
         break;
}
console.log(bulan1)

console.log(tahun+','+tanggal+','+bulan)
console.log(tanggal+'-'+bulan+'-'+tahun)

let name2 = array1.slice(1,2)[0]

console.log(name2.slice(0,15))
}
dataHandling2()

