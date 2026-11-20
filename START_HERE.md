# Website source code — Start here

This is the complete source of your latest Yatsugatake project, including five languages, itinerary generation and shared demo booking / accepting / cancellation.

## Run on Windows in VS Code

1. Install Node.js 24 LTS and VS Code.
2. Extract this ZIP. Open the **yatsugatake-website** folder in VS Code.
3. Open **Terminal → New Terminal** and run these commands, one at a time:

```sh
npm ci
npm run setup:local
npm run dev
```

4. Open the localhost URL printed by the terminal (normally http://localhost:5173).
5. Choose 日本語 / မြန်မာ / English / 简体中文 / 한국어 in the header.

The first setup builds the app and creates an empty local database. It does not connect to or change the published website's data. Run setup:local without a preview server running. For a complete local reset, stop the server, delete the .wrangler folder, and run setup:local again.

This is a React + TypeScript / Vinext full-stack project, **not** a single HTML file. Opening app/page.tsx in a browser or using Live Server will not run the backend.

## Main files

| File | Purpose |
| --- | --- |
| app/page.tsx | Guest/staff screens and interactions |
| app/globals.css | Layout, responsive styles and fonts |
| app/data.ts | Facilities and itinerary generation |
| app/i18n.tsx | Language switching and localized formatting |
| app/translations.json | English, Burmese, Chinese and Korean translations; Japanese source keys |
| app/api/state/route.ts | Database API, anonymous demo sessions, bookings and cancellations |
| db/schema.ts | Database tables |
| drizzle/ | Database migrations |
| tests/shared-demo.mjs | Shared booking/cancellation tests |

## Test

```sh
npx tsc --noEmit
node --experimental-strip-types tests/shared-demo.mjs
```

You can edit and run this copy independently. It does not automatically publish edits to the live link. The hosting configuration is deliberately unbound to the original Site project. Dependencies, generated builds, Git history, session data and live booking records are not included.

Use fictional names and room numbers. This is a project demo, not a real hotel reservation system. Facility information and the included hotel photo come from the Hoshino Resorts official website; the README contains source links. Prices and operating conditions may change.
