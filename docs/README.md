## Loc@s por las bicis - Level 2

Partiendo del ejercicio Loc@s por las bicis cambiaremos la forma de mostrar los errores al usuario, en vez de mostrar los errores con un alert, Si algún campo presenta error debe informarse al usuario por medio de mensaje, (idealmente un span) que se posicione en del lado derecho del input como se muestra en la imagen.

1. Descarga los archivos en la sección de Descarga, descomprime y colócalos en tu carpeta llamada **bicis-locas-lvl2**   
2. En la consola posiciónate en la carpeta **bicis-locas-lvl2** e inicializa un repositorio en dicha carpeta
3. Crea un repositorio que se llame **bicis-locas-lvl2** en GITHUB, haz tu primer commit y sube los archivos al repositorio. 
4. Abre el archivo **js/main.js** y completa la función **validateForm**, (puedes usar las validaciones anteriores) recuerda que las validaciones de los campos son las siguientes:
- Todos los campos son obligatorios, excepto los dos últimos. 
- Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
- Para los campos nombre y apellido la primera letra debe ser mayúscula
- Validar que el campo email tenga un formato válido. Ej: name@domain.com
- El campo password debe tener al menos 6 caracteres
- El campo password no puede ser igual a "password" ó "123456" ó "098754"
- El valor seleccionado de bicis, debe ser una de las opciones presentadas

**NOTA: ** Recomendamos que el mensaje se añada con un span ya que los estilos ya están definidos.