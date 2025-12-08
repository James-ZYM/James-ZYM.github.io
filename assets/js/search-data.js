// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications of James Y. Zhu in chronological order. | * denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-résumé",
          title: "Résumé",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-gets-accepted-by-icwsm-2024",
          title: 'One paper gets accepted by ICWSM 2024! 🎉🎉🎉.',
          description: "",
          section: "News",},{id: "news-two-papers-get-accepted-by-acm-www-2024",
          title: 'Two papers get accepted by ACM WWW 2024! 🎉🎉🎉.',
          description: "",
          section: "News",},{id: "news-one-paper-gets-accepted-by-acm-mm-2024",
          title: 'One paper gets accepted by ACM MM 2024! 🎉🎉🎉.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-pc-member-of-the-acm-web-conference-2026-web4good-track",
          title: 'I will serve as a PC member of the ACM Web Conference 2026...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Yiming_Zhu_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%7A%68%75%63%64@%63%6F%6E%6E%65%63%74.%75%73%74.%68%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DnJLfkUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
