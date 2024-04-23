# Date Counter

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Push buttons to increase or decrease value
- Value should dictate days from current date
- Version 2, should be able to use a range input and type-in input

### Screenshot

![](./screen.JPG)

### Links

- Live Site URL: [View](https://datecounter3.netlify.app/)

## My process

# Version 1:

- This component manages a date counter with step and count states using useState.
- It allows incrementing or decrementing the step value and updating the count accordingly.
- The updateDate function calculates a new date based on the count changes, adjusting the displayed date accordingly.
- The component renders buttons to adjust the step and count values and displays the calculated date based on the count.

# Version 2:

- This component implements another type of date counter with a slider input (range) and count state.
- It uses useState to manage the count and range values.
- The handleInput function updates the range state based on user input from the slider.
- It calculates a new date based on the count and displays it dynamically, allowing the user to adjust the count with input fields and buttons.
- The component includes a reset button to reset the count and range back to their initial values.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-Responsive Design
- JavaScript - Scripting language
- [React](https://reactjs.org/) - JS library

### What I learned

This was a class project to learn about useState. I finally truly understand it now.

### Continued development

maybe use later

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)
