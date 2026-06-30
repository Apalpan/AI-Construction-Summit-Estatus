// GEN+ v2.0
// MOCK GEN+ - conectar a API real. No contiene datos confidenciales de clientes.
const genPlusData = {
  jtbd: [
    {
      persona: "CEO Constructor",
      job: "Ver dinero, riesgo y decisiones de alto impacto en menos de 8 segundos."
    },
    {
      persona: "PM BIM/VDC",
      job: "Controlar S-Curve, clashes, RFIs, LOD y productividad sin perseguir hojas sueltas."
    },
    {
      persona: "Director Operaciones",
      job: "Detectar capacidad, bloqueos, agentes IA ejecutando y decisiones pendientes por owner."
    }
  ],
  businessKpis: [
    { label: "Decision time", value: "<9 min", delta: "45 min antes", tone: "success" },
    { label: "Adopcion diaria", value: "87%+", delta: "meta equipo", tone: "primary" },
    { label: "Valor en juego", value: "$2.4M", delta: "esta semana", tone: "warning" },
    { label: "SPI / CPI", value: "0.87 / 1.04", delta: "schedule en riesgo", tone: "critical" },
    { label: "Bloqueos", value: "2", delta: "permisos", tone: "critical" }
  ],
  projects: [
    { name: "Torre Platinum San Isidro - Etapa 3", spi: "0.94", cpi: "1.01", progress: "74%", status: "Controlado" },
    { name: "Hospital Vitarte - Fase MEP", spi: "0.87", cpi: "1.04", progress: "67%", status: "Riesgo permisos" },
    { name: "Via Expresa - Paquete 4", spi: "0.91", cpi: "0.98", progress: "58%", status: "Clashes criticos" }
  ],
  risks: [
    { label: "Clashes", value: "3", level: "critical" },
    { label: "RFIs", value: "7", level: "warning" },
    { label: "Permisos", value: "2", level: "critical" },
    { label: "Costo", value: "CPI 1.04", level: "success" },
    { label: "SPI", value: "0.87", level: "critical" },
    { label: "LOD", value: "En revision", level: "warning" }
  ],
  agents: [
    { name: "AgentFlow", state: "Activo", task: "Asignando responsable a RFI-231", tone: "success" },
    { name: "THESIA", state: "Activo", task: "Buscando evidencia normativa MEP", tone: "success" },
    { name: "VisionPro", state: "Activo", task: "Comparando avance fisico con evidencia visual", tone: "primary" },
    { name: "Cost Sentinel", state: "Revision", task: "Validando impacto de permisos", tone: "warning" }
  ],
  capacity: [
    { team: "BIM/VDC", load: 82 },
    { team: "Campo", load: 91 },
    { team: "Costos", load: 64 },
    { team: "IA/Automatizacion", load: 76 }
  ],
  decisions: [
    { action: "Aprobar plano P-EL-092", impact: "$420K destrabados", owner: "PM MEP" },
    { action: "Asignar agente a RFI-231", impact: "Reduce 2 dias de espera", owner: "AgentFlow" },
    { action: "Escalar permiso municipal", impact: "Evita desvio SPI", owner: "Direccion" }
  ],
  components: [
    "App Shell", "Mode Toggle", "KPI Tile", "S-Curve Card", "Risk Heatmap", "AI Agent Status",
    "Decision Queue", "Capacity Radial", "Command Bar", "AI Summary Panel", "Project Context", "Kanban Preview"
  ],
  commands: [
    { label: "Predecir retraso en Hospital Vitarte", hint: "IA / Riesgo", result: "Prediccion solicitada en modo demo." },
    { label: "Aprobar plano P-EL-092", hint: "Decision / MEP", result: "Accion simulada: requiere API real." },
    { label: "Asignar agente a RFI-231", hint: "AgentFlow", result: "AgentFlow asignado en modo demo." },
    { label: "Ver bloqueos que estan matando productividad", hint: "PMO", result: "Filtro aplicado sobre bloqueos criticos." },
    { label: "Crear reporte ejecutivo ISO 19650", hint: "THESIA", result: "Reporte simulado listo para conectar." }
  ]
};

