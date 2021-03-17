# Photo Store Capstone project

#### test
## Project Overview

E-Commerce Image site like picsum or Unsplash.
1. Preview Image selection ,
2. Favorite the image selection
3. Add the images to cart.
4. Upon Checkout, cart images are printed and shipped out to the customers

## Important Notes

### Image attributions:
https://picsum.photos/

https://unsplash.com/

### GitHub repo of images and JSON file
https://github.com/bobziroll/scrimba-react-bootcamp-images

### Icon library
https://remixicon.com/

### Libraries
* React Router - https://reacttraining.com/react-router/web/guides/quick-start
* PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html


### Step 1 - Setup React Router for Home page and Cart page

```
Header.js

     <header>
         <Link to="/">
            <h2>Pic Some</h2>
         </Link>

         <Link to="/cart">
           <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
         </Link>
          
        </header>


App.js

      <Switch>
        <Route exact path="/">
          {" "}
          <Photos />{" "}
        </Route>
        <Route path="/cart">
          {" "}
          <Cart />{" "}
        </Route>
      </Switch>
```

### Step 2 - Setup Context for the App for global data

# Challenge

Set up the Context for our app.

1. In a new file, create a new context with React
2. In that same file, create a custom component that renders the Provider of the context you created
3. For now, just pass in an empty string "" as the context provider's value prop
4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)


# Challenge

Add state to our context and pass it through the Provider

1. Add state to hold the array of all photos our app gets from the API
2. Pass the array of all photos through the value of the provider so it's available anywhere the app accesses the context
