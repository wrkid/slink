const id1 = 'ru.bnpl.mobile'
const id2 = 'C109474877' 
const deep1 = 'market://launch?id='+id1
const deep2 = 'hiapplink://com.huawei.appmarket?appId='+id1
const deep3 = 'appmarket://details?id='+id1

const deep4 = 'market://launch?id='+id2
const deep5 = 'hiapplink://com.huawei.appmarket?appId='+id2
const deep6 = 'appmarket://details?id='+id2
const deep7 = 'bnpl://'
window.addEventListener('click', function(e) {
    const value = e.target.getAttribute('id');
    console.log(value)
    if (value === 'btn1') {
        window.location.href = deep1;
    } else if (value === 'btn2') {
        window.location.href = deep2;
    } else if (value === 'btn3') {
      window.location.href = deep3;
    } else if (value === 'btn4') {
      window.location.href = deep4;
    } else if (value === 'btn5') {
      window.location.href = deep5;
    } else if (value === 'btn6') {
      window.location.href = deep6;
    } else if (value === 'btn7') {
      window.location.href = deep7;
    }
})