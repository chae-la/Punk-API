# Punk API

### Language(s) Used

1. Typescript: 5.2.2

### Dev Dependencies

1. SASS: 1.71.1
2. Vite: 5.1.4
3. Typescript: 5.2.2
4. React: 18.2.0

## Table of Contnets

- [Introduction](#introduction)
- [Punk-API Preview](#Punk-api-preview)
- [Code Snippet](#code-snippet)
- [Setup](#setup)

## Introduction

Brewdog's vast menu of specially brewed IPAs in a tidied API where you're able to search for a specific drink or use the filters to find a drink that is perfect for you.

## Punk-API Preview

![An image of the webpage](/src/assets/images/webpage-screenshot.png "image of webpage in mobile view")

## Features

- Able to look through the whole catalogue of drink Brewdog's has to offer.
- Search for a specific drink in the "Explore Our Collection..." input menu
- Filter using three options, including ABV, acidity and first-brewed.
- In the "More" section, user is able to see what foods the drink pairs well with and also any tip's the brewer has.

## Code Snippet

```import "./Button.scss";

type ButtonProps ={
    label: string;
}

const Button = ({label}: ButtonProps) => {
    return(
        <button className="button">{label}</button>
    )
}
export default Button;
```

Components are essential in building webpages and webapps in React, they are reusuable and ensures the code is clean and easy to read. The copmponents should usually be simple, for that reusability, and customisable if changes are to be made. This "Button" component is at its most basic. it isused in the "FilterTab" container and "Card" component. 

## Setup

1. Clone this repository to your local machine.
2. Navigate to the "src" folder to find the Typescript, if changes are desired.
3. Open a new terminal and type "npm run dev"
