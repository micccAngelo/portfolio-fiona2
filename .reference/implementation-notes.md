Canva reference: https://www.canva.com/design/DAHHmesbUTk/ErWOza5pnDD6bD1HfUsa8A/edit

Implemented the white, black, and lemon-yellow portfolio composition using React and Material UI. All custom styles are Material UI sx objects in src/portfolioStyles.ts; global defaults are in the Material UI theme. There are no custom CSS files or CSS imports. Serif display typography, café doodles, four tall category selectors, portrait introduction, alternating artwork layouts, and illustrated footer follow the supplied design. Motion is limited to hover feedback and smooth anchor navigation, with reduced-motion support.

Original doodles were retrieved through the Canva connector. Canva denied direct access to the uploaded portrait and portfolio assets. These were extracted from 600px-wide Canva page previews; replace public/images artwork with full-resolution originals for crisp desktop display. .reference/extract-assets.ps1 documents the source crops.

The Canva footer contains Harvest café template contact details and unnamed social icons. The contact details remain visibly identified as template details; social links were omitted because destinations were not supplied. The footer wordmark uses Natfio Gallery. Repeated café descriptions in the project page were replaced with short descriptions of the visible artwork.

Category controls filter the project collection. Clicking the selected category or View all projects resets the filter. Artwork opens a Material UI Dialog with keyboard focus management, Escape dismissal, and backdrop dismissal.

Review afterward: palette and composition follow the supplied reference. Navigation has real anchor destinations; category filtering and the named artwork dialog were verified in the browser. Mobile at 390px has no horizontal overflow and no failed images. Original portfolio previews remain low-resolution, and template contact data needs replacement before publication.
