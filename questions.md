<h3>
1. What is the difference between Component and PureComponent? give an example where it might break my app.
</h3>

<span>
Tha mainly difference is that the PureComponent does a shallow comparison on state change and basically the React.Component does not implement shouldComponentUpdate function by default.
</span>

<br /><br />

<h3>
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
</h3>

<span>
Basically because when the shouldComponentUpdate function returns a falsy it can cause any context update to no longer propagate to the children's of the context.
</span>

<br /><br />

<h3>
3. Describe 3 ways to pass information from a component to its PARENT.
</h3>


1 - Using redux to create a global state to be accessible to the parent (and others components)<br/>
2 - The child component can have a function that is passed to the parent by a prop
````zsh
export const ParentComponent = () => {
  return (
    <ChildComponent
      onClickButton={ /* call some function here */ }
    />
  )
}

export const ChildComponent = (onClickButton) => {
  return (
    <button onClick={() => onClickButton()}>Click</button>
  )
}
````
3 - Using a custom hooks returning the values to the parents

<br/><br/>

<h3>4. Give 2 ways to prevent components from re-rendering.</h3>

<span>
1 - useMemo and useCallback function <br/>
2 - React.memo (HOC to memoization components) <br/>
3 - And moving state down when a heavy component manages state<br/>
</span>

<br/><br/>

<h3>
5. What is a fragment and why do we need it? Give an example where it might break my app.
</h3>

<span>
Fragment defines the layout not putting any additional element into DOM. Example:
</span>

````zsh
  export const Component = () => {
    return (
      <>
        <div>Content</div>
      </>
    )
  }

  or

  export const Component = () => {
    return (
      <Fragment>
        <div>Content</div>
      </Fragment>
    )
  }
````

<br/><br/>

<h3>
6. Give 3 examples of the HOC pattern.
</h3>

<span>
I know we have a HOC that a component receive another component like
</span>

````zsh
export default withSomething(App)
````

<span>
And also using the compose redux like
</span>

````zsh
compose(/*code*/)(Component)
````

<br/><br/>

<h3>
7. what's the difference in handling exceptions in promises, callbacks and async...await.
</h3>

<span>
In promises we can handle with resolve/reject<br/>
In callbacks we can handle with a catch to be executed if the first function get an error<br/>
In async await we can handle with try/catch<br/>
</span>

<br/><br/>

<h3>
8. How many arguments does setState take and why is it async.
</h3>

<span>
Takes two arguments, the first one is the "updater" and the second one is an optional callback function.
And it's async basically to provide a better performance to the user.
</span>

<br/><br/>

<h3>
9. List the steps needed to migrate a Class to Function Component.
</h3>

<span>
1 - Change the body like "class Button extends Component" to a functional component like "export const Button = () => {}"<br/>
2 - Remove the render() method and keep only the return()<br/>
3 - Switch the methods function like "getList() {}" to arrows const functions like "const getList = () => {}"<br/>
4 - Remove the constructor, and change the this.state to useState hooks.<br/>
5 - Also can change the componentDidMount/componentWillMount to useEffect hooks.
</span>

<br/><br/>

<h3>
10. List a few ways styles can be used with components.
</h3>

<span>
1 - styled-components<br/>
2 - tailwind-css<br/>
3 - SASS<br/>
4 - LESS<br/>
5 - inline css like:
</span>

````<div style={{ width: "100px" }} />````

<br/><br/>

<h3>
11. How to render an HTML string coming from the server.
</h3>

<span>
Basically using the dangerouslySetInnerHTML
</span>