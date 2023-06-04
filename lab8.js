function showDate() { 
    let out = document.getElementById('current-date'); 
    let out1 = document.getElementById('current-date1'); 
    let out2 = document.getElementById('current-date2'); 
    let out3 = document.getElementById('current-date3'); 
    let out4 = document.getElementById('current-date4'); 
    let today = new Date(); 
    let today1 = new Date(); 
    let today2 = new Date(); 
    let today3 = new Date(); 
    let today4 = new Date(); 
    out.innerHTML ="Дата и время для русской локали: " + today.toLocaleString('ru-RU'); 
    out1.innerHTML ="Дата и время для американской локали: " + today1.toLocaleString('en-US'); 
    out2.innerHTML ="Дата и время для французской локали: " + today2.toLocaleString('fr-FR'); 
    out3.innerHTML ="Дата и время для японской локали: " + today3.toLocaleString('ja-JP'); 
    out4.innerHTML ="Дата и время для китайской локали: " + today4.toLocaleString('zh-CN'); 
    } 