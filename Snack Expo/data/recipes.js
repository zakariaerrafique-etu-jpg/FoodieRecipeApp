
export const categories=[
"Breakfast",
"Lunch",
"Dinner",
"Dessert",
"Pizza",
"Burger",
"Asian",
"Italian",
"Moroccan",
"Drinks",
"Vegetarian"
];  
<FlatList
horizontal
data={categories}
renderItem={({item})=>
<CategoryCard title={item}/>
}


{
id:1,

name:"Chicken Tajine",

image:"https://...",

category:"Moroccan",

ingredients:[
"Chicken",
"Olive",
"Potato"
],

instructions:[
"Cut ingredients",
"Cook slowly",
"Serve hot"
],

time:"45 min",

servings:4,

calories:650,

difficulty:"Medium"
}

  const filteredRecipes =
recipes.filter(
item=>item.category===selectedCategory
);


/>
