# card-stack

The card stack component is a simple example of how to display a group of elements on-top of each other. For design sake, we limit the maximum number of children than can render at a given time.

## Further Development

To take this example further, you would most likely extend the `.content` class element to render an actual card's contents. You would supply an interface shape for the `cards` property and have an animation for enter/leave on each individual card (if you wanted it to act like a slider).


Design Reference:

- [Dribbble](https://dribbble.com/shots/6681943-Quzi-Question-Answer-App-Ui/attachments)



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                       | Type    | Default            |
| -------- | --------- | --------------------------------- | ------- | ------------------ |
| `cards`  | --        | The collection of cards to render | `any[]` | `[{}, {}, {}, {}]` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
