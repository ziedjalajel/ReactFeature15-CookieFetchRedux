# Cookie Create

## Discussion

**Topics to discuss:**

- Modal
- Forms

In this lesson, we will create more cookies. We will have a create button, when pressing on it, it will open a modal that has a form.

## Step 1: Create Button

1. Let's add a plus icon in our list page. But how can we add icons? We will use a library called [React Icons](https://react-icons.github.io/). Let's install it.

```shell
  $ yarn add react-icons
```

2. Let's try it out, first choose your icon and import it:

```javascript
import { BsPlusCircle } from "react-icons/bs";
```

3. Then you simply render it as a component:

```jsx
<ListWrapper className="row">{cookieList}</ListWrapper>
<BsPlusCircle />
```

4. But it's size is very small, let's style it! According to the [documentation](https://github.com/react-icons/react-icons#configuration), all icons have a `prop` called `size` and the default is `1em`. So let's change it to `2em`. We'll also give it a `float-right` class to change its position.

```jsx
<BsPlusCircle className="float-right" size="2em" />
```

5. And our button is ready!

## Step 2: Modal

Now when clicking on this button, we want to open a modal. We won't be using bootstrap's modal, instead we will use `react-modal`.

1. Install `react-modal`:

```shell
  $ yarn add react-modal
```

2. Let's take a look at the [documentation](https://www.npmjs.com/package/react-modal). As you can see, a modal needs a state to open and close it. And we need to pass the state and set method to the modal.

3. So lets create our state first in `CookieList`:

```javascript
const [isOpen, setIsOpen] = useState(true);
```

4. Let's also create two methods that open and close the modal by changing the value of `isOpen`:

```javascript
const closeModal = () => setIsOpen(false);

const openModal = () => setIsOpen(true);
```

5. Pass `openModal` to our create button's `onClick` that opens the modal for us:

```jsx
<BsPlusCircle
  className="float-right"
  size="2em"
  onClick={() => setIsOpen(true)}
/>
```

6. Now let's create our modal component. Create a new folder called `modals` and a file called `CookieModal`. Setup your component:

```javascript
import React from "react";

const CookieModal = () => {
  return <div></div>;
};

export default CookieModal;
```

7. In `CookieModal`, import `Modal` from `react-modal`.

```javascript
import Modal from "react-modal";
```

8. Render `Modal`, remove `onAfterOpen`.

```javascript
return (
  <Modal
    isOpen={}
    onRequestClose={}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h3>New Cookie</h3>
  </Modal>
);
```

9. As you can see we need to pass `isOpen` and `setIsOpen` as `props`. So go back to `CookieList`, and pass them.

```jsx
<CookieModal isOpen={isOpen} closeModal={closeModal} />
```

10. Pass `isOpen` and `setIsOpen` to `Modal`.

```jsx
<Modal
  isOpen={showModal}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Example Modal"
>
  <h3>New Cookie</h3>
</Modal>
```

11. Let's try out our modal. Yay It's working!

12. Now we'll pass it to `Modal`:

```jsx
<Modal
  isOpen={showModal}
  onRequestClose={closeModal}
  style={modalStyle}
  contentLabel="Example Modal"
>
  <h3>New Cookie</h3>
</Modal>
```

13. Our modal is ready! Let's add a form to it!

## Step 3: Add Button Component

Before adding our form, let's clean our code. Let's move the add button and modal into their own component.

1. Create a new component in `buttons` called `AddButton`.

```javascript
import React from "react";

const AddButton = () => {
  return <div></div>;
};

export default AddButton;
```

2. Move the add button and modal to `AddButton` and wrap them with a fragment. Don't forget to move the imports as well.

```jsx
<>
  <BsPlusCircle
    className="float-right"
    size="2em"
    onClick={() => setIsOpen(true)}
  />
  <CookieModal isOpen={isOpen} closeModal={closeModal} />
</>
```

3. Move the `isOpen` state and methods

```javascript
const [isOpen, setIsOpen] = useState(true);

const closeModal = () => setIsOpen(false);

const openModal = () => setIsOpen(true);
```

4. Now render `AddButton` in `CookieList`.

```jsx
<AddButton />
```

Wow! Much cleaner.

## Step 4: Set Form

To create a cookie form we need 4 fields, `name`, `description`, `price` and `image`.

1. So let's set our `form` tags and inside it add our `input` tags

```jsx
<form>
  <input />
  <input />
  <input />
  <input />
</form>
```

2. Now to make styling easier, I will use Bootstrap. I've prepared the following form:

```jsx
<form>
  <div className="form-group row">
    <div className="col-6">
      <label>Name</label>
      <input className="form-control" />
    </div>
    <div className="col-6">
      <label>Price</label>
      <input className="form-control" />
    </div>
  </div>
  <div className="form-group">
    <label>Description</label>
    <input className="form-control" />
  </div>
  <div className="form-group">
    <label>Image</label>
    <input className="form-control" />
  </div>
</form>
```

3. Now we need to set the type of each input field to prevent the user from writing strings in a the price field for example. To do that, we will use the attribute `type`. `name`, `description` and `image` are supposed to be of type `text` and `price` is `number`. Keep in mind that our images as this point are image addresses or URLs:

```jsx
<form>
  <div className="form-group row">
    <div className="col-6">
      <label>Name</label>
      <input type="text" className="form-control" />
    </div>
    <div className="col-6">
      <label>Price</label>
      <input type="number" className="form-control" />
    </div>
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" className="form-control" />
  </div>
  <div className="form-group">
    <label>Image</label>
    <input type="text" className="form-control" />
  </div>
</form>
```

4. Let's try it out. Now for the price field, we will set the minimum value to `1` so that we don't get a `0` or a negative number:

```jsx
<input type="number" min="1" className="form-control" />
```

5. Our form is ready!

6. So now we need to capture the user's input and save it. So we will create an object state that has a property for every field.

```javascript
const [cookie, setCookie] = useState({
  name: "",
  price: 0,
  description: "",
  image: "",
});
```

7. Create a function that will handle the change in the `name` field. Basically we will de-structure our `cookie` object and overwrite the `name` field:

```javascript
const handleChange = (event) => {
  setCookie({ ...cookie, name: event.target.value });
};
```

8. Pass the function to the `name`'s input field:

```jsx
<input type="text" className="form-control" onChange={handleChange} />
```

8. But are we gonna do this for all our input fields? There is an easier way, first we will add give a `name` to every `input` tag. Take care that the name must be the same as the key in the `cookie` state:

```jsx
<input
  type="text"
  className="form-control"
  name="name"
  onChange={handleChange}
/>
```

```jsx
<input type="text" className="form-control" name="description" />
```

9. In `handleChange`, instead of adding an if-condition that checks the name of the input field, we will make our key dynamic:

```javascript
const handleChange = (event) => {
  setCookie({ ...cookie, [event.target.name]: event.target.value });
};
```

10. So now whenever the user types in anything in any field, it's being saved into our component's state.

11. Let's add a `Create` button. In `styles`:

```javascript
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
```

12. Import `CreateButtonStyled` in `CookieModal`, and place it at the end of the form.

```jsx
<CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>
</form>
```

13. Now let's create our function that will pass this object to `cookies`. For now let's just console.log it:

```javascript
const handleSubmit = () => {
  console.log(cookie);
};
```

14. We will use a new event called `onSubmit`. `onSubmit` can be triggered when we click on our button, or when we even just press on the enter key!

15. The `onSubmit` method is added to the `form` tag.

```jsx
 <form onSubmit={handleSubmit}>
```

16. Let's try submitting it. Oops, the page is being refreshed. That's because `onSubmit`'s default behavior is refreshing the page. We can easily prevent that by using the `preventDefault` method:

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(cookie);
};
```

17. Let's try again. Yaay it's working!

## Step 5: Creating a New Cookie

Now to create a new cookie, we need a method that will add this cookie to our `_cookies` state. So we will create a method that takes the new cookie as an argument add it to `_cookies` and pass this method as a prop down to our modal.

1. In `App.js`, let's create our method `createCookie` that takes `newCookie` as an argument:

```javascript
const createCookie = (newCookie) => {};
```

2. How can we update a state that's an array? We can do it the long way:

```javascript
const createCookie = (newCookie) => {
  const updatedCookies = _cookies;
  updatedCookies.push(newCookie);
  setCookies(updatedCookies);
};
```

3. Let's try this method out first, pass it as a prop to `CookieList`:

```jsx
<CookieList
  cookies={_cookies}
  createCookie={createCookie}
  deleteCookie={deleteCookie}
/>
```

4. De-structure `props` in `CookieList`:

```javascript
const CookieList = ({ cookies, createCookie, deleteCookie }) => {
```

5. Pass `createCookie` again to `CookieModal`:

```jsx
<CookieModal
  isOpen={isOpen}
  closeModal={closeModal}
  createCookie={createCookie}
/>
```

6. De-structure `props` in `CookieModal`:

```javascript
const CookieModal = ({ isOpen, closeModal, createCookie }) => {
```

7. Pass the method to `handleSubmit`:

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  const newCookie = {
    name,
    price,
    description,
    image,
  };
  createCookie(newCookie);
};
```

8. Let's try it out. Yaay, it's working! Now let's cleanup `createCookie` a bit.

9. So we can pass `setCookies` a de-structured array `_cookies` and `newCookie` added to it.

```javascript
const createCookie = (newCookie) => {
  setCookies([..._cookies, newCookie]);
};
```

10. Much cleaner! And let's try it out. Yes! It's working.

11. But now, we want our modal to close automatically after creating a cookie. We can easily call `closeModal` in `handleSubmit`
