
## 🧠 Goal:

Build a **barebones Notes API** in Node.js (Express) with in-memory storage.
It’s your warmup project to:

* Refresh REST
* Practice CRUD
* Reinforce clean structure

## 🧱 Features (Phase 1 — In-Memory)

### 1. **Create Note**

* `POST /notes`
* Body: `{ title: string, content: string }`
* Return: `201 Created`, with `{ id, title, content }`

### 2. **Get All Notes**

* `GET /notes`
* Return: array of all notes

### 3. **Get Single Note**

* `GET /notes/:id`
* Return: `{ id, title, content }`

### 4. **Update Note**

* `PUT /notes/:id`
* Body: `{ title?, content? }`
* Return: updated note

### 5. **Delete Note**

* `DELETE /notes/:id`
* Return: `{ success: true }`

Use **in-memory JS object or array** — no DB yet.


## 🧱 Folder Structure (Recommended)

```
mini-notes-api/
├── index.js
├── routes/
│   └── notes.js
├── controllers/
│   └── notesController.js
└── data/
    └── notesStore.js
```

We’ll add tests + middlewares later.


## ✅ What You’ll Practice

* Express setup
* Routing
* Modularization
* HTTP methods
* Clean controller logic
* Data validation (basic)


## ⏱ Deadline: **48 hours** from now (July 28, 6 PM)

* Submit via GitHub repo
* Include README with instructions
* Bonus: add error handling for invalid IDs

