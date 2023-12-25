const app = new (function() {
    this.tbody = document.getElementById("tbody");

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
})();

app.listado();
