# Project REST-Rant

REST-Rant is a fully RESTful restaurant reviewer app.

## Routes

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)   |

## Database

### places

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | string    |
| city     | string    |
| state    | string    |
| cuisines | string    |
| pic      | string    |

### rants

| Field    | Type                  |
| -------- | --------------------- |
| \_id     | Object ID             |
| place_id | ref(places) Object_Id |
| rant     | Boolean               |
| rating   | Number                |
| comment  | String                |
| reviewer | String                |

## Planning

### User Stories

TBD

### Wireframes

TBD

## Notes

### Possible bonus ideas:

- Update for comments
- Aggregate rating for a place
- Auto-complete state dropdown

## Progress

- ~~Part 1: Project setup, stub three routes, and creating a README file~~
- ~~Part 2: Stub remaining GET and POST routes, planning mockrestaurant data, drawing wireframes, and making your first view~~
- ~~Part 3: Making more views, creating a layout page, and expanding your README~~
- ~~Part 4: Adding some style with CSS~~
- Part 5: Forms, validation, and navigation
- Part 6: Implementing delete functionality and adding a DELETE route
- Part 7: Implementing edit form and functionality, adding a PUT route
- Part 8: Implementing the Mongoose ODM
- Part 9: Seed data, validations, and helper methods
- Part 10: Adding commentary: rants and raves
- Part 11: Populating data for star ratings
- Part 12: Deploying your project

## TODO

- [Bonus for Activity 4](https://digitalskills.instructure.com/courses/6038/pages/activity-be-4-rest-rant-part-4?module_item_id=783689)
