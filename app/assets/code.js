const app = new (function() {
    this.tbody = document.getElementById("tbody");
    this.id = document.getElementById("id")
    this.nombre = document.getElementById("nombre");
    this.email = document.getElementById("email");
    this.edad = document.getElementById("edad");

    this.listado = () => {
        fetch("../controllers/listado.php")
            .then((res) => res.json())
            .then((data) => {
                this.tbody.innerHTML = "";
                data.forEach((item) => { // <--- Añadir paréntesis aquí
                    this.tbody.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.nombre}</td>
                        <td>${item.email}</td>
                        <td>${item.edad}</td>
                        <td>
                            <a href="javascript:;" class="btn btn-warning btn-sm" onclick="app.editar(${item.id})">Editar</a>
                            <a href="javascript:;" class="btn btn-danger btn-sm" onclick="app.eliminar(${item.id})">Eliminar</a> <!-- Corregir "Editar" por "Eliminar" -->
                        </td>
                    </tr>
                    `;
                });
            })
            .catch((error) => console.log(error));
    };

    this.guardar = () => {
        var form = new FormData();
        form.append("nombre", this.nombre.value);
        form.append("email", this.email.value);
        form.append("edad", this.edad.value);
        form.append("id", this.id.value);
        if (this.id.value === ""){
            fetch("../controllers/guardar.php", {
                method: "POST",
                body: form,
            })
            .then((res) => res.json())
            .then((data) => {
                alert("Registro exitoso");
                this.listado()
                this.limpiarDatos()
            })
            .catch((error) => console.log(error));
        } else {
            fetch("../controllers/actualizar.php", {
                method: "POST",
                body: form,
            })
            .then((res) => res.json())
            .then((data) => {
                alert("Actualizacion exitosa");
                this.listado()
                this.limpiarDatos()
            })
            .catch((error) => console.log(error));
        }
    }

    this.limpiarDatos = () => {
        this.id.value = "";
        this.id.nombre = "";
        this.id.email = "";
        this.id.edad = "";
    };

    this.editar = (id) => {
        var form = new FormData();
        form.append("id", id);
        fetch("../controllers/editar.php", {
            method: "POST",
            body: form,
        })
        .then((res) => res.json())
        .then((data) => {
            this.id.value = data.id;
            this.nombre.value = data.nombre;
            this.email.value = data.email;
            this.edad.value = data.edad;
        } )
    }

    this.eliminar = (id) => {
        var form = new FormData();
        form.append("id", id)
        fetch("../controllers/eliminar.php", {
            method: "POST",
            body: form,
        })
        .then((res) => res.json())
        .then((data) => {
            alert('Eliminado con exito');
            this.listado();
        })
        .catch((error) => console.log(error));
    }
})();

app.listado();
