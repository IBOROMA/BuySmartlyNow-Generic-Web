# Changelog

All notable changes to this project will be documented in this file.

## [2.5.0] - 2025-12-12
### Added
- **User Authentication:** New Modal-based Login/Signup system.
- **Features:** "Create Account" (Email/Phone) and mock "Google Login" support.
- **UI:** Dynamic navbar state that shows User Profile when logged in.

### Fixed
- **Bugs:** Fixed unresponsive "Login" buttons by rewriting modal logic (`openModal`).

## [2.4.0] - 2025-12-12
### Added
- **Flight Comparison:** Added "Flights" category with specific comparison logic (TravelStart, Wakanow).
- **Features:** Expanded "Featured Products" grid to display 8 items.

### Changed
- **UI:** Redesigned Product Cards to be minimalist with "Material U" styled comparison pills.
- **Fix:** Resolved issue where "Partner Sign In" text would mistakenly persist over the new Login buttons.

## [2.3.0] - 2025-12-12
### Added
- **Authentication:** Split "Partner Sign In" into distinct "User Login" and "Affiliate Sign In" options.
- **UX:** Added smooth, staggered entry animations (`slide-up`, `slow-zoom`) for a premium feel.

## [2.2.0] - 2025-12-12
### Added
- **Christmas Theme:** Full-width "Season's Greetings" Hero section using Unsplash holiday imagery.
- **Visuals:** Implemented gradient overlays to blend the hero image seamlessly into the white content area.
- **Copy:** Updated festive text ("Unwrap The Best Christmas Deals").

## [2.1.0] - 2025-12-12
### Changed
- **Hero Section:** Refined to "Clean White" theme with side-by-side image layout and Yellow emphasis text.
- **Special Edition:** Converted to full-width background image blend for a premium magazine look.
- **Brand Strip:** Added top/bottom borders and adjusted spacing.

## [2.0.0] - 2025-12-12
### Added
- **UI Theme Overhaul:** Implemented "DNK" Fashion Theme with solid blue branding.
- **Hero Section:** New "Raining Offers" layout with integrated search and hero image.
- **Marketing Sections:** Added Brand Strip, Features Strip (Icons), and Special Edition Parallax Banner.
- **Product Cards:** New minimal card design with Sale Badges, Star Ratings, and Color Swatches.
- **Promo Grid:** 3-column promotional category grid.
- **Deployment:** Firebase Hosting configuration added.

### Changed
- **Typography:** Switched to `Lato` (Body) and `Montserrat` (Headings).
- **Architecture:** Fully removed WordPress dependencies; now running as a pure Static Web App.
- **Data:** `app.js` now serves as the single source of truth for mock products.
