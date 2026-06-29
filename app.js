const summitData = {
  kpis: [
    { label: "Frentes operativos", value: "16", detail: "Direccion + areas maestras", tone: "purple" },
    { label: "Tareas base", value: "333", detail: "Checklist antes, durante y despues", tone: "blue" },
    { label: "Stands numerados", value: "31", detail: "Diamante, Gold y Silver", tone: "green" },
    { label: "Ocupados", value: "20", detail: "Confirmados en mapa operativo", tone: "violet" },
    { label: "Go / No-Go", value: "10", detail: "Hitos de aprobacion ejecutiva", tone: "amber" },
    { label: "Campos abiertos", value: "21", detail: "No se tiene claro / por asignar", tone: "red" }
  ],
  priorities: [
    "Cruzar sponsor x pago x stand x beneficio x pieza x delegacion.",
    "Confirmar pagos CIP, presupuesto maestro, costos finales y caja disponible.",
    "Cerrar agenda, speakers, moderadores, guia de ponente y PPT maestra.",
    "Probar link de ventas, pagos, GHL, QR, app, registro y fallback manual.",
    "Resolver 720BIM, modulo SENCICO, stand 30 y espacios libres Diamante/Gold.",
    "Validar proveedores criticos: transmision, credenciales, portico, banners, luces y acreditacion."
  ],
  ownerLoad: [
    { owner: "Erika", scope: "Sponsors, experiencia, venue, proveedores", load: 95 },
    { owner: "Paola", scope: "Seguimiento, reportes, control y evidencias", load: 82 },
    { owner: "Fabrizio", scope: "Academico, speakers, paneles y guion", load: 86 },
    { owner: "Daniella", scope: "CIP, institucional, programa y coordinacion", load: 78 },
    { owner: "Anggie", scope: "Marketing, narrativa, piezas y difusion", load: 76 },
    { owner: "Marlon", scope: "Web, audiovisual, cabina y demos", load: 73 },
    { owner: "Yudely", scope: "Web, app, pagos y customer journey", load: 68 },
    { owner: "Genesis", scope: "Ventas presenciales y stand AECODE", load: 64 },
    { owner: "Julie", scope: "Pagos, facturacion, costos y caja", load: 62 },
    { owner: "Jessica", scope: "GHL, automatizaciones y performance", load: 60 }
  ],
  areas: [
    {
      id: "gobierno",
      title: "Gobierno operativo y direccion general",
      owner: "Alejandro",
      support: "Erika, Paola, Daniella, Fabrizio, Anggie, Julie, Yudely, Marlon, Jessica, Genesis",
      maturity: 72,
      objective: "Operar el Summit con una sola matriz de control, decisiones claras y corte P0 diario.",
      before: [
        "Definir RACI final por area y owner de cada canal.",
        "Aprobar modelo de negocio, pricing, presupuesto, experiencia, agenda y plan comercial.",
        "Ejecutar revision diaria P0 con bloqueos, responsable, fecha y decision requerida.",
        "Definir que decide Alejandro y que decide cada owner."
      ],
      during: [
        "Operar sala de control con responsables por bloque.",
        "Resolver bloqueos criticos: speakers, sponsors, pagos, registro, tecnologia y venue.",
        "Validar calidad de experiencia y reputacion en tiempo real."
      ],
      after: [
        "Cerrar reporte ejecutivo maximo 72 horas despues.",
        "Medir ventas, sponsors, asistentes, leads, prensa, NPS, contenido y alianzas.",
        "Activar postventa, renovaciones, capacitaciones B2B y siguiente edicion."
      ],
      risks: [
        "Decision dispersa entre Miro, WhatsApp, Sheets, Drive y Obsidian.",
        "Owners no claros en tareas criticas.",
        "No se tiene claro que frentes escalan a Alejandro y cuales resuelve cada squad."
      ],
      evidence: "Plan maestro y organizacion integral por areas.",
      urgency: "Alta"
    },
    {
      id: "finanzas",
      title: "Modelo de negocio, presupuesto y finanzas",
      owner: "Alejandro + Julie + Administracion + Erika",
      support: "Paola, Genesis",
      maturity: 58,
      objective: "Asegurar viabilidad financiera con ingresos, costos, margen, caja y compromisos trazados.",
      before: [
        "Definir presupuesto maestro detallado.",
        "Separar ingresos por sponsors, tickets, VIP, delegaciones, B2B training y stands.",
        "Consolidar costos CIP, audiovisual, proveedores, staff, credenciales, merch, impresion, banners, transmision y tecnologia.",
        "Definir punto de equilibrio y flujo de caja proyectado.",
        "Confirmar sponsors pagados, facturados, pago parcial, correo enviado y pendientes."
      ],
      during: [
        "Controlar gastos no previstos.",
        "Registrar ventas de ultimo momento y comprobantes.",
        "Evitar compras sin owner, cotizacion o aprobacion."
      ],
      after: [
        "Reporte financiero real vs proyectado.",
        "Sponsors pendientes de cobro.",
        "ROI por canal comercial y lecciones de presupuesto."
      ],
      risks: [
        "Sponsors confirmados sin pago.",
        "Costos de produccion subestimados.",
        "Compras urgentes sin cotizacion.",
        "Falta de flujo de caja para proveedores."
      ],
      evidence: "Corte administrativo Julie y CRM sponsors.",
      urgency: "Critica"
    },
    {
      id: "estrategia",
      title: "Estrategia, posicionamiento y seguimiento",
      owner: "Alejandro + Anggie + Fabrizio + Erika",
      support: "Marketing, academico, sponsors y direccion",
      maturity: 66,
      objective: "Posicionar el Summit como evento de autoridad en IA aplicada a construccion AEC.",
      before: [
        "Definir documento de vision y propuesta de valor.",
        "Definir publico por segmento: asistentes, VIP, sponsors, delegaciones, academia, empresas y prensa.",
        "Aprobar narrativa oficial: IA, construccion, productividad, futuro AEC, AECODE, GEN+ y ThesIA.",
        "Crear tablero de seguimiento diario y semanal."
      ],
      during: [
        "Asegurar que agenda, speakers, stands, sponsors y experiencia comuniquen la narrativa.",
        "Monitorear si el evento se percibe premium, tecnologico y util.",
        "Capturar frases, momentos y pruebas de autoridad."
      ],
      after: [
        "Convertir el evento en reportes, clips, casos, testimonios, articulos y ofertas B2B.",
        "Crear resumen ejecutivo para sponsors y aliados.",
        "Preparar campana 'lo que dejo el Summit'."
      ],
      risks: [
        "Evento disperso sin narrativa central.",
        "Mucha logistica y poca autoridad.",
        "No capturar evidencia para post-evento."
      ],
      evidence: "Plan maestro, marketing y agenda academica.",
      urgency: "Alta"
    },
    {
      id: "sponsors",
      title: "Sponsors, comunicacion, alianzas y comercial",
      owner: "Erika",
      support: "Paola, Julie, Genesis, Anggie, Daniella",
      maturity: 61,
      objective: "Cerrar sponsors, cumplir beneficios, activar delegaciones y convertir relaciones en pipeline B2B.",
      before: [
        "Actualizar CRM comercial vivo.",
        "Clasificar sponsors: pagado, facturado, pendiente, caliente, frio y descartado.",
        "Solicitar listas de delegaciones e invitados.",
        "Confirmar beneficios contratados por sponsor.",
        "Confirmar ubicacion de stands y difusion del evento.",
        "Priorizar PDK, Llosa, Pacasmayo, Aubuild y pendientes.",
        "Resolver 720BIM y SENCICO."
      ],
      during: [
        "Recibir sponsors y validar cumplimiento de beneficios.",
        "Acompanhar activaciones y capturar leads B2B.",
        "Documentar conversaciones comerciales.",
        "Invitar a capacitaciones corporativas y B2B Training AI."
      ],
      after: [
        "Enviar agradecimiento y reporte de beneficios.",
        "Entregar fotos, leads, menciones y evidencia.",
        "Agendar reuniones post-evento y ofrecer renovaciones."
      ],
      risks: [
        "Sponsor paga pero no recibe beneficio.",
        "Sponsor tiene stand pero no hay flujo de visitantes.",
        "Sponsor no entrega delegaciones.",
        "Falta de seguimiento post-evento."
      ],
      evidence: "CRM Sponsors y mapa de stands.",
      urgency: "Critica"
    },
    {
      id: "legal",
      title: "Legal, permisos y cumplimiento",
      owner: "Daniella + Administracion",
      support: "Responsable legal operativo por asignar",
      maturity: 44,
      objective: "Reducir riesgo contractual, reputacional, uso de imagen, datos personales y permisos.",
      before: [
        "Revisar contrato CIP.",
        "Revisar contratos y propuestas de proveedores.",
        "Revisar acuerdos con sponsors.",
        "Definir autorizacion de uso de imagen.",
        "Validar proteccion de datos para registro, app y leads.",
        "Confirmar permisos de venue, zonas restringidas, seguridad e ingreso."
      ],
      during: [
        "Controlar acceso a zonas restringidas.",
        "Tener protocolo ante incidentes.",
        "Validar autorizacion para fotos, videos y entrevistas.",
        "Evitar promesas comerciales no documentadas."
      ],
      after: [
        "Archivar contratos, comprobantes y autorizaciones.",
        "Consolidar incidentes legales si existieron.",
        "Revisar uso posterior de imagenes y datos."
      ],
      risks: [
        "Uso de imagen sin autorizacion.",
        "Datos personales sin control.",
        "Sponsor con beneficio no formalizado.",
        "Proveedor sin acuerdo claro.",
        "No se tiene claro el responsable legal operativo."
      ],
      evidence: "Checklist legal y permisos.",
      urgency: "Alta"
    },
    {
      id: "academico",
      title: "Academico, contenido y programa",
      owner: "Fabrizio + Daniella",
      support: "Erika, Paola, Anggie, Marlon",
      maturity: 63,
      objective: "Cerrar agenda, speakers, moderadores, paneles, guias, PPTs y narrativa academica.",
      before: [
        "Confirmar agenda precongreso 8 y 9 de julio, 12:00 p.m. a 3:00 p.m.",
        "Confirmar 4 ponencias: 1 top + 3 internacionales.",
        "Confirmar miercoles: Carlos Ortiz, Braghan Paramanthan, Carolina Briones, Alex Morris, Bruno Capuano.",
        "Confirmar jueves: Martin Fischer, Ruben Fratini, Nestor Jaimez, Leonardo Rischmoller.",
        "Confirmar moderadores: Caterine Ricaldi, Manuel Aguilar, Santiago Ruiz, Saul Ortiz, Jose Carlos Lima, Ronald Barzola, Lilimar Rivera.",
        "Crear guia del ponente, guia de moderador y banco de preguntas de paneles.",
        "Actualizar sheet de ponentes y cerrar PPT maestra."
      ],
      during: [
        "Controlar agenda minuto a minuto.",
        "Gestionar llegada de speakers.",
        "Coordinar WhatsApp Business de ponentes.",
        "Asegurar transiciones entre bloques.",
        "Registrar insights, frases y preguntas clave."
      ],
      after: [
        "Enviar agradecimientos y pedir autorizacion para clips.",
        "Recopilar PPTs finales.",
        "Convertir paneles en blogs, clips, papers, posts y reportes."
      ],
      risks: [
        "Speakers sin confirmacion formal.",
        "Moderadores sin brief.",
        "PPTs desalineados.",
        "Agenda sin minuto a minuto.",
        "No se tiene claro el owner final de PPT maestra."
      ],
      evidence: "Team Academico - Pendientes.",
      urgency: "Critica"
    },
    {
      id: "web",
      title: "Desarrollo Web AECODE",
      owner: "Marlon + Yudely",
      support: "Fabrizio, Jessica, Anggie",
      maturity: 69,
      objective: "Asegurar que la web convierta, informe y soporte el flujo comercial.",
      before: [
        "Validar landing Summit.",
        "Publicar agenda final.",
        "Cargar sponsors, partners, speakers y aliados.",
        "Validar CTA, links de ventas, metodos de pago y responsive.",
        "Validar evento en web del CIP.",
        "Validar formularios, WhatsApp links, tracking y sincronizacion GHL."
      ],
      during: [
        "Monitorear fallas de web, links y formularios.",
        "Actualizar informacion si hay cambios criticos.",
        "Soportar trafico del evento.",
        "Validar QR o rutas desde evento hacia web."
      ],
      after: [
        "Cambiar landing a modo post-evento.",
        "Publicar fotos, resumen, proximos cursos y formulario B2B.",
        "Capturar leads residuales y activar remarketing."
      ],
      risks: [
        "Link de ventas roto.",
        "Agenda desactualizada.",
        "Sponsor o speaker mal publicado.",
        "Falta de tracking."
      ],
      evidence: "TEAM WEB SUMMIT y plan maestro.",
      urgency: "Alta"
    },
    {
      id: "tecnologia",
      title: "Tecnologia, automatizacion, data y productividad",
      owner: "Emanuel + Yudely + Jessica + Marlon",
      support: "Anderson, Fabrizio",
      maturity: 57,
      objective: "Que registro, app, QR, leads, encuestas, automatizaciones y data funcionen antes, durante y despues.",
      before: [
        "Validar GHL Automation Summit.",
        "Probar lead -> CRM -> seguimiento -> venta.",
        "Definir tags y pipelines.",
        "Validar app, onboarding, check-in, QR y escaneo.",
        "Definir preguntas, encuestas y votaciones.",
        "Confirmar AECODITO AI APP.",
        "Definir dashboard de asistentes, sponsors y ventas."
      ],
      during: [
        "Monitorear registro y check-in.",
        "Capturar leads por stand, QR y app.",
        "Activar encuestas y votaciones.",
        "Resolver fallas tecnicas.",
        "Consolidar data en tiempo real."
      ],
      after: [
        "Enviar secuencias post-evento.",
        "Segmentar asistentes por interes.",
        "Activar ofertas: diplomados, AI Talent, B2B Training y comunidad.",
        "Generar dashboard final de conversion."
      ],
      risks: [
        "QR o registro falla.",
        "Leads no trazados.",
        "GHL no conecta con ventas.",
        "App no usada durante evento.",
        "No se tiene claro el responsable final de registro QR y credenciales."
      ],
      evidence: "TEAM AUTOMATIZACIONES Y DATA.",
      urgency: "Critica"
    },
    {
      id: "marketing",
      title: "Marketing y difusion",
      owner: "Anggie + Jessica",
      support: "Enma, Erika, Fabrizio, Genesis",
      maturity: 67,
      objective: "Aumentar asistencia, ventas, autoridad y visibilidad antes, durante y despues.",
      before: [
        "Crear calendario editorial.",
        "Crear piezas de speakers, sponsors y precongreso.",
        "Configurar ads, pauta y mail marketing.",
        "Ejecutar difusion LinkedIn, Instagram, TikTok, WhatsApp y grupos.",
        "Crear kit de publicaciones para speakers y moderadores.",
        "Crear flyers CIP, campanas VIP, free -> VIP y delegaciones corporativas."
      ],
      during: [
        "Cobertura en vivo: historias, reels, entrevistas, fotos y clips.",
        "Publicaciones de speakers y sponsors.",
        "Capturar momentos de autoridad.",
        "Activar llamados a compra, comunidad y cursos."
      ],
      after: [
        "Post resumen, clips por speaker y post de sponsors.",
        "Recap ejecutivo, blog SEO y campana de leads post-evento.",
        "Remarketing por segmento."
      ],
      risks: [
        "Publicar sin datos correctos.",
        "No capturar contenido suficiente.",
        "No conectar marketing con ventas.",
        "No se tiene claro el calendario final de publicaciones por sponsor y speaker."
      ],
      evidence: "TEAM Marketing Especial Summit.",
      urgency: "Alta"
    },
    {
      id: "ux",
      title: "Experiencia de usuario durante el evento",
      owner: "Erika + Yudely",
      support: "Genesis, Adriana, Paola, Marlon",
      maturity: 56,
      objective: "Que el asistente entienda que hacer, donde ir, que valor recibe y como comprar o conectar.",
      before: [
        "Disenar flujo por tipo de usuario: free, VIP, sponsor, delegacion, ponente y staff.",
        "Definir registro, credencial, mapa, agenda, totems y senaletica.",
        "Definir zona VIP, networking, feria y auditorio.",
        "Definir pasaporte/gamificacion.",
        "Preparar customer journey fisico/digital y fallback manual."
      ],
      during: [
        "Guiar ingreso y registro.",
        "Dirigir flujo hacia feria empresarial.",
        "Activar networking y stands.",
        "Monitorear fricciones.",
        "Resolver dudas con staff y medir satisfaccion rapida."
      ],
      after: [
        "Enviar encuesta NPS.",
        "Enviar recursos y proximos pasos.",
        "Segmentar oportunidades comerciales.",
        "Analizar puntos de friccion."
      ],
      risks: [
        "Asistente se pierde.",
        "Registro lento.",
        "VIP no percibe diferencia.",
        "Stands con poco trafico."
      ],
      evidence: "TEAM EXPERIENCIA USUARIO.",
      urgency: "Critica"
    },
    {
      id: "feria",
      title: "Feria empresarial y experiencia B2B/B2C",
      owner: "Erika + Genesis + Paola",
      support: "Marlon, Yary, Anggie, Enma",
      maturity: 62,
      objective: "Que la feria genere leads, sponsor value, ventas y percepcion tecnologica.",
      before: [
        "Confirmar mapa de stands.",
        "Cerrar 720BIM y SENCICO.",
        "Cruzar stands con pago, beneficio y requerimientos.",
        "Preparar mapa publico y mapa operativo interno.",
        "Disenar stand AECODE 03-04 y stand GEN+ / Vision Pro AI 27.",
        "Definir guiones comerciales, flujo de leads, demos y material impreso."
      ],
      during: [
        "Operar stand AECODE.",
        "Capturar leads.",
        "Activar demos Vision Pro / iCode / AI.",
        "Guiar asistentes hacia sponsors.",
        "Medir trafico por stand y cerrar ventas B2C / oportunidades B2B."
      ],
      after: [
        "Entregar leads.",
        "Reportar trafico e interaccion.",
        "Agendar reuniones B2B.",
        "Enviar ofertas de capacitacion, diplomados y comunidad."
      ],
      risks: [
        "Stand sin personal preparado.",
        "Sponsors sin trafico.",
        "Leads no capturados.",
        "Demo tecnologica falla."
      ],
      evidence: "Mapa de stands y feria empresarial.",
      urgency: "Alta"
    },
    {
      id: "logistica",
      title: "Logistica y produccion audiovisual",
      owner: "Erika + Marlon",
      support: "Proveedor audiovisual, Daniella",
      maturity: 52,
      objective: "Que venue, transmision, audio, video, pantallas, energia y montaje funcionen sin friccion.",
      before: [
        "Confirmar proveedor audiovisual, transmision y electricidad.",
        "Confirmar pantallas, microfonos, audio, camaras y ubicacion de cabina.",
        "Confirmar grabacion, backups y montaje de stands.",
        "Ejecutar ensayo tecnico general y checklist firmado."
      ],
      during: [
        "Operar audio, video y transmision.",
        "Monitorear fallas.",
        "Controlar cambios de PPT.",
        "Grabar contenido.",
        "Coordinar ponentes con cabina."
      ],
      after: [
        "Descargar y respaldar grabaciones.",
        "Entregar material a marketing.",
        "Reportar incidencias tecnicas."
      ],
      risks: [
        "Falla de internet.",
        "Falla de audio.",
        "PPTs no precargados.",
        "Energia insuficiente."
      ],
      evidence: "TEAM LOGISTICA Y PRODUCCION AUDIOVISUAL.",
      urgency: "Critica"
    },
    {
      id: "proveedores",
      title: "Proveedores y cotizaciones - Experiencia evento",
      owner: "Erika + Adriana + Administracion",
      support: "Marlon, Enma, Julie",
      maturity: 49,
      objective: "Cerrar proveedores con costo, alcance, fecha, contacto y evidencia.",
      before: [
        "Cotizar langers, credenciales, robot fotografico, impresion rapida de fotos y stickers.",
        "Cotizar luces, CE Corporacion Eventos, banners, portico, hologramas y acreditacion.",
        "Cotizar transmision audiovisual.",
        "Seleccionar proveedores, confirmar fechas de entrega y registrar todo en matriz."
      ],
      during: [
        "Supervisar entrega y montaje.",
        "Resolver incidencias.",
        "Controlar pagos o saldos."
      ],
      after: [
        "Cerrar pagos.",
        "Evaluar proveedores.",
        "Guardar contactos recomendados."
      ],
      risks: [
        "Cotizaciones incompletas.",
        "Proveedor no llega.",
        "Costos exceden presupuesto.",
        "No hay responsable por proveedor."
      ],
      evidence: "PROVEEDORES Y COTIZACIONES.",
      urgency: "Alta"
    },
    {
      id: "seguridad",
      title: "Seguridad, permisos y cumplimiento",
      owner: "Daniella + Erika",
      support: "Responsable de seguridad por asignar",
      maturity: 42,
      objective: "Controlar ingreso, permisos, zonas, incidentes y cumplimiento.",
      before: [
        "Confirmar permisos CIP.",
        "Confirmar seguridad de ingreso.",
        "Definir zonas restringidas.",
        "Definir control VIP, sponsors, ponentes y staff.",
        "Preparar protocolo de incidentes.",
        "Confirmar senaletica, circulacion y evacuacion."
      ],
      during: [
        "Controlar acceso.",
        "Manejar incidentes.",
        "Proteger zonas VIP, ponentes y backstage.",
        "Coordinar con seguridad del venue."
      ],
      after: [
        "Registrar incidentes.",
        "Evaluar operacion de seguridad."
      ],
      risks: [
        "Acceso desordenado.",
        "Personas sin credencial.",
        "Zonas criticas sin control.",
        "Incidente sin protocolo.",
        "No se tiene claro el responsable de seguridad/permisos."
      ],
      evidence: "TEAM SEGURIDAD PERMISOS.",
      urgency: "Alta"
    },
    {
      id: "edecanes",
      title: "Edecanes y embajadores",
      owner: "Erika + Paola",
      support: "Adriana",
      maturity: 54,
      objective: "Tener equipo de apoyo entrenado por zona y flujo.",
      before: [
        "Confirmar lista de edecanes y roles por zona.",
        "Definir lider de edecanes.",
        "Entrenar recepcion, registro, VIP, ponentes, sponsors, feria y sala.",
        "Confirmar beneficios: certificado, camisa y mesa de dialogo.",
        "Visita al venue con equipo y manual rapido."
      ],
      during: [
        "Recepcion de asistentes.",
        "Apoyo en registro.",
        "Escolta de ponentes.",
        "Apoyo VIP.",
        "Orientacion en feria.",
        "Control de flujos y comunicacion interna."
      ],
      after: [
        "Agradecimiento.",
        "Certificados.",
        "Feedback operativo."
      ],
      risks: [
        "Edecanes sin contexto.",
        "Roles duplicados.",
        "Nadie controla transito de ponentes.",
        "Falta de comunicacion interna."
      ],
      evidence: "TEAM EDECANES Y EMBAJADORES.",
      urgency: "Media"
    },
    {
      id: "ventas",
      title: "Experiencia B2C y ventas de producto AECODE",
      owner: "Genesis + Anggie + Erika",
      support: "Talia, Jessica, Fabrizio, Marlon",
      maturity: 59,
      objective: "Convertir asistentes en ventas de Summit VIP, diplomados, cursos, comunidad, IA, AECODE F3 y B2B Training.",
      before: [
        "Definir productos a vender, precios y promociones.",
        "Preparar guiones comerciales y entrenar equipo de stand.",
        "Preparar brochures, volantes, PPTs, QR, ruleta, apps y base de datos.",
        "Definir objetivos de leads y ventas.",
        "Configurar GHL para seguimiento.",
        "Preparar stand AECODE con banners, precios, impresos, apps, dipticos, pantalla y reunion previa."
      ],
      during: [
        "Capturar leads en stand.",
        "Aplicar guion de diagnostico rapido.",
        "Ofrecer producto adecuado.",
        "Cerrar ventas o agendar seguimiento.",
        "Activar demos y ruleta.",
        "Registrar fuente del lead."
      ],
      after: [
        "Seguimiento 24h.",
        "Campanas por segmento.",
        "Ofertas de cierre.",
        "Reporte de conversion.",
        "Feedback a marketing y academico."
      ],
      risks: [
        "Stand bonito sin cierre comercial.",
        "Leads sin seguimiento.",
        "Equipo no domina productos.",
        "Ofertas no claras."
      ],
      evidence: "Reporte Genesis y plan de stand AECODE.",
      urgency: "Alta"
    }
  ],
  stands: [
    {
      zone: "Diamante",
      total: 11,
      occupied: 5,
      free: 6,
      occupiedList: ["01 ACEROS AREQUIPA", "02 HANNAH", "03 AECODE", "04 AECODE", "05 BETON DECKEN"],
      pending: ["06-11 libres / por asignar"],
      risk: "Definir si los espacios libres se venden, reservan o se usan para experiencia/operacion."
    },
    {
      zone: "Gold",
      total: 11,
      occupied: 7,
      free: 3,
      occupiedList: ["12 PORTA", "14 GRUPO CPS", "15 Bimmers", "16 KONSTRU360", "17 AIC SENSORS", "18 Revizto", "31 Telematica"],
      pending: ["720BIM falta ubicar", "SENCICO modulo", "Numeros libres exactos por confirmar"],
      risk: "Hay discrepancia operativa: 7 ubicados, 3 libres reportados y 720BIM pendiente."
    },
    {
      zone: "Silver",
      total: 9,
      occupied: 8,
      free: 1,
      occupiedList: ["22 WAYKI", "23 BILDIN", "24 Gleeds", "25 ACRE", "26 Axiora AI", "27 GEN+ / Vision Pro AI", "28 AF ROBOTIC", "29 Obralink"],
      pending: ["30 libre / por asignar"],
      risk: "GEN+ / Vision Pro AI necesita validar internet, energia, pantalla, demo y responsables."
    }
  ],
  goNoGo: [
    { title: "Estrategia y finanzas", items: ["Vision aprobada", "Publico definido", "Modelo financiero aprobado", "RACI definido"] },
    { title: "Venue y marca", items: ["Contrato CIP firmado", "Plano validado", "Branding aprobado", "Mockup visual aprobado"] },
    { title: "Comercial", items: ["CRM activo", "Paquetes definidos", "Sponsors priorizados", "Reporte semanal"] },
    { title: "Marketing y ticketing", items: ["Landing activa", "Sistema de venta activo", "Campanas activas", "Mail marketing activo"] },
    { title: "Academico", items: ["Ejes definidos", "70% ponentes confirmados", "Cartas enviadas", "Bio y fotos recolectadas"] },
    { title: "Produccion", items: ["Audiovisual confirmado", "Internet confirmado", "Edecanes confirmados", "Zona sponsors disenada"] },
    { title: "Experiencia digital", items: ["App disenada", "Streaming definido", "Acreditacion definida", "Certificados automatizados"] },
    { title: "Experiencia final", items: ["Escenario final", "Circulacion final", "Render final", "Plan de crisis"] },
    { title: "Ensayo tecnico", items: ["Streaming", "Audio e iluminacion", "Internet", "Simulacion agenda"] },
    { title: "Final", items: ["Finanzas consolidadas", "Sponsors finales", "Ponentes finales", "Proveedores confirmados"] }
  ],
  risks: [
    "Sponsors confirmados sin pago o sin beneficio cruzado.",
    "Registro QR, GHL o app pueden fallar sin fallback manual.",
    "PPT maestra, speakers y moderadores todavia tienen responsables o confirmaciones abiertas.",
    "Mapa Gold requiere cierre por 720BIM, SENCICO y libres exactos.",
    "Proveedores criticos pueden no tener cotizacion final, fecha y owner.",
    "No capturar evidencia visual/post-evento reduce ROI de marketing y sponsors.",
    "Si la zona VIP no se diferencia, el ticket premium pierde valor percibido.",
    "Si stand AECODE no tiene guion y data, se pierde conversion B2C."
  ],
  openFields: [
    "No se tiene claro el responsable final de PPT maestra.",
    "No se tiene claro el responsable unico de WhatsApp Business.",
    "No se tiene claro el responsable final de pagos con CIP.",
    "No se tiene claro el responsable final de registro QR y credenciales.",
    "No se tiene claro el responsable de seguridad/permisos.",
    "No se tiene claro el responsable legal operativo.",
    "No se tiene claro si todas las demos tecnologicas estan confirmadas.",
    "No se tiene claro si todos los proveedores tienen cotizacion final.",
    "No se tiene claro si todos los sponsors con stand estan pagados.",
    "No se tiene claro si el mapa publico sera igual al mapa operativo.",
    "No se tiene claro si los textos pequenos del Miro contienen tareas adicionales no capturadas."
  ]
};

