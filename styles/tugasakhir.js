function getValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    return;
}
getValue();


const calculator = {
    hasil : 0,
    jumlah: 0,
  };

function updateDisplay(){
    document.querySelector('#hasil').innerText = calculator.hasil;
}

function updateDisplay1(){
    document.querySelector('#jumlah').innerText = calculator.jumlah;
}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    if (target.classList.contains('tambah')) {
        tambah();
        updateDisplay();
        return;
    }
 
    if (target.classList.contains('kurang')) {
       kurang();
       updateDisplay();
       return;
    }
    
    if (target.classList.contains('ok')) {
        jumlah();
        updateDisplay1();
        return;
    }
    
    if (target.classList.contains('sum')) {
        pesen();
        return;
    }
  });
}

function tambah(){
    calculator.hasil=++(calculator.hasil);
    return;
}

function kurang(){
    if(calculator.hasil === 0){
        alert('batas minimal order');
    }
    else{        
        calculator.hasil=--(calculator.hasil);
    }
    return;
}

function jumlah(){
    if(calculator.hasil != 0){
        if(calculator.hasil != 0 || getValue() === 'Matcha'){
            calculator.jumlah= calculator.hasil * 17000;
        } else if(calculator.hasil != 0 || getValue() === 'Caramel') {
            calculator.jumlah= calculator.hasil * 19000;
        } else if(calculator.hasil != 0 || getValue() === 'Mocha') {
            calculator.jumlah= calculator.hasil * 21000;
        }
    }
    
    return;
}

function pesen(){
    if(calculator.jumlah != '0' ){
        alert('Terima kasih sudah memesan!');
    } else{
        alert('Anda Belum Memilih Pesanan')
    }
    return;
}