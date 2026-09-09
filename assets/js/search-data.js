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
        },{id: "post-what-next-for-the-cjp-movement",
      
        title: 'What next for the CJP movement? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Accountability is necessary but not sufficient",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/what-next-for-the-cjp-movement", "_blank");
        
      },
    },{id: "post-a-front-row-seat-to-watch-a-mind-take-in-the-world",
      
        title: 'A Front Row Seat To Watch A Mind Take In The World <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Notes from parenthood",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/a-front-row-seat-to-watch-a-mind", "_blank");
        
      },
    },{id: "post-axioms",
      
        title: 'Axioms <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Why all books should start with maps, and why political debates are meaningless",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/axioms", "_blank");
        
      },
    },{id: "post-ऋतू-हिरवा",
      
        title: 'ऋतू हिरवा <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "माझा पहिला मराठी निबंध, अशा ताईंच्या आठवणीत",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/25f", "_blank");
        
      },
    },{id: "post-a-drafty-place",
      
        title: 'A Drafty Place <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "A journey through my graveyard of abandoned essays",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/a-drafty-place", "_blank");
        
      },
    },{id: "post-capitalism-is-awesome",
      
        title: 'Capitalism Is Awesome <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "And how I came to believe that",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/capitalism-is-awesome", "_blank");
        
      },
    },{id: "post-three-months-of-malhar",
      
        title: 'Three Months of Malhar <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Notes from the fourth trimester",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/three-months-of-malhar", "_blank");
        
      },
    },{id: "post-a-platter-of-cheese",
      
        title: 'A Platter of Cheese <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "My first fiction post.",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/short-story-a-platter-of-cheese", "_blank");
        
      },
    },{id: "post-diary-of-a-mother-to-be",
      
        title: 'Diary of a Mother-To-Be <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "I haven&#39;t pooped in three days",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/diary-of-a-mother-to-be", "_blank");
        
      },
    },{id: "post-six-little-things-that-make-me-happy",
      
        title: 'Six Little Things That Make Me Happy <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "A non-serious essay about nice things",
      section: "Posts",
      handler: () => {
        
          window.open("https://learningtobehappy.substack.com/p/six-little-things-that-make-me-happy", "_blank");
        
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
