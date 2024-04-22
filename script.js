const id = 'ru.bnpl.mobile'
const deep1 = 'market://launch?id='+id
const deep2 = 'hiapplink://com.huawei.appmarket?appId='+id
window.addEventListener('click', function(e) {
    const value = e.currentTarget.getAttribute('id');
    if (value === 'btn1') {
        window.location.href = deep1;
    } else if (value === 'btn2') {
        window.location.href = deep2;
    }
})