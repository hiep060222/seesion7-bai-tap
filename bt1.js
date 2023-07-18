let diemVL = prompt("Nhap dien vat ly")
let diemHH = prompt("Nhap dien hoa hoc")
let diemSH = prompt("Nhap dien sinh hoc")

let tongDiem = Number(diemVL) + Number(diemHH) + Number(diemSH)
document.writeln("Tong diem la: ", tongDiem)

let diemTB = tongDiem / 3;
document.writeln("Diem trung binh la: ", diemTB)

