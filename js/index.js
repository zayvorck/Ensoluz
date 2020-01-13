$(document).ready(function () {

    $("#btnBeneficios").click(function () {
        $("#pSisFotovoltaicos").css("display", "none");
        $("#pBeneficios").css("display", "block");
        $("#pPropuestaValor").css("display", "none");
        $("#btnRegresarSisFotovoltaicos").css("display", "block");
        
    });

    $("#btnPropestaValor").click(function () {
        $("#pSisFotovoltaicos").css("display", "none");
        $("#pBeneficios").css("display", "none");
        $("#pPropuestaValor").css("display", "block");
        $("#btnRegresarSisFotovoltaicos").css("display", "block");
    });

    $("#btnRegresarSisFotovoltaicos").click(function () {
        $("#pSisFotovoltaicos").css("display", "block");
        $("#pBeneficios").css("display", "none");
        $("#pPropuestaValor").css("display", "none");
        $("#btnRegresarSisFotovoltaicos").css("display", "none");
    });

    $("#btnBeneficiosCalentadores").click(function () {
        $("#pCalentadores").css("display", "none");
        $("#ulBenficiosCalentadores").css("display", "block");
        $("#btnRegresarCalentadores").css("display", "block");
    });

    $("#btnRegresarCalentadores").click(function () {
        $("#pCalentadores").css("display", "block");
        $("#ulBenficiosCalentadores").css("display", "none")
        $("#btnRegresarCalentadores").css("display","none")
    });

});