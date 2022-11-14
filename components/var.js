var obj = [
  {
    data: {
      pageLayouts: {
        data: [
          {
            attributes: {
              title: "Home",
              subtitle: "Our project",
              slider: {
                title:
                  "She was undergoing treatment at Saifee Hospital in Mumbai for the past 15 day",
                slides: [
                  {
                    id: "1",
                    image: {
                      data: [
                        {
                          id: "4",
                          __typename: "UploadFileEntity",
                        },
                      ],
                      __typename: "UploadFileRelationResponseCollection",
                    },
                    title: "Prime Minister Narendra Modi",
                    subtitle: "Prime Minis a Modi",
                    __typename: "ComponentSlidesComSlides",
                  },
                  {
                    id: "3",
                    image: {
                      data: [
                        {
                          id: "5",
                          __typename: "UploadFileEntity",
                        },
                      ],
                      __typename: "UploadFileRelationResponseCollection",
                    },
                    title: "Another slider",
                    subtitle: "sub title for another slider",
                    __typename: "ComponentSlidesComSlides",
                  },
                  {
                    id: "2",
                    image: {
                      data: [
                        {
                          id: "4",
                          __typename: "UploadFileEntity",
                        },
                      ],
                      __typename: "UploadFileRelationResponseCollection",
                    },
                    title: "some more slider",
                    subtitle: "sub title fore some more slider",
                    __typename: "ComponentSlidesComSlides",
                  },
                ],
                __typename: "ComponentSliderComSlider",
              },
              __typename: "PageLayout",
            },
            __typename: "PageLayoutEntity",
          },
        ],
        __typename: "PageLayoutEntityResponseCollection",
      },
    },
    loading: false,
    networkStatus: 7,
    stale: false,
  },
];

var slider = obj[0].data.pageLayouts.data[0].attributes.slider;
