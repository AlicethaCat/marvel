let fecha = new Date();

let dia = fecha.getDay();
let mes = fecha.getMonth();
let ano = fecha.getFullYear();

if (mes < 10){
    mes = `0${mes}`;
}
return `${dia}/${mes}/${ano}`;