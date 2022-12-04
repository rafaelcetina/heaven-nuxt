export default defineEventHandler(() => {
  return [
    {
      id: 1,
      attributes: {
        title: "Casa en venta",
        excerpt: "Precio: $500,000 MXN",
        slug: "casa-palmas",
        body: "<strong>Precio: </strong> $500,000 MXN",
        createdAt: "2022-11-07T22:07:44.308Z",
        updatedAt: "2022-11-13T03:57:54.051Z",
        publishedAt: "2022-12-03T22:07:45.775Z",
        locale: "es-MX",
        image: {
          data: {
            id: 2,
            attributes: {
              name: "casa-palmas-1.jpeg",
              alternativeText: "casa-palmas-1.jpeg",
              formats: {
                thumbnail: {
                  url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/1_tn.jpg",
                },
              },
              url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/1.jpeg",
            },
          },
        },
      },
      gallery: [
        {
          data: {
            id: 2,
            attributes: {
              name: "casa-palmas-1.jpeg",
              alternativeText: "casa-palmas-1.jpeg",
              url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/1.jpeg",
            },
          },
        },
        {
          data: {
            id: 2,
            attributes: {
              name: "casa-palmas-1.jpeg",
              alternativeText: "casa-palmas-1.jpeg",
              url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/2.jpeg",
            },
          },
        },
        {
          data: {
            id: 2,
            attributes: {
              name: "casa-palmas-1.jpeg",
              alternativeText: "casa-palmas-1.jpeg",
              url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/3.jpeg",
            },
          },
        },
        {
          data: {
            id: 2,
            attributes: {
              name: "casa-palmas-1.jpeg",
              alternativeText: "casa-palmas-1.jpeg",
              url: "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/4.jpeg",
            },
          },
        },
      ],
      features: {
        id: 1,
        name: "Casa en venta",
        description:
          "El frente 16m, al este 32m, al norte 10m y al oeste 19m. Excelente oportunidad para tí.",
        image:
          "https://qzxcfcpyemrhuakuymvj.supabase.co/storage/v1/object/public/jebem/casa-palmas/3.jpeg",
        imagePosition: "right",
        imageAlt: "Logo Jebem",
        theme: "", // default
        items: [
          {
            title: "Dirección",
            description:
              "Calle Halaltun s/n entre Hocolwitz y Oxpecmul. CP: 24640",
          },
          {
            title: "Precio de venta",
            description: "$500,000 MXN",
          },
          {
            title: "Contácto",
            description: "983 332 1375",
          },
        ],
      },
    },
  ];
});
