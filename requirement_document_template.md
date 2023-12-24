# Interactive Bookstore Application


## Objective

    To develop an interactive Bookstore application using ReactJS. The application should allow users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack

    ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have

- Pages/Components - Home, Book Listing, Book Details, Shopping Cart, and Checkout pages
- Features - book search, book filtering, add to cart, remove from cart, and order placement

    ##### Pages Information
    | Pages        | Page Details                                                                                  | Navigation                                                                                    |
    | ------------ | ----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
    | Home,        | Header- Links for  Home, Book List ,Cart  <br /> Banner - Heading, Description, Explore Books | "Home" in Header                                                                              |  
    | Book List    | Header- Links for  Home, Book List ,Cart <br /> Book Item, Search, Filter                     |  "Book List" in Header <br /> "Explore Books" Button <br /> "Back Button" in Book Details Page|
    | Book Details | Detailed Info , Add to Cart Button, Back Button                                               | Each Book in Book Details should navigate to Book List|                                       |
    | Cart         | Cart Items, Remove Button, Order Summary Checkout Info                                        |  Cart Link in Header <br /> Back Button in Checkout Page                                      | 
    | Checkout     | Order Form(Personal Details, Order Summary,"Place Order" Button), Back Button                 | Checkout Button in Cart                                                                       |

#### Nice to Have

- Authentication

### Guidelines to develop a project

#### Must Have
* Use Github
    * Create a new public repository on GitHub for the assignment.
    * Commit your code regularly and include clear commit messages.
    * Include a README file explaining the project setup, usage instructions, and any additional information.
    * Ensure the repository is well-organized and easy to navigate.
* It should be visually Appealing and user friendly.
* It should Handle All sorts of Errors.

#### Nice to Have
- Unit Tests

### Submission Instructions

#### Must Have

* Github Repository

#### Nice to Have

* Deploying the application on a hosting platform


## Technical Details

### Routes
| Page         | Route        | Path       |
|--------------|--------------|------------| 
| Home         | Home         | /          |
| Book List    | Book List    | /books     |
| Book Details | Book Details | /books/:id |
| Cart         | Cart         | /cart      | 
| Checkout     | Checkout     | /checkout  |
| Not Found    | Not Found    | /not-found |  

### Routes & Components

**Home**

| Component | Details                                       | State              | API (IT Bookstore) |
|-----------|-----------------------------------------------|--------------------|--------------------|
| Home      | Banner - Heading, Description, Explore Books  | -                  | -                  |
| Header    | Links for Home Page, Book List, Cart          | (Context Consumer) | -                  |

**Book List**

| Component     | Details                                       | State                               | API(IT Bookstore) | 
|---------------|-----------------------------------------------|-------------------------------------|-------------------|
| BookList      | List of Books                                 | apiStatus,booksData,priceRangeValue | /new              | 
| Header        | Links for Home Page, Book List, Cart          | (Context Consumer)                  | -                 |
| SearchInput   | Search (by Title, Author), "Search" Button    | searchInputValue                    | /search/{query}   | 
| PriceRange    | Filter(by price), "Apply Filter" Button       | -                                   | -                 |
| Book Item     | Book Items(title, subtitle, image, price)     | -                                   | -                 | 
| Loader        |                                               | -                                   | -                 |
| Error Message |                                               | -                                   | -                 | 


**Book Details**

| Component     | Details                                                                                    | State                                                                  | API(IT Bookstore) | 
|---------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------|
| BookDetails   | Detailed Information - image,description,title,price , "Add to Cart" Button,"Back" Button  | apiStatus,bookDetailsData                                              | /books/{isbn}     | 
| Header        | Links for Home Page, Book List, Cart                                                       | (Context Consumer)                                                     | -                 |
| Loader        |                                                                                            | -                                                                      | -                 |
| Error Message |                                                                                            | -                                                                      | -                 |


**Cart**

| Component | Details                                                        | State | API(IT BookStore) |
|-----------|----------------------------------------------------------------|-------|-------------------|
| Cart      | Cart Items, Order Summary, "Checkout" Button, "Remove Button"  | (Context Consumer) | -    |
| Cart Item | Book Details , Number of copies, Delete button                 | (Context Consumer) | -    |
| Header    | Links for Home Page, Book List, Cart                           | (Context Consumer) | -    |

**Checkout**

| Component       | Details                                                                                                                | State                                                   | API(IT Bookstore) | 
|-----------------|----------------------------------------------------------------------------------------------------------------------- |---------------------------------------------------------|-------------------|
| Checkout        | "Back" Button                                                                                                          | (Context Consumer), isOrderPlaced                       | -                 | 
| UserDetailsForm | Order Form - Personal Details(first name, last name,Mobile Number, Email, Address, Place order button, Order Summary)  | name, address, phone, email, showValidationErrorMessage | -                 | 

**NotFound** 

| Component | Details                         | State              | API(IT Bookstore)   | 
|-----------|---------------------------------|--------------------|---------------------|
| NotFound  | -                               |  -                 | -                   | 
| Header    | Links for Home, Book List, Cart | (Context Consumer) | -                   |

**App**

| Component | Details                                                                                          | State                                                                                   | API(IT Bookstore) | 
|-----------|------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------------------------------|-------------------|
| App       |  -                                                                                               | cartList(context provider), Context: cartList,addToCart(),deleteFromCart(),resetCart()  | -                 |
## Resources

### Design files

Home ,  Book List, Book Details, Shopping Cart, Checkout
* Reference : https://readster-template.webflow.io/ (Home ,  Book List, Book Details)
- https://www.crossword.in/ (Book List, Cart , Checkout)

### APIs
* https://api.itbook.store/ (Book List, Book Details, Search) 
* Filter - Implemented in Frontend

### Third-party packages
- React Router Dom
- React Icons
- rc-slider
- React Loader Spinner