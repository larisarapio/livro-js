function calcularFuso () {
    var inHrBr = document.getElementById('inHoraBrasil');
    var outHrFR = document.getElementById('outHoraFR');

    //obtem e converte o conteúdo do campo inHrBr
    var horaBR = Number(inHrBr.value);

    const validateHoraBR = () => {
        alert('informe a hr no br')
        inHrBr.focus();
        return;
    };
    (inHrBr.value == "" || isNaN(horaBR)) ? validateHoraBR(): null;

    var horaFR = horaBR + 5;
    horaFR = horaFR > 24 ? horaFR - 24 : horaFR;



}