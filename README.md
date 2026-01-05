# Rick and Morty Explorer

A web application that allows users to search and browse characters from the animated series **Rick and Morty**.  
The app uses a custom backend to fetch data from the public Rick and Morty API and presents it in a paginated UI.

## Features

- Character list with images
- Pagination
- Character detail pages
- Custom backend API (server-side only)
- Dynamic routing
- Deployed web application

## Tech Stack

- **Next.js**
- **TypeScript**
- **Node.js**
- **Rick and Morty API**
- **Vercel**

## Installation & Running Locally

1. Clone the repository:
  git clone https://github.com/mmyrzali/rick-morty-explorer.git
  cd rick-morty-explorer
2. Install the dependencies:
   npm install
3. Run the development server:
   npm run dev
4. Open in browser:
   http://localhost:3000

## Design & Development Process
   The application was built using Next.js App Router with a separation between frontend and backend.
Frontend pages fetch data only from internal API routes.
Backend API routes handle all communication with the external Rick and Morty API.
Dynamic routing is used for pagination and character detail pages.
Server-side rendering ensures fast load times and SEO-friendly pages.

## Backend Architecture
  All external API calls are handled server-side:
/api/characters?page=1 → paginated list
/api/characters/[id] → single character details
This approach improves security and follows best practices.

## Trade-offs & Decisions
  Chose Next.js to combine frontend and backend in one project.
Used server components instead of client state for simplicity.
Styling is minimal to focus on functionality and architecture.
No UI framework was used to keep the project lightweight.

## Known Issues / Limitations
  No search or filtering (pagination only)
Basic styling
Error handling could be improved for network failures

## Deployment
 The project was deployed at Vercel. 
 https://rick-morty-explorer-96bvyy66k-madinas-projects-fb598f80.vercel.app
