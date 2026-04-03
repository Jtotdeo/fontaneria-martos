import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "reforma-completa-bano-sant-vicent",
    title: "Reforma completa de baño en Sant Vicent del Raspeig",
    category: "Reformas",
    shortDescription:
      "Transformación integral de un baño de 5 m2 con cambio de bañera por plato de ducha, nueva grifería y alicatado completo.",
    description: `Reforma integral de un cuarto de baño en una vivienda unifamiliar del centro de Sant Vicent del Raspeig. El baño original databa de los años 90 y presentaba problemas de humedad en la base de la bañera, grifería oxidada y un alicatado muy deteriorado. Los propietarios querían modernizar completamente el espacio, ganando funcionalidad y luminosidad, con especial interés en sustituir la bañera por un amplio plato de ducha accesible. Se renovó toda la fontanería, incluyendo tuberías de suministro y desagüe, y se instaló nueva grifería termostática. El resultado fue un baño moderno, accesible y con un diseño atemporal que ha transformado por completo el aspecto de la vivienda.`,
    challenge:
      "Las tuberías originales de hierro galvanizado estaban muy corroídas y había que renovar toda la instalación sin afectar a la vivienda contigua. El espacio reducido dificultaba la redistribución de los sanitarios.",
    solution:
      "Se sustituyeron todas las tuberías por multicapa y PVC, se redistribuyó la posición del inodoro para ganar espacio de ducha y se instaló un plato de ducha extraplano de resina con mampara fija de cristal. Se aplicó una impermeabilización completa con lámina de polietileno antes del alicatado.",
    result:
      "Los propietarios quedaron encantados con el resultado. El baño ganó amplitud visual gracias al plato de ducha y al alicatado claro en formato grande. La reforma se completó en 7 días laborables, dentro del plazo y presupuesto acordados.",
    specs: [
      { label: "Superficie", value: "5 m2" },
      { label: "Duración", value: "7 días laborables" },
      { label: "Material tuberías", value: "Multicapa y PVC" },
      { label: "Plato de ducha", value: "Resina extraplano 140x70 cm" },
    ],
    images: 4,
  },
  {
    slug: "reparacion-urgente-fuga-comunidad",
    title: "Reparación urgente de fuga en comunidad de vecinos",
    category: "Reparaciones",
    shortDescription:
      "Localización y reparación de una fuga oculta en el montante general de un edificio de 20 viviendas en el barrio de Rabasa.",
    description: `Intervención de urgencia en una comunidad de 20 viviendas en el barrio de Rabasa, Sant Vicent del Raspeig. La comunidad llevaba meses registrando un consumo anormal de agua en el contador general sin poder localizar el origen de la pérdida. Varias viviendas de las plantas bajas empezaban a mostrar manchas de humedad. Nuestro equipo se desplazó con equipos de correlación acústica y cámara termográfica, localizando la fuga en un tramo del montante general empotrado en la fachada interior del patio de luces, a la altura del segundo piso. Se realizó la reparación sustituyendo el tramo afectado y reforzando las uniones con materiales de alta durabilidad.`,
    challenge:
      "La fuga estaba ubicada en un punto de muy difícil acceso, en un montante empotrado en la pared del patio de luces a 6 metros de altura. La detección era complicada porque el agua se filtraba entre muros antes de aparecer en las viviendas.",
    solution:
      "Se utilizó un equipo de correlación acústica para delimitar la zona y una cámara termográfica para confirmar el punto exacto. Se accedió mediante andamio tubular en el patio de luces, se sustituyó el tramo dañado de 1,5 metros de tubería de hierro por polipropileno y se sellaron todas las uniones.",
    result:
      "La fuga quedó reparada en una sola jornada de trabajo. El consumo de agua de la comunidad se redujo un 35% en la siguiente lectura del contador. La comunidad evitó daños mayores en las viviendas afectadas y ahorró considerablemente en la factura del agua.",
    specs: [
      { label: "Tipo de fuga", value: "Montante general empotrado" },
      { label: "Método de detección", value: "Correlación acústica + termografía" },
      { label: "Tramo sustituido", value: "1,5 metros" },
      { label: "Tiempo de reparación", value: "1 día" },
    ],
    images: 4,
  },
  {
    slug: "instalacion-calefaccion-central-chalet",
    title: "Instalación de sistema de calefacción central",
    category: "Instalaciones",
    shortDescription:
      "Diseño e instalación completa de calefacción por radiadores con caldera de condensación en un chalet de 180 m2 en la urbanización El Moralet.",
    description: `Proyecto de instalación completa de calefacción central en un chalet de nueva construcción de 180 m2 en la urbanización El Moralet, Sant Vicent del Raspeig. La vivienda contaba con preinstalación básica pero sin equipo ni circuito de calefacción. Diseñamos un sistema de radiadores de aluminio dimensionado por estancias, con una caldera mural de condensación Vaillant ecoTEC de 28 kW que proporciona calefacción y agua caliente sanitaria. Se realizó toda la distribución del circuito en tubo multicapa por suelo técnico, con colectores por planta y válvulas termostáticas en cada radiador para un control individualizado de la temperatura. El sistema incluye un termostato inteligente Wi-Fi programable que permite controlar la calefacción desde el móvil.`,
    challenge:
      "La distribución en dos plantas con 7 estancias de diferentes tamaños requería un cálculo térmico preciso para dimensionar correctamente cada radiador. Además, el paso de tuberías entre plantas debía realizarse por un espacio muy limitado junto a la escalera.",
    solution:
      "Se realizó un cálculo de cargas térmicas estancia por estancia según las características constructivas del chalet. Se diseñó un sistema bitubo con colectores independientes por planta y se instalaron 9 radiadores de aluminio de alta emisión térmica. El paso entre plantas se resolvió con un cajón registrable junto al pilar de la escalera.",
    result:
      "La vivienda alcanza la temperatura de confort en 30 minutos desde el encendido. El consumo de gas es un 25% inferior a la estimación inicial gracias a la eficiencia de la caldera de condensación y a las válvulas termostáticas. Los propietarios controlan cómodamente todo el sistema desde su teléfono móvil.",
    specs: [
      { label: "Superficie calefactada", value: "180 m2" },
      { label: "Caldera", value: "Vaillant ecoTEC 28 kW condensación" },
      { label: "Radiadores", value: "9 unidades de aluminio" },
      { label: "Control", value: "Termostato Wi-Fi programable" },
    ],
    images: 4,
  },
  {
    slug: "desatasco-red-saneamiento-restaurante",
    title: "Desatasco de red de saneamiento en restaurante",
    category: "Desatascos",
    shortDescription:
      "Limpieza completa de la red de saneamiento de un restaurante en el centro de Alicante con graves atascos por acumulación de grasa.",
    description: `Intervención en un restaurante del centro de Alicante que sufría atascos recurrentes en su red de saneamiento, con retornos de aguas residuales en la cocina que obligaban a cerrar temporalmente el local. El problema se arrastraba desde hacía meses con soluciones parciales que no resolvían la causa de fondo. Nuestro equipo realizó una inspección completa con cámara de las tuberías de evacuación de la cocina, identificando una acumulación masiva de grasa solidificada que reducía la sección útil de la tubería al 20% en un tramo de más de 8 metros. Se realizó una limpieza exhaustiva con equipo de agua a alta presión a 200 bares y se instaló un separador de grasas industrial para prevenir futuros problemas.`,
    challenge:
      "La acumulación de grasa era tan severa que los intentos previos con productos químicos y desatascadores convencionales habían fracasado. El tramo afectado transcurría bajo el suelo de la cocina, con acceso únicamente por las arquetas de los extremos.",
    solution:
      "Se introdujo la manguera de alta presión desde la arqueta de salida, trabajando con boquillas especiales rotativas diseñadas para eliminar grasa endurecida. Se realizaron tres pasadas completas hasta dejar la tubería con su sección original. Posteriormente se instaló un separador de grasas homologado antes de la conexión a la red general.",
    result:
      "El restaurante recuperó el funcionamiento normal de sus desagües y no ha vuelto a tener problemas de atascos en los 8 meses transcurridos desde la intervención. Se estableció un contrato de mantenimiento trimestral preventivo que garantiza la limpieza continua de la instalación.",
    specs: [
      { label: "Longitud limpiada", value: "8 metros de tubería" },
      { label: "Presión de trabajo", value: "200 bares" },
      { label: "Equipo instalado", value: "Separador de grasas industrial" },
      { label: "Mantenimiento", value: "Contrato trimestral preventivo" },
    ],
    images: 4,
  },
  {
    slug: "renovacion-cocina-chalet-mutxamel",
    title: "Renovación de cocina en chalet de Mutxamel",
    category: "Reformas",
    shortDescription:
      "Reforma integral de cocina de 12 m2 con nueva distribución de fontanería, instalación de isla central y sistema de osmosis.",
    description: `Reforma completa de una cocina de 12 m2 en un chalet de Mutxamel para una familia que necesitaba modernizar un espacio que no se había tocado en 25 años. El proyecto incluyó el derribo de un tabique para ampliar la cocina e integrarla con el comedor, creando un espacio diáfano y luminoso. Se renovó toda la instalación de fontanería, reubicando el fregadero a una isla central y creando nuevos puntos de agua para lavavajillas, lavadora y un grifo de agua filtrada por osmosis inversa. Se instaló grifería monomando de diseño con caño extraíble y un sistema de agua caliente instantánea bajo el fregadero. Toda la red de desagüe se trazó por el forjado con las pendientes adecuadas para garantizar una evacuación correcta desde la isla central.`,
    challenge:
      "La reubicación del fregadero a la isla central requería trazar un desagüe de más de 4 metros bajo el suelo con pendiente suficiente, algo complicado por la escasa altura del forjado. Además, el agua caliente llegaba muy lenta al nuevo punto por la lejanía de la caldera.",
    solution:
      "Se picó una regata en el forjado para alojar la tubería de desagüe con una pendiente del 2%, instalando una válvula antirretorno. Para el problema del agua caliente se instaló un mini calentador eléctrico instantáneo de 11 kW bajo la encimera de la isla, proporcionando agua caliente inmediata en el fregadero.",
    result:
      "La cocina se transformó en un espacio moderno, funcional y social donde la familia disfruta cocinando y recibiendo visitas. El agua caliente llega al instante en el fregadero de la isla y el sistema de osmosis proporciona agua de calidad para beber directamente del grifo. La reforma se completó en 10 días laborables.",
    specs: [
      { label: "Superficie", value: "12 m2 (ampliada)" },
      { label: "Duración", value: "10 días laborables" },
      { label: "Equipamiento especial", value: "Osmosis inversa + calentador instantáneo" },
      { label: "Elementos instalados", value: "Isla central, lavavajillas, lavadora" },
    ],
    images: 4,
  },
  {
    slug: "sustitucion-caldera-comunitaria",
    title: "Sustitución de caldera comunitaria",
    category: "Instalaciones",
    shortDescription:
      "Sustitución de caldera comunitaria de gasóleo por sistema de condensación a gas natural en edificio de 32 viviendas en San Juan.",
    description: `Proyecto de sustitución de la caldera comunitaria de un edificio de 32 viviendas en San Juan de Alicante. El edificio disponía de una caldera de gasóleo de 200 kW con más de 20 años de antigüedad, con un rendimiento muy bajo, averías frecuentes y un coste de combustible cada vez más elevado. La comunidad decidió modernizar la instalación sustituyéndola por dos calderas de condensación a gas natural de 100 kW cada una, funcionando en cascada. Este sistema aporta mayor eficiencia, redundancia de servicio y una reducción significativa tanto del consumo energético como de las emisiones contaminantes. Se tramitó la acometida de gas natural al edificio y se adaptó toda la sala de calderas a la nueva normativa RITE, incluyendo chimenea, ventilación, detección de gas y sistema de control centralizado.`,
    challenge:
      "El edificio no disponía de acometida de gas natural, lo que requería una obra de canalización desde la red general. Además, la sala de calderas existente no cumplía la normativa actual y necesitaba una adaptación completa manteniendo el servicio de calefacción durante las obras.",
    solution:
      "Se coordinó con la distribuidora de gas la ejecución de la acometida en paralelo con las obras de la sala de calderas. Se mantuvo la caldera antigua en funcionamiento hasta el último momento, realizando la conexión del nuevo sistema en un solo día para minimizar la interrupción del servicio. La sala se reformó con nueva ventilación, chimenea de acero inoxidable modular y sistema de detección de gas homologado.",
    result:
      "La comunidad ha reducido su factura energética un 40% respecto al sistema anterior de gasóleo. Las emisiones de CO2 se han reducido un 30%. El sistema de dos calderas en cascada garantiza que nunca se queden sin calefacción, ya que si una caldera falla la otra asume toda la demanda. La inversión se amortizará en menos de 5 años gracias al ahorro en combustible.",
    specs: [
      { label: "Potencia instalada", value: "2 x 100 kW en cascada" },
      { label: "Combustible", value: "Gas natural (antes gasóleo)" },
      { label: "Ahorro energético", value: "40% respecto al sistema anterior" },
      { label: "Viviendas servidas", value: "32 viviendas" },
    ],
    images: 4,
  },
];