const state = {
  filter: "all",
  search: ""
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function renderKpis() {
  const grid = qs("#kpiGrid");
  grid.innerHTML = summitData.kpis
    .map(
      (kpi) => `
      <article class="kpi-card tone-${kpi.tone}">
        <span>${kpi.label}</span>
        <strong>${kpi.value}</strong>
        <p>${kpi.detail}</p>
      </article>`
    )
    .join("");
}

function renderPriorities() {
  qs("#priorityList").innerHTML = summitData.priorities.map((item) => `<li>${item}</li>`).join("");
}

function renderOwnerBars() {
  qs("#ownerBars").innerHTML = summitData.ownerLoad
    .map(
      (item) => `
      <div class="owner-row">
        <div>
          <strong>${item.owner}</strong>
          <span>${item.scope}</span>
        </div>
        <div class="bar" aria-label="Carga ${item.load}%">
          <span style="width:${item.load}%"></span>
        </div>
      </div>`
    )
    .join("");
}

function renderAreaBars() {
  const ordered = [...summitData.areas].sort((a, b) => a.maturity - b.maturity);
  qs("#areaBars").innerHTML = ordered
    .map(
      (area) => `
      <a class="area-bar-row" href="#area-${area.id}">
        <span>${area.title}</span>
        <div class="bar" aria-label="Madurez ${area.maturity}%">
          <span style="width:${area.maturity}%"></span>
        </div>
        <strong>${area.maturity}%</strong>
      </a>`
    )
    .join("");
}

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function areaMatches(area) {
  const target = [
    area.title,
    area.owner,
    area.support,
    area.objective,
    area.before.join(" "),
    area.during.join(" "),
    area.after.join(" "),
    area.risks.join(" ")
  ]
    .join(" ")
    .toLowerCase();
  return target.includes(state.search.toLowerCase());
}

function renderAreas() {
  const grid = qs("#areasGrid");
  const filtered = summitData.areas.filter(areaMatches);

  grid.innerHTML = filtered
    .map((area, index) => {
      const showBefore = state.filter === "all" || state.filter === "before";
      const showDuring = state.filter === "all" || state.filter === "during";
      const showAfter = state.filter === "all" || state.filter === "after";
      const showRisks = state.filter === "all" || state.filter === "risks";

      return `
      <article class="area-card" id="area-${area.id}">
        <div class="area-card-head">
          <span class="area-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${area.title}</h3>
            <p>${area.objective}</p>
          </div>
          <span class="urgency urgency-${area.urgency.toLowerCase()}">${area.urgency}</span>
        </div>
        <div class="owner-line">
          <strong>Owner:</strong> ${area.owner}
          <span><strong>Soporte:</strong> ${area.support}</span>
        </div>
        <div class="maturity-line">
          <span>Madurez operativa</span>
          <div class="bar"><span style="width:${area.maturity}%"></span></div>
          <strong>${area.maturity}%</strong>
        </div>
        <div class="area-sections">
          ${showBefore ? `<section><h4>Antes</h4><ul>${listMarkup(area.before)}</ul></section>` : ""}
          ${showDuring ? `<section><h4>Durante</h4><ul>${listMarkup(area.during)}</ul></section>` : ""}
          ${showAfter ? `<section><h4>Despues</h4><ul>${listMarkup(area.after)}</ul></section>` : ""}
          ${showRisks ? `<section class="risk-block"><h4>Riesgos</h4><ul>${listMarkup(area.risks)}</ul></section>` : ""}
        </div>
        <footer class="area-footer">
          <span><strong>Evidencia:</strong> ${area.evidence}</span>
          <a href="#dashboard">Volver al dashboard</a>
        </footer>
      </article>`;
    })
    .join("");

  if (!filtered.length) {
    grid.innerHTML = `<article class="empty-state"><h3>No hay resultados</h3><p>Prueba con otro responsable, area o riesgo.</p></article>`;
  }
}

function renderStands() {
  qs("#standSummary").innerHTML = summitData.stands
    .map(
      (zone) => `
      <section class="stand-zone">
        <div class="stand-zone-head">
          <h3>Zona ${zone.zone}</h3>
          <span>${zone.occupied}/${zone.total} ocupados</span>
        </div>
        <div class="stand-meter" aria-label="Ocupacion ${Math.round((zone.occupied / zone.total) * 100)}%">
          <span style="width:${(zone.occupied / zone.total) * 100}%"></span>
        </div>
        <dl>
          <div><dt>Total</dt><dd>${zone.total}</dd></div>
          <div><dt>Ocupados</dt><dd>${zone.occupied}</dd></div>
          <div><dt>Libres</dt><dd>${zone.free}</dd></div>
        </dl>
        <h4>Confirmados</h4>
        <p>${zone.occupiedList.join(" · ")}</p>
        <h4>Pendientes</h4>
        <ul>${zone.pending.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="stand-risk">${zone.risk}</div>
      </section>`
    )
    .join("");
}

function renderGoNoGo() {
  qs("#goNoGoTimeline").innerHTML = summitData.goNoGo
    .map(
      (phase, index) => `
      <article class="timeline-item">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${phase.title}</h3>
        <ul>${phase.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

function renderRisks() {
  qs("#riskList").innerHTML = summitData.risks.map((risk) => `<li>${risk}</li>`).join("");
  qs("#openFields").innerHTML = summitData.openFields.map((field) => `<li>${field}</li>`).join("");
}

function bindInteractions() {
  qsa(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      state.filter = button.dataset.filter;
      renderAreas();
    });
  });

  qs("#areaSearch").addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderAreas();
  });

  qs("[data-action='print']").addEventListener("click", () => window.print());
}

function init() {
  renderKpis();
  renderPriorities();
  renderOwnerBars();
  renderAreaBars();
  renderAreas();
  renderStands();
  renderGoNoGo();
  renderRisks();
  bindInteractions();
}

document.addEventListener("DOMContentLoaded", init);
