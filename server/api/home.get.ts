export default defineEventHandler(() => {
  return {
    hero: {
      theme: "default",
      title: "Compra, venta y renta de bienes raices",
      description:
        "Contáctate con nosotros para adquirir tu propiedad: Terreno, Local comercial, Casa o Departamento",
      image:
        "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/logo.jpeg",
      imageAlt: "Logo Jebem",
      buttons: [
        {
          text: "Contáctanos",
          props: {
            href: "#contact",
            color: "primary",
            size: "xl",
          },
        },
      ],
    },
    about: {
      title: "Aceca de nosotros",
      description:
        "Jebem bienes raices es una inmobiliaria con la misión de facilitar la compra, venta y renta de bienes raices en el municipio de Calakmul. Nuestra meta es brindarles a compradores y vendedores una plataforma en línea para agilizar la adquisición de bienes. Publica aqui tu local, terreno, casa o departamento.",
      button: {
        text: "Conocer los bienes",
        action: "#feature",
      },
    },
    feature: {
      title: "Últimas publicaciones",
      description:
        "Contáctate con nosotros para adquirir la propiedad que te interese. Te presentamos las últimas publicaciones de propiedades en la zona.",
    },
    features: [
      {
        name: "Local comercial en el centro",
        description:
          "A un costado de la esquina, local comercial con patente de venta de bebidas alcoholicas vigente. Excelente oportunidad para tí.",
        image:
          "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/logo.jpeg",
        imagePosition: "right",
        imageAlt: "Logo Jebem",
        theme: "", // default
        items: [
          {
            title: "Dirección",
            description: "Av. Xpujil #345",
          },
          {
            title: "Incluye servicios como",
            description: "Agua, Luz e Internet",
          },
          {
            title: "Renta mensual",
            description: "$3,500 MXN",
          },
          {
            title: "Contácto",
            description: "983-110-1239",
          },
        ],
      },
      /*
      {
        name: "Feature 2",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:
          "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/logo.jpeg",
        imagePosition: "left",
        imageAlt: "",
        theme: "", // default
        items: [
          {
            title: "Feature 2.1",
            description: "Description 2.1",
          },
          {
            title: "Feature 2.1",
            description: "Description 2.1",
          },
          {
            title: "Feature 2.1",
            description: "Description 2.1",
          },
        ],
      },
      {
        name: "Feature 3",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        image:
          "https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
        imagePosition: "right",
        imageAlt: "",
        theme: "feature-blue",
        items: [
          {
            title: "Feature 3.1",
            description: "Description 3.1",
          },
          {
            title: "Feature 3.1",
            description: "Description 3.1",
          },
          {
            title: "Feature 3.1",
            description: "Description 3.1",
          },
        ],
      },
      */
    ],
    quote: {
      title: "Quote Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim quis incidunt fugiat, quisquam aspernatur eaque necessitatibus sit ipsum voluptas excepturi rerum in mollitia, iusto, id velit optio commodi odio",
    },
    contact: {
      title: "Jebem Bienes Raices",
      description:
        "Llámenos o visitenos en cualquier momento, estaremos encantados de responder cualquier pregunta las 24 horas del día.",
      email: "contacto@jebembienesraices.com",
      phone: "+52-983-111-2222",
      website: "jebembienesraices.com",
      form: {
        title: "Contáctanos",
        description: `¿Aún tienes preguntas? Envíanos tu pregunta llenando el siguiente formulario y nos pondremos en contacto a la brevedad.`,
      },
    },
  };
});
