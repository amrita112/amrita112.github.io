// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-published-writing",
          title: "published writing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/published-writing/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amrita-singh-5546568b/", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/amrita_112", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://x.com/amus_bouche", "_blank");
        },
      },{
        id: 'social-substack',
        title: 'Substack',
        section: 'Socials',
        handler: () => {
          window.open("https://learningtobehappy.substack.com/", "_blank");
        },
      },{
        id: 'social-googlescholar',
        title: 'Googlescholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=h98eTlQAAAAJ&hl=en", "_blank");
        },
      },];
