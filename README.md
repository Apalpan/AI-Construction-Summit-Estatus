# AI Construction Summit 2026 - Estatus Integral

Micrositio ejecutivo para mostrar el estado operativo del AI Construction Summit 2026 por areas, responsables, riesgos, stands y criterios Go / No-Go.

## Que incluye

- Presentacion ejecutiva del estado del Summit.
- Resumen general: fechas, ubicacion, organizacion, formato y transmision.
- Mapa estrategico de marketing, speakers, UX, tecnologia, diseno, logistica, staff, contenido, aliados y audiovisual.
- Dashboard con KPIs, prioridades P0, owners y madurez por area.
- Checklist por area con antes, durante, despues y riesgos.
- Mapa de stands con lectura por zona: Diamante, Gold y Silver.
- Hitos Go / No-Go.
- Cronograma de fechas clave.
- Plan post-evento para evidencia, metricas, contenido e investigacion.
- Campos abiertos marcados como `No se tiene claro`.
- Modo impresion para exportar como PDF desde el navegador.

## Fuentes usadas

El contenido se consolido desde el vault de Alejandro Palpan:

- `Plan-Maestro-AI-Construction-Summit-Antes-Durante-Despues-2026.md`
- `AI-Construction-Summit-Checklist-Cierre-Operativo-2026-06-29.md`
- `AI-Construction-Summit-Organizacion-Integral-Areas-Roles-2026-06-29.md`
- `AI-Construction-Summit-Team-Academico-Pendientes-2026-06-29.md`
- `AI-Construction-Summit-Mapa-Stands-Confirmados-2026-06-29.md`
- `CRM-Sponsors-AI-Construction-Summit-2026.md`

## Uso local

Abrir `index.html` directamente o levantar un servidor estatico:

```bash
python -m http.server 5188
```

Luego abrir:

```text
http://127.0.0.1:5188/
```

## Estructura

```text
.
├── index.html
├── styles.css
├── app.js
├── assets/
└── README.md
```

## Actualizacion

La informacion principal vive en `app.js`, objeto `summitData`. Para actualizar el informe:

1. Cambiar KPIs, prioridades o areas en `summitData`.
2. Actualizar mapa o imagenes en `assets/`.
3. Publicar cambios en GitHub Pages.

## Criterio de producto

Esta web no es solo un informe visual. Esta pensada como una herramienta de direccion:

- Que esta pasando.
- Que importa.
- Que esta en riesgo.
- Que debe hacerse ahora.
- Que no esta claro todavia.
