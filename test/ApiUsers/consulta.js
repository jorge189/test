let userDetails;
      function getUserDetails() {
        var userId = document.getElementById("user-id").value;
        var pdf = document.getElementById("generatePDF");
        if (userId) {
            
        // Realiza la petición GET al servicio con el id del usuario
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId, true);
        xhr.onload = function() {
            console.log(xhr.status)
          // Procesa la respuesta del servicio
          if (xhr.status == 200) {
            userDetails = JSON.parse(xhr.responseText);
            pdf.style.display="block";
            console.log(userDetails);
            displayUserDetails();
          }if (xhr.status == 400 || xhr.status == 404) {
            pdf.style.display="none";
            Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'el ID ' + userId + ' no existe',
                        
                    });
            document.getElementById("user-id").value = "";
            clear();
            userDetails = "";
          } 
          
          else {
            console.error(xhr.statusText);
          }
        };
        xhr.onerror = function() {
          console.error(xhr.statusText);
        };
        xhr.send();  
        }else{
            pdf.style.display="none";
            userDetails = "";
            clear();
            Swal.fire({
                        icon: 'warning',
                        title: 'cuidado',
                        text: 'no puede mandar el id vacio',
                        
                    });
        }
        
      }

      function clear(){
        var userDetailsElement = document.getElementById("user-details");
        userDetailsElement.innerHTML = "";
      }

      function displayUserDetails() {
        var userDetailsElement = document.getElementById("user-details");
        var address  = userDetails.address;
        var company = userDetails.company;
        var geo = address.geo
        userDetailsElement.innerHTML = "";
        userDetailsElement.innerHTML += "<h2> Datos personales </h2>";
        userDetailsElement.innerHTML += "<p>ID: "+userDetails.id+"</p>";
        userDetailsElement.innerHTML += "<p>Nombre: "+userDetails.name+"</p>";
        userDetailsElement.innerHTML += "<p>Nombre de usuario: "+userDetails.username+"</p>";
        userDetailsElement.innerHTML += "<p>Email: "+userDetails.email+"</p>";
        userDetailsElement.innerHTML += "<p>Teléfono: "+userDetails.phone+"</p>";
        userDetailsElement.innerHTML += "<p>Website: "+userDetails.website+"</p>";

        userDetailsElement.innerHTML += "<h2> Direccion</h2>";
        userDetailsElement.innerHTML += "<p>Calle: "+address.street+"</p>";
        userDetailsElement.innerHTML += "<p>Cuidad: "+address.city+"</p>";
        userDetailsElement.innerHTML += "<p>Suite: "+address.suite+"</p>";
        userDetailsElement.innerHTML += "<p>Codigo Postal: "+address.zipcode+"</p>";
        userDetailsElement.innerHTML += "<p>Latitud: "+geo.lat+"</p>";
        userDetailsElement.innerHTML += "<p>Longitud: "+geo.lng+"</p>";

        userDetailsElement.innerHTML += "<h2> Compañia</h2>";
        userDetailsElement.innerHTML += "<p>Nombre: "+company.name+"</p>";
        userDetailsElement.innerHTML += "<p>BS: "+company.bs+"</p>";
        userDetailsElement.innerHTML += "<p>Frase: "+company.catchPhrase+"</p>";
       
      }

      function generatePDF() {
        // Obtener los detalles del usuario
        var userId = document.getElementById("user-id").value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId, true);
        xhr.onload = function() {
          if (xhr.status == 200) {
             userDetails = JSON.parse(xhr.responseText);
            var address  = userDetails.address;
            var company = userDetails.company;
            var geo = address.geo

            // Crea un documento PDF
            var doc = new jsPDF();

            // Agrega los detalles del usuario al documento
            doc.text("Nombre: "+userDetails.name, 10, 10);
            doc.text("Nombre de usuario: "+userDetails.username, 10, 20);
            doc.text("Email: "+userDetails.email, 10, 30);
            doc.text("Teléfono: "+userDetails.phone, 10, 40);
            doc.text("Website: "+userDetails.website, 10, 50);

            doc.text("Direccion", 50, 60);
            doc.text( "Calle: "+address.street,10,70);
            doc.text( "Cuidad: "+address.city,10,80);
            doc.text( "Suite: "+address.suite,10,90);
            doc.text( "Codigo Postal: "+address.zipcode,10,100);
            doc.text( "Latitud: "+geo.lat,10,110);
            doc.text( "Longitud: "+geo.lng,10,120);
            
            doc.text("Compañia", 50, 140);
            doc.text( "Nombre: "+company.name,10,150);
            doc.text( "Bs: "+company.bs,10,160);
            doc.text( "Frase: "+company.catchPhrase,10,170);

            // Descarga el documento PDF
            doc.save(`${userDetails.name}.pdf`);
          } else {
            console.error(xhr.statusText);
          }
        };
        xhr.onerror = function() {
          console.error(xhr.statusText);
        };
        xhr.send();
      }