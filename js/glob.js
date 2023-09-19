document.addEventListener("DOMContentLoaded", function () {
    const menuVerticalServicios = document.querySelector("#menu-vertical-servicios");
    const menuVerticalProveedores = document.querySelector("#menu-vertical-proveedores"); // Agregar esta línea
    const menuVerticalBraices = document.querySelector("#menu-vertical-braices"); // Agregar esta línea
    const menuVerticalCountry = document.querySelector("#float-r"); // Agregar esta línea
    // Función para ocultar el menú vertical de servicios
    function hideMenuServicios() {
      menuVerticalServicios.style.display = "none";
    }
  
    // Función para ocultar el menú vertical de proveedores
    function hideMenuProveedores() {
      menuVerticalProveedores.style.display = "none";
    }

    // Función para ocultar el menú vertical de braices
    function hideMenuBraices() {
      menuVerticalBraices.style.display = "none";
    }

    // Función para ocultar el menú vertical de country

    function hideMenuCountry() {
        menuVerticalCountry.style.display = "none";
    }

    // Evento para mostrar u ocultar el menú vertical de servicios
    const checkboxToggleServicios = document.querySelector(".checkbox-toggle");
    checkboxToggleServicios.addEventListener("change", function () {
      if (this.checked) {
        menuVerticalServicios.style.display = "block";
      } else {
        hideMenuServicios();
      }
    });
  
    // Evento para ocultar el menú vertical de servicios cuando se hace clic en otro lugar de la pantalla
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!target.matches(".checkbox-toggle") && !target.matches("#menu-vertical-servicios")) {
        hideMenuServicios();
      }
    });
    
    // Evento para mostrar u ocultar el menú vertical de proveedores
    const checkboxToggleProveedores = document.querySelector("#proveedores"); // Agregar esta línea
    checkboxToggleProveedores.addEventListener("change", function () { // Agregar esta línea
      if (this.checked) { // Agregar esta línea
        menuVerticalProveedores.style.display = "block"; // Agregar esta línea
      } else { // Agregar esta línea
        hideMenuProveedores(); // Agregar esta línea
      } // Agregar esta línea
    }); // Agregar esta línea
  
    // Evento para ocultar el menú vertical de proveedores cuando se hace clic en otro lugar de la pantalla
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!target.matches("#proveedores") && !target.matches("#menu-vertical-proveedores")) {
        hideMenuProveedores();
      }
    });

    // Evento para mostrar u ocultar el menú vertical de braices
    const checkboxToggleBraices = document.querySelector("#braices"); // Agregar esta línea
    checkboxToggleBraices.addEventListener("change", function () { // Agregar esta línea
      if (this.checked) { // Agregar esta línea
        menuVerticalBraices.style.display = "block"; // Agregar esta línea
      } else { // Agregar esta línea
        hideMenuBraices(); // Agregar esta línea
      } // Agregar esta línea
    }); // Agregar esta línea

    // Evento para ocultar el menú vertical de braices cuando se hace clic en otro lugar de la pantalla
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!target.matches("#braices") && !target.matches("#menu-vertical-braices")) {
        hideMenuBraices();
      }
    });    

    
    // Función para mostrar u ocultar el menú
    function toggleDropdown() {
        var menu = document.getElementById("country-selector");
        var button = document.getElementById("country-button");
      
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      
        // Agrega un evento de clic al documento para ocultar el menú si se hace clic en otro lugar
        document.addEventListener("click", function (event) {
          if (event.target !== button && event.target !== menu) {
            menu.style.display = "none";
          }
        });
      }
      
      // Agrega un evento de clic al botón para mostrar u ocultar el menú
      document.getElementById("country-button").addEventListener("click", toggleDropdown);  
  });