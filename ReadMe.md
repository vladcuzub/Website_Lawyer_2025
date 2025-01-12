project/
├── index.html              # Pagina Acasă
├── services.html           # Pagina Servicii
├── about.html              # Pagina Despre mine
├── contact.html            # Pagina Contact
│
├── assets/
│   ├── scss/               # Fișiere SCSS
│   │   ├── abstracts/      # Abstracții și variabile globale
│   │   │   ├── _variables.scss    # Variabile globale (culori, fonturi, spacing)
│   │   │   ├── _mixins.scss       # Mixins reutilizabile
│   │   │   └── _functions.scss    # Funcții SCSS personalizate
│   │   │
│   │   ├── base/           # Stiluri de bază
│   │   │   ├── _reset.scss        # Resetarea stilurilor (de ex. Normalize.css)
│   │   │   ├── _typography.scss   # Stiluri generale pentru text
│   │   │   ├── _utilities.scss    # Clase utilitare (de ex. `.hidden`, `.text-center`)
│   │   │
│   │   ├── components/     # Componente reutilizabile
│   │   │   ├── _buttons.scss      # Stiluri pentru butoane
│   │   │   ├── _forms.scss        # Stiluri pentru formulare
│   │   │   ├── _cards.scss        # Stiluri pentru carduri
│   │   │
│   │   ├── layouts/        # Structura layout-ului
│   │   │   ├── _header.scss       # Stiluri pentru header
│   │   │   ├── _footer.scss       # Stiluri pentru footer
│   │   │   ├── _grid.scss         # Sistem de grilă, dacă folosești
│   │   │   └── _navigation.scss   # Stiluri pentru meniuri și navigație
│   │   │
│   │   ├── pages/          # Stiluri specifice paginilor
│   │   │   ├── _home.scss         # Stiluri pentru pagina Acasă
│   │   │   ├── _services.scss     # Stiluri pentru pagina Servicii
│   │   │   ├── _about.scss        # Stiluri pentru pagina Despre mine
│   │   │   ├── _contact.scss      # Stiluri pentru pagina Contact
│   │   │
│   │   ├── main.scss       # Punctul de intrare pentru SCSS
│   │
│   ├── css/                # Fișiere CSS generate
│   │   └── main.css        # Fișier CSS compilat
│   │
│   ├── images/             # Imagini
│   │   ├── home/           # Imagini pentru pagina Acasă
│   │   ├── services/       # Imagini pentru pagina Servicii
│   │   ├── about/          # Imagini pentru pagina Despre mine
│   │   └── contact/        # Imagini pentru pagina Contact
│   │
│   ├── js/                 # JavaScript
│       ├── main.js         # Script principal
│       └── contact.js      # Script specific pentru Contact
│
└── README.md               # Documentația proiectului
