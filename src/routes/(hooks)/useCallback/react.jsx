// This function (component) is executed on every render
function Component() {
    // this event handler is redefined on every render
    const handleClick = () => alert("hello")

    // because `handleClick` is redefined on every render, `ChildComponent` will be re-rendered too. Because its `onClick` prop is considered changed.
    return <ChildComponent onClick={handleClick} />
}
