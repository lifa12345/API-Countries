# Countries App — Step-by-Step Guide

Build a React app to browse, create, update, and delete countries using a REST API.

**API base URL** (used in every step below):

```
https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries
```

> Tip: store it once in a constant, e.g. `const API_URL = "https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries"`, and reuse it in your components.

---

## Step 1 — Create the project

```bash
npm create vite@latest client
```

When prompted, choose **React** and **JavaScript**.

```bash
cd client
npm i
npm run dev
```

Open the URL shown in the terminal (`http://localhost:5173`).

---

## Step 2 — Clean the template

Remove the Vite demo so you start with a blank project.

- Clear `src/App.jsx` — remove all demo content and leave a minimal shell
- Clear `src/App.css` — delete all default styles (or delete the file and remove the import)
- Reset `src/index.css` — remove Vite's default styles and keep only basic global resets
- Remove unused imports and assets (e.g. `react.svg`)

**Checkpoint:** You should see a clean page with no Vite demo UI.

---

## Step 3 — Install React Router

```bash
npm i react-router-dom
```

- Wrap `<App />` with `<BrowserRouter>` in `src/main.jsx`
- In `src/App.jsx`, add `<Routes>` and `<Route>` for your pages
- Create two routes:
  - `/` → `Countries`
  - `/create` → `CreateCountry`
- Keep the navbar visible above the routes in `App.jsx`

---

## Step 4 — Navbar

Create `src/components/Navbar.jsx` with two links:

- **Countries** → `/`
- **Create Country** → `/create`

Use `<Link>` from `react-router-dom`, not regular `<a>` tags.

**Checkpoint:** Both links should switch between pages without a full reload.

---

## Step 5 — Display countries

Install axios:

```bash
npm i axios
```

Create `src/components/Countries.jsx` and `src/components/CountryCard.jsx`.

**Your tasks:**

- Use `useState` to store the countries list
- Use `useEffect` to fetch all countries from the API 
- Use `axios` to make the GET request in `Countries.jsx`
- Map over the countries and render a `CountryCard` for each one
- Pass each country object to `CountryCard` as a prop
- In `CountryCard`, display the name, flag image, capital, and description

**API:**

```
GET https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries
```

**Example response:**

```json
[
  {
    "id": "1",
    "name": "Palestine",
    "capital": "Jerusalem",
    "flag": "https://flagcdn.com/w320/ps.png",
    "description": "A land of olive groves and ancient cities like Jerusalem, Bethlehem and Gaza, known for its rich culture, embroidery and cuisine."
  },
  {
    "id": "2",
    "name": "Tunisia",
    "capital": "Tunis",
    "flag": "https://flagcdn.com/w320/tn.png",
    "description": "A North African country on the Mediterranean, home to the ruins of Carthage, Saharan dunes and beautiful coastal towns like Sidi Bou Said."
  }
]
```

> Tip: `flag` is an image URL — render it with `<img src={country.flag} alt={country.name} />`.

**Checkpoint:** You should see a list of country cards with name, flag, capital, and description.

---

## Step 6 — Create a country

Create `src/components/CreateCountry.jsx`.

**Your tasks:**

- Build a form with inputs for name, flag URL, capital, and description
- Add a submit button
- On submit, send a POST request to the API
- After a successful submit, redirect to the countries page using `useNavigate`

**How to use `useNavigate`:**

```jsx
import { useNavigate } from 'react-router-dom'

function CreateCountry() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // send POST request...
    navigate('/') // redirects to the Countries page
  }
}
```

**API:**

```
POST https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries

Body: { "name", "flag", "capital", "description" }
```

**Checkpoint:** Submitting the form adds a country and takes you back to the list.

---

## Step 7 — Delete a country

**Your tasks:**

- Add a Delete button to each `CountryCard`
- On click, send a DELETE request to the API using the country's `id`
- Remove the country from state after a successful delete

**API:**

```
DELETE https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries/:id
```

**Checkpoint:** Clicking Delete removes the card from the page.

---

## Step 8 — Update the description

Only the description should be editable. Name, flag, and capital stay read-only.

**Your tasks:**

- Add an Edit button to each `CountryCard`
- Clicking Edit shows a textarea with the current description inside the card
- Add Save and Cancel buttons while in edit mode
- Save sends a PUT request with only the updated description in the body
- Cancel reverts the textarea and closes edit mode

**API:**

```
PUT https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries/:id

Body: { "description": "your updated text here" }
```

**Checkpoint:** Edit opens a textarea in the card. Save updates the description. Cancel reverts changes.

---

## Bonus — Modern CSS

Style the app to look polished and modern. Suggestions:

- Use CSS variables for a consistent color palette
- Style the navbar with flexbox, spacing, and hover effects
- Display country cards in a responsive grid
- Add border-radius, box-shadow, and padding to cards
- Style form inputs with consistent width, padding, and focus outlines
- Add smooth transitions on buttons and cards

---

## Final folder structure

```
client/
  src/
    components/
      Navbar.jsx
      Countries.jsx
      CountryCard.jsx
      CreateCountry.jsx
    App.jsx
    main.jsx
    App.css
    index.css
```

---

## API summary

| Method | URL | Purpose |
|--------|-----|---------|
| GET | `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries` | Fetch all countries |
| GET | `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries/:id` | Fetch one country by id |
| POST | `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries` | Create a new country |
| PUT | `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries/:id` | Update a country's description |
| DELETE | `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries/:id` | Delete a country |

**Country fields:** `id`, `name`, `description`, `flag`, `capital`
