const URI_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

fetch(URI_ENDPOINT)
    .then((datos) => datos.json())
    .then((datos) => {
        let start = "<";
        let finish = "</";
        let center = "center>";

        var values = "";
        console.log(datos);

        datos.forEach((usr) => {
            values += `
            <h3> Hola soy, ${usr.name} </h3>
            <h2> Correo:  ${usr.email} 📩 </h2>
            <h3>Contactate con nuestro asesores </h3>
            <h3> ✍✍✍✍✍✍✍</h3>
           
            `;
        });

        let result = start + center + values + finish + center;
        // console.log(result);

        document.write(result);
    });
