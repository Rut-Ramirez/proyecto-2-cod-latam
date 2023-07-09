<><form>
    <p>Contacto</p>
    <input id='nombre'>
        <button type='submit' id='nombre'>Enviar</button>
    </input></form><h2 id='result'></h2></>
    function validateEmailAddress(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
        function enviar() {
        $("#result").text("");
        var emailaddress = $("#email").val();
        if (validateEmailAddress(emailaddress)) {
        $("#result").text(emailaddress + "enviado");
        $("#result").css("color", "lightpink");
        } else {
        $("#result").text(emailaddress + " is not correct, please retry:(");
        $("#result").css("color", "red");
        }
        return false;
        }
        $("#validate").bind("click", validate);
