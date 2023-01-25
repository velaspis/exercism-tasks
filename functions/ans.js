// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime === undefined) {
    return "You forgot to set the timer.";
  } else return "Not done, please wait.";
}

export function preparationTime(layers, preparationTime) {
  console.log(preparationTime, layers.length);
  return preparationTime * layers.length || 2 * layers.length;
}
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      noodles += 50;
    } else if (layers[i] === "sauce") {
      sauce += 0.2;
    }
  }
  return {
    noodles,
    sauce,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  // calculate the scaling factor
  const factor = portions / 2;

  // create a new object to store the scaled recipe
  const scaledRecipe = {};

  // use a for...in loop to go through all entries in the original recipe
  for (const ingredient in recipe) {
    // scale the amount of each ingredient by the factor
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return scaledRecipe;
}