const summitData = {
  kpis: [
    { label: "Frentes operativos", value: "17", detail: "Direccion + areas maestras", tone: "purple" },
    { label: "Tareas base", value: "333", detail: "Checklist antes, durante y despues", tone: "blue" },
    { label: "Stands numerados", value: "31", detail: "Diamante, Gold y Silver", tone: "green" },
    { label: "Ocupados", value: "20", detail: "Confirmados en mapa operativo", tone: "violet" },
    { label: "Go / No-Go", value: "10", detail: "Hitos de aprobacion ejecutiva", tone: "amber" },
    { label: "Campos abiertos", value: "21", detail: "No se tiene claro / por asignar", tone: "red" }
  ],
  eventInfo: [
    { label: "Nombre", value: "AI Construction Summit" },
    { label: "Congreso", value: "17 y 18 de julio" },
    { label: "Precongreso", value: "8 y 9 de julio" },
    { label: "Ubicacion", value: "CIP, San Isidro, Lima" },
    { label: "Organizacion", value: "AECODE | Ingenieria 4.0 & Programacion" },
    { label: "Formato", value: "Hibrido: presencial + Zoom" },
    { label: "Transmision", value: "Dual: 1 canal audio + 1 pantalla" }
  ],
  themes: [
    "Automatizacion e IA aplicada",
    "BIM avanzado",
    "Gemelos digitales",
    "Realidad virtual y aumentada",
    "Computer vision",
    "IoT",
    "Drones y robotica",
    "Construccion inteligente y conectada",
    "Productividad basada en datos"
  ],
  nextEvents: [
    "AI Construction Summit Edicion 3 - julio del proximo anio.",
    "Hackathon Vibe Coding AI AEC + Empresas - octubre."
  ],
  strategicTracks: [
    {
      title: "Marketing y difusion",
      owners: "Anggie + Jessica + Enma + Genesis",
      objective: "Activar demanda, asistencia, prueba social, ventas VIP y seguimiento multicanal.",
      items: [
        "GHL Automation para flujos Summit, VIP, free -> VIP y seguimiento comercial.",
        "Mail marketing, diseno de correos y secuencias por segmento.",
        "Landing pages con enrutado, CTA, pagos, tracking y WhatsApp.",
        "WhatsApp Business, grupos internos/externos y base de datos.",
        "Publicaciones de speakers con badge, agenda, copy y prueba social.",
        "Video promocional de 2 minutos y piezas de valor/comercial."
      ]
    },
    {
      title: "Speakers y moderadores",
      owners: "Fabrizio + Daniella + Erika + Paola",
      objective: "Cerrar agenda, confirmaciones, plantillas, guias, recepcion y control durante evento.",
      items: [
        "Precongreso miercoles 8: Carlos Ortiz, Braghan Paramanthan, Carolina Briones, Alex Morris, Bruno Capuano y panel.",
        "Precongreso jueves 9: Martin Fischer, Ruben Fratini, Nestor Jaimez y Leonardo Rischmoller.",
        "Moderadores: Caterine Ricaldi, Manuel Aguilar, Santiago Ruiz, Saul Ortiz, Jose Carlos Lima, Ronald Barzola y Lilimar Rivera.",
        "Seguimiento de estatus, numeros, cargos, empresas, fotos, titulos y peticiones adicionales.",
        "PPT plantilla, guia de presentacion y guia de moderacion.",
        "Recepcion y escolta: Julie, Ivana, Adriana y Piero."
      ]
    },
    {
      title: "Experiencia de usuario",
      owners: "Erika + Yudely + Genesis + Paola",
      objective: "Disenar el recorrido presencial y virtual para que cada usuario sepa donde ir, que hacer y como conectar.",
      items: [
        "Presencial: networking, encuestas, votaciones, dinamica de puentes y ruleta UX futuro.",
        "Virtual: Zoom con seguimiento, preguntas y transmision dual.",
        "AECODITO tamano real como punto de experiencia y marca.",
        "Ruta de AECODITO con canje: F3, descuentos y merchandising.",
        "Flujos diferenciados para free, VIP, sponsors, delegaciones, ponentes y staff.",
        "Fallback manual para registro, pagos, QR o app."
      ]
    },
    {
      title: "Tecnologia y demos",
      owners: "Emanuel + Marlon + Yudely + Erika",
      objective: "Mostrar tecnologia real y asegurar que app, demos, datos y automatizaciones funcionen sin friccion.",
      items: [
        "Confirmados: AF Robotics, Aecodito AI APP, robots UCV/ESAN, Glexco/Zox, lentes AR/VR, hologramas, ANIN VR, drones y totems.",
        "Stand GEN+: VisionPRO, Raspberry + Jetson, impresion 3D y demos de edge AI.",
        "Control por voz/acciones con Edge AI + Gemma 4 + Whisper.",
        "PPT de proyectos y agentes para GEN+.",
        "QR, networking digital, verificacion de pagos y reporte automatizado de boletas.",
        "Dashboard de asistentes, sponsors, leads, ventas y conversion."
      ]
    },
    {
      title: "Diseno y produccion",
      owners: "Yary + Adriana + Anggie + Enma",
      objective: "Producir todos los activos visuales, impresos, pantallas y elementos fisicos que sostienen la experiencia.",
      items: [
        "2 banners, 1 backing, piezas para pantallas y senaleticas.",
        "2 flyers con QR: uno de valor y uno comercial.",
        "Diapositivas, lanyards, certificados, tarjetas y OnePage AECODE.",
        "Aecodito 3D con QR.",
        "Piezas de speakers, sponsors, agenda, CIP y feria.",
        "Control visual de marca para AECODE, GEN+, ThesIA y Summit."
      ]
    },
    {
      title: "Logistica y coordinacion",
      owners: "Erika + Daniella + Marlon + Administracion",
      objective: "Asegurar venue, montaje, horarios, infraestructura, kit, registro y desmontaje.",
      items: [
        "CIP: viernes hasta 9pm, sabado hasta 7pm, publicacion web, pagos y facturacion.",
        "Stands: instalacion jueves 16, un dia antes, coordinando con evento previo; desmontaje domingo mediodia.",
        "Infraestructura: red electrica, WiFi, comunicadores, portico y stand de recepcion.",
        "Maquina de fotos, robot fotografico, polos, catering y kit.",
        "Kit: lanyards, folders, stickers, tarjetas y bolsas.",
        "Fotochecks con maquina y control de credenciales."
      ]
    },
    {
      title: "Equipo operativo y voluntarios",
      owners: "Erika + Paola + Adriana",
      objective: "Asignar roles claros para staff, edecanes, embajadores y soporte por zona.",
      items: [
        "Staff base: Yudely, Marlon, Anggie, Daniella, Erika, Fabrizio, Emanuel y Yary.",
        "Edecanes/voluntarios: Lizeth, Ana, Milagros, Cristhian, Piero, Margareth, Khris UPC, Angie Maravi, Sebastian, Felipe e Ivana.",
        "Roles por zona: recepcion, VIP, sponsors, ponentes, feria, cabina, sala y networking.",
        "Manual rapido y visita previa al venue.",
        "Comunicadores o sistema interno por canales.",
        "Beneficios: certificado, camisa y participacion."
      ]
    },
    {
      title: "Contenido academico y B2B",
      owners: "Fabrizio + Anggie + Erika + Genesis",
      objective: "Conectar contenido academico con productos F3, microlearning y capacitaciones corporativas.",
      items: [
        "Curso AI F3 Microlearning: fundamentos, overview y ejercicios.",
        "Microlearning, testeo y regalos: prompts, tips y trucos.",
        "Capsulas hasta domingo 6 y lanzamiento 10 de julio.",
        "B2B Training AI: lunes 20 de julio, 5pm a 9pm, auditorio 60 pax, sotano 4 CIP.",
        "Piezas, presentacion e invitacion a gerentes.",
        "Registro de datos, empresas y oportunidades B2B."
      ]
    },
    {
      title: "Aliados y proveedores",
      owners: "Erika + Paola + Administracion",
      objective: "Formalizar aliados, media partners, snacks, proveedores y compromisos de apoyo.",
      items: [
        "Aliados: OlimpiaBIM, ACRE y plataforma 360 por formalizar.",
        "5 empresas de snacks por coordinar.",
        "Proveedores de transmision, hologramas, acreditacion, banners, portico, luces y merchandising.",
        "Cada proveedor debe tener costo, contacto, fecha, alcance, decision y evidencia.",
        "Separar proveedor confirmado, por cotizar, descartado y pendiente de pago.",
        "Asegurar que administracion tenga factura, OS, comprobante y responsable."
      ]
    },
    {
      title: "Produccion audiovisual",
      owners: "Marlon + Daniella + proveedor audiovisual",
      objective: "Garantizar transmision, camaras, edicion, fotos, plantillas y respaldo de contenido.",
      items: [
        "Proveedor de transmision con cotizacion validada por Daniella y Marlon.",
        "Equipo de camaras y configuracion para modalidad hibrida.",
        "Templates DaVinci y flujo de edicion.",
        "Fotos a Google Drive con estructura por dia, bloque y sponsor.",
        "Hologramas y contenido para pantallas.",
        "Backups de grabacion, clips, entrevistas y testimonios."
      ]
    }
  ],
  priorities: [
    "Cruzar sponsor x pago x stand x beneficio x pieza x delegacion.",
    "Confirmar pagos CIP, presupuesto maestro, costos finales y caja disponible.",
    "Cerrar agenda, speakers, moderadores, guia de ponente y PPT maestra.",
    "Probar link de ventas, pagos, GHL, QR, app, registro y fallback manual.",
    "Resolver 720BIM, modulo SENCICO, stand 30 y espacios libres Diamante/Gold.",
    "Validar proveedores criticos: transmision, credenciales, portico, banners, luces y acreditacion.",
    "Cerrar experiencia AECODITO, demos tecnologicas, stand GEN+ y ruta de canje.",
    "Dejar listo el cronograma post-evento: fotos, clips, testimonios, metricas, investigacion y sponsors."
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
        "Actualizar sheet de ponentes y cerrar PPT maestra.",
        "Entregar plantilla PPT para speakers y controlar estatus de envio/recepcion.",
        "Definir protocolo de recepcion de speakers con Julie, Ivana, Adriana y Piero."
      ],
      during: [
        "Controlar agenda minuto a minuto.",
        "Gestionar llegada de speakers.",
        "Ejecutar recepcion, escolta y sala VIP para ponentes.",
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
        "Definir dashboard de asistentes, sponsors y ventas.",
        "Validar verificacion automatizada de pagos y reporte de boletas.",
        "Confirmar networking digital y trazabilidad de leads por stand."
      ],
      during: [
        "Monitorear registro y check-in.",
        "Capturar leads por stand, QR y app.",
        "Activar encuestas y votaciones.",
        "Resolver fallas tecnicas.",
        "Consolidar data en tiempo real.",
        "Soportar AECODITO AI APP, AR/VR, drones, robots y demos."
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
        "Crear flyers CIP, campanas VIP, free -> VIP y delegaciones corporativas.",
        "Configurar landing pages con enrutado por segmento.",
        "Preparar video promo de 2 minutos con copy, agenda y prueba social.",
        "Crear badges de speakers y publicaciones por agenda."
      ],
      during: [
        "Cobertura en vivo: historias, reels, entrevistas, fotos y clips.",
        "Publicaciones de speakers y sponsors.",
        "Capturar momentos de autoridad.",
        "Activar llamados a compra, comunidad y cursos.",
        "Amplificar networking, demos, feria, AECODITO y contenido de sponsors."
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
      id: "diseno-produccion",
      title: "Diseno y produccion de piezas",
      owner: "Yary + Adriana + Anggie",
      support: "Enma, Erika, Marlon, Fabrizio",
      maturity: 55,
      objective: "Cerrar todos los activos visuales, impresos, digitales y fisicos necesarios para que el evento se perciba premium, ordenado y comercial.",
      before: [
        "Cerrar 2 banners, 1 backing, piezas para pantallas y senaleticas.",
        "Crear 2 flyers con QR: uno de valor y uno comercial.",
        "Disenar diapositivas, lanyards, certificados, tarjetas y OnePage AECODE.",
        "Definir Aecodito 3D con QR.",
        "Preparar piezas para speakers, sponsors, agenda, CIP, feria y redes.",
        "Validar consistencia visual AECODE, GEN+, ThesIA y Summit."
      ],
      during: [
        "Asegurar que pantallas, banners, backing, senaleticas y piezas impresas esten visibles y correctas.",
        "Entregar piezas de apoyo a recepcion, stand AECODE, stand GEN+ y cabina.",
        "Resolver ajustes rapidos de piezas si cambia agenda, ponente o sponsor."
      ],
      after: [
        "Ordenar archivos finales editables y exportados.",
        "Entregar assets para post oficial, sponsors, speakers, clips y reporte ejecutivo.",
        "Guardar kit visual reutilizable para proxima edicion."
      ],
      risks: [
        "Piezas impresas con datos desactualizados.",
        "Falta de senaletica puede romper la experiencia de ingreso y circulacion.",
        "No tener backing, banners o pantallas listos reduce percepcion premium.",
        "Aecodito 3D con QR puede quedar como idea si no tiene owner y fecha de entrega."
      ],
      evidence: "Nuevo resumen ejecutivo y tablero de diseno/produccion.",
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
        "Preparar customer journey fisico/digital y fallback manual.",
        "Disenar dinamica de puentes, ruleta UX futuro, votaciones y encuestas.",
        "Definir Ruta de AECODITO con canje: F3, descuentos y merchandising."
      ],
      during: [
        "Guiar ingreso y registro.",
        "Dirigir flujo hacia feria empresarial.",
        "Activar networking y stands.",
        "Monitorear fricciones.",
        "Resolver dudas con staff y medir satisfaccion rapida.",
        "Operar experiencia virtual por Zoom con seguimiento y preguntas."
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
        "Definir guiones comerciales, flujo de leads, demos y material impreso.",
        "Confirmar stand GEN+: VisionPRO, Raspberry + Jetson, impresion 3D y control por voz/acciones.",
        "Preparar PPT de proyectos y agentes para GEN+."
      ],
      during: [
        "Operar stand AECODE.",
        "Capturar leads.",
        "Activar demos Vision Pro / iCode / AI.",
        "Activar demos Edge AI + Gemma 4 + Whisper si estan listas.",
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
        "Ejecutar ensayo tecnico general y checklist firmado.",
        "Validar horarios CIP: viernes hasta 9pm y sabado hasta 7pm.",
        "Coordinar instalacion de stands jueves 16 y desmontaje domingo mediodia.",
        "Validar red electrica, WiFi, comunicadores, portico y stand de recepcion."
      ],
      during: [
        "Operar audio, video y transmision.",
        "Monitorear fallas.",
        "Controlar cambios de PPT.",
        "Grabar contenido.",
        "Coordinar ponentes con cabina.",
        "Controlar transmision dual: 1 canal audio + 1 pantalla."
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
        "Seleccionar proveedores, confirmar fechas de entrega y registrar todo en matriz.",
        "Cerrar maquina de fotos, robot fotografico, polos, catering y kit.",
        "Confirmar kit: lanyards, folders, stickers, tarjetas, bolsas y fotochecks con maquina."
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
  milestones: [
    {
      date: "29-30 jun",
      title: "Cierres base",
      items: [
        "Cierres de diseno, flyers, base y ventas.",
        "Automatizacion + AI para seguimiento.",
        "Ajuste de mensajes, piezas y rutas comerciales."
      ]
    },
    {
      date: "1 jul",
      title: "Curso F3 completo",
      items: [
        "Estructura final del curso AI F3 Microlearning.",
        "Fundamentos, overview, ejercicios, testeo y regalos.",
        "Definir conexion con Summit, precongreso y ventas."
      ]
    },
    {
      date: "3 jul",
      title: "Camaras",
      items: [
        "Validar camaras, equipo tecnico y necesidades de transmision.",
        "Revisar compatibilidad con auditorio y feria.",
        "Cerrar responsables de grabacion y respaldo."
      ]
    },
    {
      date: "5 jul",
      title: "Cierre tecnico y comercial",
      items: [
        "Cotizacion transmision, demos y comunicaciones finales.",
        "Flyer AECODE, B2B, Stand GEN+, AR/VR, certificados, QR y ruleta.",
        "Confirmar proveedores, pantallas, cabina, portico y piezas criticas."
      ]
    },
    {
      date: "6 jul",
      title: "Capsulas F3",
      items: [
        "Terminar capsulas de microlearning.",
        "Validar regalos: prompts, tips y trucos.",
        "Preparar material de lanzamiento."
      ]
    },
    {
      date: "8-9 jul",
      title: "Precongreso",
      items: [
        "Ejecutar agenda 12:00 p.m. a 3:00 p.m.",
        "Operar speakers internacionales, paneles y moderadores.",
        "Capturar contenido y leads para Summit principal."
      ]
    },
    {
      date: "10 jul",
      title: "Lanzamiento curso",
      items: [
        "Lanzar curso AI F3 Microlearning.",
        "Activar piezas, landing, comunicacion y seguimiento.",
        "Conectar con funnel Summit, comunidad y B2B."
      ]
    },
    {
      date: "12 jul",
      title: "Ajustes QR",
      items: [
        "Ajustar QR, app, registro y verificacion de pagos.",
        "Probar flujo completo con fallback manual.",
        "Cerrar reporte de boletas automatizado."
      ]
    },
    {
      date: "16 jul",
      title: "Montaje stands",
      items: [
        "Instalacion de stands un dia antes.",
        "Coordinar con evento previo en CIP.",
        "Validar electricidad, WiFi, mobiliario, banners y senaletica."
      ]
    },
    {
      date: "17-18 jul",
      title: "Congreso",
      items: [
        "Ejecutar evento hibrido en CIP.",
        "Operar feria, demos, sponsors, UX presencial, Zoom y transmision dual.",
        "Capturar fotos, videos, testimonios, leads y ventas."
      ]
    },
    {
      date: "20 jul",
      title: "B2B Training AI",
      items: [
        "Lunes 20 de julio, 5pm a 9pm.",
        "Auditorio 60 pax, sotano 4 CIP.",
        "Invitacion a gerentes, registro de empresas y oportunidades B2B."
      ]
    }
  ],
  postEvent: [
    {
      title: "Comunicacion publica",
      items: [
        "Post oficial del Summit.",
        "Publicaciones de speakers y sponsors.",
        "Evidencia de agenda, feria, stands, demos y sala."
      ]
    },
    {
      title: "Contenido y autoridad",
      items: [
        "Fotos y videos organizados en Google Drive.",
        "Clips por speaker, panel, demo, sponsor y experiencia.",
        "Testimonios de asistentes, sponsors, ponentes y equipo."
      ]
    },
    {
      title: "Metricas y conversion",
      items: [
        "Metricas y graficas de asistencia, leads, ventas, sponsors y engagement.",
        "Conversion free -> VIP, stand -> lead, lead -> venta, sponsor -> reunion.",
        "Reporte de beneficios entregados por sponsor."
      ]
    },
    {
      title: "Investigacion AEC",
      items: [
        "Investigacion del nivel de AI en AEC.",
        "Insights por empresas, profesionales, tecnologias y barreras.",
        "Transformar resultados en blog, reporte, contenido y propuesta B2B."
      ]
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

function renderGenPlusCommandCenter() {
  qs("#genProjectStack").innerHTML = genPlusData.projects
    .map(
      (project, index) => `
      <button class="gen-project-card ${index === 1 ? "is-selected" : ""}" type="button">
        <strong>${project.name}</strong>
        <span>SPI ${project.spi} / CPI ${project.cpi} / Avance ${project.progress}</span>
        <small>${project.status}</small>
      </button>`
    )
    .join("");

  qs("#jtbdList").innerHTML = genPlusData.jtbd
    .map(
      (item) => `
      <article>
        <span>${item.persona}</span>
        <p>${item.job}</p>
      </article>`
    )
    .join("");

  qs("#genKpiRow").innerHTML = genPlusData.businessKpis
    .map(
      (kpi) => `
      <article class="gen-kpi gen-${kpi.tone}">
        <span>${kpi.label}</span>
        <strong>${kpi.value}</strong>
        <p>${kpi.delta}</p>
      </article>`
    )
    .join("");

  qs("#riskHeatmap").innerHTML = genPlusData.risks
    .map(
      (risk) => `
      <button class="heat-cell heat-${risk.level}" type="button">
        <strong>${risk.value}</strong>
        <span>${risk.label}</span>
      </button>`
    )
    .join("");

  qs("#agentStack").innerHTML = genPlusData.agents
    .map(
      (agent) => `
      <article class="agent-card agent-${agent.tone}">
        <div><strong>${agent.name}</strong><span>${agent.task}</span></div>
        <em>${agent.state}</em>
      </article>`
    )
    .join("");

  qs("#capacityPanel").innerHTML = genPlusData.capacity
    .map(
      (team) => `
      <div class="capacity-row">
        <div class="capacity-ring" style="--load:${team.load}%"><strong>${team.load}%</strong></div>
        <span>${team.team}</span>
      </div>`
    )
    .join("");

  qs("#decisionList").innerHTML = genPlusData.decisions
    .map(
      (decision) => `
      <article class="decision-action">
        <strong>${decision.action}</strong>
        <span>${decision.impact}</span>
        <button type="button">Simular accion</button>
        <small>Owner: ${decision.owner}</small>
      </article>`
    )
    .join("");

  qs("#componentList").innerHTML = genPlusData.components
    .map((component) => `<span>${component}</span>`)
    .join("");
}

function renderEventInfo() {
  qs("#eventInfoPanel").innerHTML = `
    <div class="card-heading">
      <span class="mini-label">Evento</span>
      <h3>Informacion general</h3>
    </div>
    <dl class="info-list">
      ${summitData.eventInfo
        .map((item) => `<div><dt>${item.label}</dt><dd>${item.value}</dd></div>`)
        .join("")}
    </dl>
  `;

  qs("#themesPanel").innerHTML = `
    <div class="card-heading">
      <span class="mini-label">Contenido</span>
      <h3>Temas principales</h3>
    </div>
    <div class="tag-cloud">
      ${summitData.themes.map((theme) => `<span>${theme}</span>`).join("")}
    </div>
  `;

  qs("#nextEventsPanel").innerHTML = `
    <div class="card-heading">
      <span class="mini-label">Expansion</span>
      <h3>Proximos eventos</h3>
    </div>
    <ul class="priority-list">
      ${summitData.nextEvents.map((event) => `<li>${event}</li>`).join("")}
    </ul>
  `;
}

function renderStrategicTracks() {
  qs("#strategicGrid").innerHTML = summitData.strategicTracks
    .map(
      (track, index) => `
      <article class="strategic-card">
        <div class="strategic-head">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${track.title}</h3>
            <p>${track.objective}</p>
          </div>
        </div>
        <div class="owner-line compact"><strong>Responsables:</strong> ${track.owners}</div>
        <ul>${listMarkup(track.items)}</ul>
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

function renderMilestones() {
  qs("#milestoneGrid").innerHTML = summitData.milestones
    .map(
      (milestone) => `
      <article class="milestone-card">
        <span>${milestone.date}</span>
        <h3>${milestone.title}</h3>
        <ul>${listMarkup(milestone.items)}</ul>
      </article>`
    )
    .join("");
}

function renderRisks() {
  qs("#riskList").innerHTML = summitData.risks.map((risk) => `<li>${risk}</li>`).join("");
  qs("#openFields").innerHTML = summitData.openFields.map((field) => `<li>${field}</li>`).join("");
}

function renderPostEvent() {
  qs("#postEventGrid").innerHTML = summitData.postEvent
    .map(
      (block) => `
      <article class="post-card">
        <h3>${block.title}</h3>
        <ul>${listMarkup(block.items)}</ul>
      </article>`
    )
    .join("");
}

function renderCommandResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const results = genPlusData.commands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes(normalized)
  );
  qs("#commandCount").textContent = `${results.length} acciones disponibles`;
  qs("#commandResults").innerHTML = results.length
    ? results
        .map(
          (command, index) => `
          <li>
            <button type="button" data-command-result="${index}">
              <strong>${command.label}</strong>
              <span>${command.hint}</span>
            </button>
          </li>`
        )
        .join("")
    : `<li class="command-empty">No hay resultados. Prueba con RFI, retraso, pago o agente.</li>`;
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

  const commandDialog = qs("#commandDialog");
  const commandInput = qs("#commandInput");
  const openCommand = () => {
    renderCommandResults("");
    commandDialog.showModal();
    commandInput.focus();
  };
  const closeCommand = () => commandDialog.close();

  qsa("[data-command-open]").forEach((button) => button.addEventListener("mousedown", openCommand));
  qs("[data-command-close]").addEventListener("click", closeCommand);
  commandInput.addEventListener("input", (event) => renderCommandResults(event.target.value));
  qs("#commandResults").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    button.dataset.executed = "true";
    button.querySelector("span").textContent = "Ejecutado en modo demo";
    window.setTimeout(closeCommand, 280);
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (commandDialog.open) closeCommand();
      else openCommand();
    }
    if (event.key === "Escape" && commandDialog.open) closeCommand();
  });

  const modeToggle = qs("[data-mode-toggle]");
  modeToggle.addEventListener("click", () => {
    const isDemo = modeToggle.getAttribute("aria-checked") === "true";
    const nextIsDemo = !isDemo;
    modeToggle.setAttribute("aria-checked", String(nextIsDemo));
    document.body.dataset.dataMode = nextIsDemo ? "demo" : "real-locked";
    qs("[data-mode-label]").textContent = nextIsDemo ? "Demo Mode" : "Cliente Real";
    qs("[data-mode-copy]").textContent = nextIsDemo
      ? "MOCK GEN+ - conectar a API real. Cliente Real bloqueado hasta validar permisos."
      : "Cliente Real bloqueado: requiere API, consentimiento PDPL, segregacion y credenciales.";
  });
}

function init() {
  renderGenPlusCommandCenter();
  renderKpis();
  renderEventInfo();
  renderStrategicTracks();
  renderPriorities();
  renderOwnerBars();
  renderAreaBars();
  renderAreas();
  renderStands();
  renderGoNoGo();
  renderMilestones();
  renderRisks();
  renderPostEvent();
  bindInteractions();
}

document.addEventListener("DOMContentLoaded", init);
